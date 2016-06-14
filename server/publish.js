import AWS from 'aws-sdk';

const s3 = new AWS.S3();

AWS.config.update({ region: 'eu-west-1' });
AWS.config.setPromisesDependency(null); // Enable native promises

export function publishPage({ path, body }) {
  const attrs = {
    Bucket: process.env.AWS_PUBLISH_BUCKET,
    Key: path,
    ACL: 'public-read',
    Body: body,
    ContentType: 'text/html',
  };
  return s3.putObject(attrs).promise();
}

export function publishSite(pages) {
  return Promise.all(
    pages.map(publishPage)
  );
}
