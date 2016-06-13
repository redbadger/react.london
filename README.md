react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=svg)](https://circleci.com/gh/redbadger/react.london)

A static site generator for the monthly London React meetup. Allows WYSIWIG creation and deployment of meetup information pages.

This project employs a number of javascript frameworks and approaches,
including _React_, _Redux_, _Redux Forms_, _Scribe_, _Radium_, _Server-Side
Rendering_, and _WebPack_. Most importantly, we're utilising EDD (Emoji Driven
Development 😱).

Generated pages are deployed to and hosted on AWS S3 buckets.

## 🏃Getting started

Before starting, be aware you will require an AWS account to push static pages
to the web. AWS will inspect ENV variables for credentials at runtime. Bucket
locations are currently hard-coded but will be configurable soonⒸ.

### Dev Setup

* Install [NodeJS](https://nodejs.org/en/)
* Install [Terraform](https://www.terraform.io/)
* Install [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

```sh
# Install the dependencies
npm install
# Set up the environment variables (get them from another dev)
cp .env.example .env
vim .env
cp infrastructure/secrets.tfvars.example infrastructure/secrets.tfvars
vim infrastructure/secrets.tfvars
```

### 💻 Dev

```sh
# Print task help
make

# Run the dev server on localhost:8080
make start

# Run the tests
make test
make test-server
make test-watch
make lint

# Provision infrastructure
make terraform-staging
make terraform-staging-apply
```
