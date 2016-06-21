react.london
============

[![CircleCI](https://circleci.com/gh/redbadger/react.london.svg?style=svg)](https://circleci.com/gh/redbadger/react.london)

A static site generator for the monthly London React meetup. Allows WYSIWIG
creation and publication of meetup information pages.

This project employs a number of Javascript libraries and approaches,
including _React_, _Redux_, _Redux Forms_, _Scribe_, _Radium_, _Server-Side
Rendering_, and _WebPack_. Most importantly, we're utilising EDD (Emoji Driven
Development 😱).

Generated pages are hosted on AWS S3.

## 🏃Getting started

### Dev Setup

* Install [NodeJS](https://nodejs.org/en/)
* Install [Terraform](https://www.terraform.io/)
* Install [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* Install [Sass CLI](http://sass-lang.com/install)

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

# get the assets (must have Sass cli)
make build

# Run the dev server on localhost:8080
make start

# Run the sass watcher (must have Sass cli)
make css-watch

# Run the tests
make test
make test-watch
make lint

# Provision infrastructure
make terraform-staging
make terraform-staging-apply
```

### Deployment

The editor is currently on Heroku.

```sh
# Add the staging remote
heroku git:remote -r staging -a staging-react-london
# Deploy staging
git push staging master
```
