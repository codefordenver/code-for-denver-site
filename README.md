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

Currently this would have to be a manual process:
The source files must first be bundled using webpack:
```
npm run build
```

This will create a `dist` directory that will need to be committed to the `gh-pages` branch (by default this is `.gitignore`d so that needs to be removed on that branch).
