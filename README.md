[![Stories in Ready](https://badge.waffle.io/codefordenver/code-for-denver-site.png?label=ready&title=Ready)](http://waffle.io/codefordenver/code-for-denver-site)

#Code for Denver Website

##setup 

### dev  
Uses [system.js + jspm](http://jspm.io/)

Uncomment script tags at the end of index.html
and create new modules under js/* directory.

### prod
`~$ jspm bundle-sfx --minify js/main` 

this will minify and build all dependencies into a single file called build.js





