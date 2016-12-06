react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=shield)](https://circleci.com/gh/redbadger/react.london)
[![Coveralls](https://coveralls.io/repos/github/redbadger/react.london/badge.svg)](https://coveralls.io/github/redbadger/react.london)
[![Code Climate](https://codeclimate.com/github/redbadger/react.london/badges/gpa.svg)](https://codeclimate.com/github/redbadger/react.london)

A site for the React London community & conference.

This project employs a number of Javascript libraries and approaches,
including _React_, _Server-Side Rendering_, _GraphQL_, and _WebPack_.

Most importantly, we're utilising GDD (Gif Driven Development).

<img src="https://raw.github.com/redbadger/react.london/master/assets/img/cat-hacking.gif" />

## Getting started

### Dev

* Install [NodeJS](https://nodejs.org/en/)
* Install [npm](https://www.npmjs.com)

Add these lines to your hosts file

```
127.0.0.1	dev.react.london
127.0.0.1	meetup-dev.react.london
```

Then you can access the community site from `meetup-dev.react.london:8080` and
the conference site from `dev.react.london:8080`.

Create a `.env` file with contents provided by an admin or copy from `.env.example`.

```sh
# Update the current shell environment
source .env

# Install the dependencies
npm install

# Print task help
make

# Run the dev frontend compiler
make build

# Run the dev server
# (make build must be running)
make start

# Run the tests
make test
make test-watch
make lint
```

### Deployment

The site is compiled to a docker image and deployed to AWS Elastic Beanstalk.

* Install [Docker](https://www.docker.com/)
* Install [AWS CLI](https://aws.amazon.com/cli/)

The docker images are built from the master branch on CI, and are automatically
deployed to staging.

Once built versions can be manually deployed using either the Elastic
Beanstalk Application Versions section of the AWS web console, or with the
commands below:

```sh
# Deploy the current commit to staging
make deploy-staging
# Deploy the current commit to production
make deploy-production
```
