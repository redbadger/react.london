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

function s3Get(key) {
  const attrs = {
    Bucket: process.env.AWS_PUBLISH_BUCKET,
    Key: key,
  };
  return s3.getObject(attrs).promise();
}

let doStore = s3Store;
let doGet = s3Get;

export function setBackend(storeFunc, getFunc) {
  doStore = storeFunc;
  doGet = getFunc;
}

export function store(key, fileContent) {
  return doStore(key, fileContent);
}

export function get(key) {
  return doGet(key);
}
