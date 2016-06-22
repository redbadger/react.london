//
// A backend for the storage module that persists data on AWS S3
//

import AWS from 'aws-sdk';
import { setBackend } from '.';

const s3 = new AWS.S3();

AWS.config.update({ region: 'eu-west-1' });
AWS.config.setPromisesDependency(null); // Enable native promises

function put(key, fileContent) {
  const attrs = {
    Bucket: process.env.AWS_PUBLISH_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fileContent,
    ContentType: 'text/html',
  };
  return s3.putObject(attrs).promise();
}

function get(key) {
  const attrs = {
    Bucket: process.env.AWS_PUBLISH_BUCKET,
    Key: key,
  };
  return s3.getObject(attrs).promise();
}

export function useS3Store() {
  setBackend({ put, get });
}
