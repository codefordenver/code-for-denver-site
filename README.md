[![Stories in Ready](https://badge.waffle.io/codefordenver/code-for-denver-site.png?label=ready&title=Ready)](http://waffle.io/codefordenver/code-for-denver-site)
[![Build Status](https://travis-ci.org/codefordenver/code-for-denver-site.svg?branch=master)](https://travis-ci.org/codefordenver/code-for-denver-site)

# [Code for Denver Website](http://www.codefordenver.org/)

## Developing

### Dependencies
You will need:
- [Node.js](https://nodejs.org/)

To install local dependencies, run:
```bash
npm install
```

### Running
To start the local app server for development, run:
```
npm start
```

## Deploying

[Travis CI](https://travis-ci.org/) is configured to build and deploy to github pages, on merges to `master`.

If for some reason you need to do a manual deploy you will need a github token. This can be obtained
[here](https://github.com/settings/tokens) (you will likely only need the `public_repo` option).

You can then deploy using:
```bash
 GH_TOKEN=<your token> GH_REF=github.com/<your name>/code-for-denver-site.git ./deploy.sh
```

## Review apps
When opening a pull request, heroku is configured to deploy a review app for that pull request so the content can be viewed and tested on an actual website.

### How this works
There is a heroku app set up to automatically deploy [review apps](https://devcenter.heroku.com/articles/github-integration-review-apps) when it sees pull requests for this repo.

When a pull request is opened, heroku uses the [app.json](app.json) file to set up the configuration for the review app, and after installing npm dependencies runs the command specified in the [Procfile](Procfile).

> NOTE: The heroku `NPM_CONFIG_PRODUCTION` environment variable must be set to `false` (as seen in app.json) so that all the npm dependencies (including devDependencies) are installed before the app is started


