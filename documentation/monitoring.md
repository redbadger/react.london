Monitoring
==========

## Basic monitoring

As the app is deployed on AWS Elastic Beanstalk basic cloudwatch app metrics
can be viewed on the AWS EB console under the "Monitoring" section.


## Deployment monitoring

When CI deploys the app to staging it will post a message in slack.

Currently there is no alerting for when a deploy succeeds or fails, this would
be nice to have!


## Exception monitoring

When the app throws an exception on production or staging the `raven` library
will report it to [Sentry](https://getsentry.com), and Sentry will ping us in
Slack. Error reports can be viewed on the Sentry website.


## Uptime monitoring

New Relic pings the app every 10 minutes and will notify us in Slack if it
thinks the app is down.
