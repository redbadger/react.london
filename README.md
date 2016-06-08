# react.london
A static site generator for the monthly London React meetup. Allows WYSIWIG creation and deployment of meetup information pages.

This project employs a number of javascript frameworks and approaches, including _React_, _Redux_, _Redux Forms_, _Scribe_, _Radium_, _Server-Side Rendering_, _WebPack_, and utilising EDD (Emoji Driven Development 😱).

Generated pages are deployed to and hosted on AWS S3 buckets.

## 🏃Getting started
Before starting, be aware you will require an AWS account to push static pages to the web. AWS will inspect ENV variables for credentials at runtime. Bucket locations are currently hard-coded but will be configurable soonⒸ.

### Dev Setup

* Install [NodeJS](https://nodejs.org/en/)
* Install [CouchDB](http://couchdb.apache.org/)

```sh
# Install the dependencies
npm install
# Configure the database
sh couchdbsetup.sh
# Set up the environment variables
cp .env.example .env
vim .env  # Get values from another dev
```

### 💻 Dev

1. Standard start
``` npm install ```
and wait 🕣 for it to do its thing.
2. `npm start` to start the node server.
3. Navigate to http://localhost:8080 to see the site

If you're running with Marcel or Zoë who have access to the default *BadgerDev* account, you should be able to see the current public staging site [here](http://london.react.live.s3-website-eu-west-1.amazonaws.com/) and the live one [here](http://london.react.dev.s3-website-eu-west-1.amazonaws.com/).

(Until we go live, which will then be discoverable at 🌟react.london🌟)

### Tests
Note: Ensure dependencies have been installed as per Dev step 1

- `npm test` runs application tests
- `npm run test-watch` applies a watcher to `npm test` and picks up changes between test runs
- `npm run test-server` runs server-specific tests
