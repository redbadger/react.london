#!/usr/bin/env bash

VERSION=$(git rev-parse HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD | sed 's/[^a-zA-Z_-]/-/g')
TAG=$BRANCH-$VERSION
APP_NAME=react-london
AWS_ACCOUNT=578418881509
AWS_REGION=eu-west-1
ECR_REPO=$AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/$APP_NAME
EB_BUCKET=elasticbeanstalk-$AWS_REGION-$AWS_ACCOUNT

set -eu
set -o pipefail

echo Creating new application version $TAG

# Authenticate
# Requires these env vars set on CI:
#   - AWS_ACCESS_KEY_ID
#   - AWS_SECRET_ACCESS_KEY
echo Authenticating.
eval $(aws ecr get-login --region=$AWS_REGION | sed 's|https://||')

echo Building docker image
docker build -t $APP_NAME --build-arg GIT_COMMIT=$(git rev-parse --short HEAD) .
docker tag $APP_NAME $ECR_REPO:$TAG

echo Pushing docker image
docker push $ECR_REPO:$TAG

echo Creating new EB version zip
cp Dockerrun.aws.json.template Dockerrun.aws.json
perl -pi -e "s,<ECR_REPO>,$ECR_REPO,g" "Dockerrun.aws.json"
perl -pi -e "s,<TAG>,$TAG,g" "Dockerrun.aws.json"
ZIP_FILE=$TAG.zip
zip -r $ZIP_FILE Dockerrun.aws.json

echo Pushing EB version zip to S3
aws s3 cp $ZIP_FILE s3://$EB_BUCKET/$APP_NAME/$ZIP_FILE

echo Registering new EB application version
aws elasticbeanstalk create-application-version \
  --application-name $APP_NAME \
  --version-label $TAG \
  --source-bundle S3Bucket=$EB_BUCKET,S3Key=$APP_NAME/$ZIP_FILE \
  --region $AWS_REGION

echo Done
