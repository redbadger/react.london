react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=shield)](https://circleci.com/gh/redbadger/react.london)
[![Coveralls](https://coveralls.io/repos/github/redbadger/react.london/badge.svg)](https://coveralls.io/github/redbadger/react.london)
[![Code Climate](https://codeclimate.com/github/redbadger/react.london/badges/gpa.svg)](https://codeclimate.com/github/redbadger/react.london)

A site for the React London Community.

This project employs a number of Javascript libraries and approaches,
including _React_, _Redux_, _Server-Side Rendering_, GraphQL, and _WebPack_.

Most importantly, we're utilising GDD (Gif Driven Development).

<img src="https://raw.github.com/red-badger/react.london/master/assets/img/cat-hacking.gif" />

## Getting started

### Dev

* Install [NodeJS](https://nodejs.org/en/)

```sh
# Print task help
make

# Run the dev server
make start
# Run the dev frontend compiler
make build

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
