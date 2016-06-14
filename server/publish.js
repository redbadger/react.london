import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export default function publish(site, bucketName) {
  AWS.config.update({
    region: 'eu-west-1',
  });

  s3.putObject({
    Bucket: bucketName,
    Key: 'index.html',
    ACL: 'public-read',
    Body: site,
    ContentType: 'text/html',
  }, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
}
