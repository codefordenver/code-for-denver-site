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

In order to do a manual deploy you will need a github token. This can be obtained
[here](https://github.com/settings/tokens) (you will likely only need the `public_repo` option).

You can then deploy using:
```bash
 GH_TOKEN=<your token> GH_REF=github.com/<your name>/code-for-denver-site.git ./deploy.sh
```
