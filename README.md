react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=svg)](https://circleci.com/gh/redbadger/react.london)

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

# Set up the dev seed data
make seed

# Run the server
make start

# Run the tests
make test
make test-watch
make lint
```

### Deployment

The site backend is deployed to AWS Elastic Beanstalk.

```sh
# Set up the elastic beanstalk CLI tools
pip install awsebcli
cd /path/to/react.london
eb init

# Deploy staging
???
# Deploy production
???
```
