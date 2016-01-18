[![Stories in Ready](https://badge.waffle.io/codefordenver/code-for-denver-site.png?label=ready&title=Ready)](http://waffle.io/codefordenver/code-for-denver-site)

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

> NOTE: If this needs to be set up again, the heroku `NPM_CONFIG_PRODUCTION` config must be set to false (as seen in app.json) as development dependencies are needed to run the process specified in the Procfile
