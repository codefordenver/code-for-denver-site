#!/bin/bash
# NOTE: This file is adapted from Domenic Denicola's gist on deploying to gh-pages
# with Travis CI: https://gist.github.com/domenic/ec8b0fc8ab45f39403dd

set -e # exit with nonzero exit code if anything fails

# if you happen to be running the script locally
printf "If anything goes wrong, you'll likely want to run:\n\n"
printf "git checkout -\n\n"
printf "to get back to where you were originally.\n\n\n"

# do work on a different branch
git branch deploy -f # -f to force deploy branch to be current with HEAD
git checkout deploy

# install dependencies
npm install

# make sure there isn't a dist directory
npm run clean

# build the source files
npm run build

# update gitignore so the dist directory is included
sed -i.orig '/dist/d' ./.gitignore

# we'll pretend to be a new user in git
# git config user.name "Travis CI"
# git config user.email "<you>@<your-email>"

# Commit the built files
git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current branch to the remote repo's gh-pages branch.
# (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" HEAD:gh-pages > /dev/null 2>&1

# go back to original git HEAD
git checkout -
