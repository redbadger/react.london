import AWS from 'aws-sdk';

const s3 = new AWS.S3();

AWS.config.update({ region: 'eu-west-1' });

export function publishPage({ path, body }, bucketName) {
  s3.putObject({
    Bucket: bucketName,
    Key: path,
    ACL: 'public-read',
    Body: body,
    ContentType: 'text/html',
  }, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
}

export function publishSite(pages, bucketName) {
  pages.map(page => publishPage(page, bucketName));
}
