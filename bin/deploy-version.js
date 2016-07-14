#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path');
const childProcess = require('child_process');

const app = 'react-london';
const region = 'eu-west-1';
const environment = process.argv[2];
const target = `${app}-${environment}`;

if (!environment) {
  console.log('Usage:');
  console.log(`  ${path.basename(__filename)} version-label`);
  process.exit(1);
}

function shell(command) {
  try {
    return childProcess.execSync(command).toString('utf-8').trim();
  } catch (e) {
    console.log(e.message);
    return process.exit(1);
  }
}

function versionExists(versionLabel) {
  const cmd = 'aws elasticbeanstalk describe-application-versions ' +
    `--region=${region} --version-labels=${versionLabel}`;
  return JSON.parse(shell(cmd)).ApplicationVersions.length > 0;
}

const version = shell('git rev-parse HEAD');
console.log(`Checking version ${version}`);

if (!versionExists(version)) {
  console.log(`Error: Application version ${version} not found on AWS EB`);
  console.log('Perhaps this version has not been built on CI yet?');
  process.exit(1);
}

console.log('Found!');
console.log(`Deploying ${version} to ${environment}`);

shell(
  'aws elasticbeanstalk update-environment ' +
    `--region=${region} --version-label=${version} ` +
    `--environment-name=${target}`
);

console.log('AWS EB deployment rollout in progress');
