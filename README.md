react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=shield)](https://circleci.com/gh/redbadger/react.london)

A site for the monthly React London Community

This project employs a number of Javascript libraries and approaches,
including _React_, _Redux_, _Server-Side Rendering_, and _WebPack_. Most
importantly, we're utilising EDD (Emoji Driven Development 😱).

## 🏃 Getting started

### 💻 Dev

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

The site is deployed to AWS Elastic Beanstalk.

* Install [Docker](https://www.docker.com/)
* Install [AWS CLI](https://aws.amazon.com/cli/)

```sh
# Deploy staging
make deploy-staging
# Deploy production
make deploy-production
```
