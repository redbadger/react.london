import './mock';
import AWS from 'aws-sdk';

const s3 = new AWS.S3();

AWS.config.update({ region: 'eu-west-1' });
AWS.config.setPromisesDependency(null); // Enable native promises

function s3Store(key, fileContent) {
  const attrs = {
    Bucket: process.env.AWS_PUBLISH_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fileContent,
    ContentType: 'text/html',
  };
  return s3.putObject(attrs).promise();
}


let backend = s3Store;

export function setBackend(x) {
  backend = x;
}

export function store(key, fileContent) {
  return backend(key, fileContent);
}
