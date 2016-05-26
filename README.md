# react.london
A static site generator for the monthly London React meetup. Allows WYSIWIG creation and deployment of meetup information pages.

This project employs a number of javascript frameworks and approaches, including _React_, _Redux_, _Redux Forms_, _DraftJS_, _Radium_, _Server-Side Rendering_, _WebPack_, _HMR_, and utilising EDD (Emoji Driven Development 😱).

Generated pages are deployed to and hosted on AWS S3 buckets.

## 🏃Getting started
Before starting, be aware you will require an AWS account to push static pages to the web. AWS will inspect ENV variables for credentials at runtime. Bucket locations are currently hard-coded but will be configurable soonⒸ.

### 🛠 Dependencies
1. [NodeJS](https://nodejs.org/en/)
2. [CouchDB](http://couchdb.apache.org/)

### 🔬 Config
The project requires a number of external services which utilise secret keys and configurations. By default, a file is kept at `/.env` to contain these details which are loaded as environment variables at run-time. You will have to ask a fellow dev for the file or create one yourself in the following format.

```
ALLOWED_DOMAIN=<Your email domain you want to allow>
SESSION_SECRET=<Random string for session cookies>
OAUTH_CLIENT_ID=<Google project OAuth Client ID>
OAUTH_SECRET=<Google project OAuth Secret Key>
BUCKET_STAGING=<Name of staging S3 bucket>
BUCKET_LIVE=<Name of live/production S3 bucket>
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