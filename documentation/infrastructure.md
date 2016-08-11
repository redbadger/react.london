Infrastructure
==============

![Infrastructure diagram](https://raw.githubusercontent.com/redbadger/react.london/master/documentation/assets/react-london-infrastructure.png)

React.London is a node app with an isomorphic React JS frontend.

The application is deployed as a docker image to Elastic Beanstalk, the AWS
platform as a service. As a result deployment and infrastructure is largely
automated for us AWS. For information on Elastic Beanstalk see the [official
documentation][eb-docs].

[eb-docs]: http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html


## Getting code live

The backend is deployed as a [docker](https://www.docker.com/) image, so we
need to build the image before we can deploy it. [CircleCI](https://circleci.com)
is a third party continuous integration service that we use to run out test
suite whenever new code is pushed to GitHub.

If the tests pass and the code is on the master branch CircleCI will do the
following deployment steps:

1. Build a new docker image from the updated app code.
2. Push the image to AWS ECR, the docker image registry we use.
3. Register a new Elastic Beanstalk application version that uses this new
   docker image.
4. Instruct Elastic Beanstalk to deploy the new application version to
   React.London [staging environment](https://staging.react.london/). This
   will take a few minutes to roll out.

Once code has been verified as working on staging we can deploy to production.
We use the same image on staging and production so instruct Elastic Beanstalk
to deploy the same version to the production environment, either with the
`make deploy-production` command or with the AWS web console.
