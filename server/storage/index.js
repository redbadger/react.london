import AWS from 'aws-sdk';

const s3 = new AWS.S3();

AWS.config.update({ region: 'eu-west-1' });
AWS.config.setPromisesDependency(null); // Enable native promises

export function store(key, fileContent) {
  const attrs = {
    Bucket: process.env.AWS_PUBLISH_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fileContent,
    ContentType: 'text/html',
  };
  return s3.putObject(attrs).promise();
}
