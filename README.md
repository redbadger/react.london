react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=svg)](https://circleci.com/gh/redbadger/react.london)

A site for the monthly React London Community

This project employs a number of Javascript libraries and approaches,
including _React_, _Redux_, _Server-Side Rendering_, and _WebPack_. Most
importantly, we're utilising EDD (Emoji Driven Development 😱).

Generated pages are hosted on AWS S3.

## 🏃Getting started

### Dev Setup

* Install [NodeJS](https://nodejs.org/en/)
* Install [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

### 💻 Dev

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

The editor is currently on Heroku.

```sh
# Add the staging remote
heroku git:remote -r staging -a staging-react-london
# Deploy staging
git push staging master
```
