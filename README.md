Shopify Starter - Grunt, Bootstrap, Modernizr, jQuery, Compass, Live Reload and more
============

This starter tool utilizes many tools I have used over and over for development and attempts to wrap them all into a sensible starting place. It includes the following tools

1. Bower - for js package managment http://bower.io/
2. Grunt - to run processes like jshint, compass, live reload etc.. http://gruntjs.com/
3. Bootstrap 3 - don't just use it on its own it is a framework :) http://getbootstrap.com/
4. Watch with Live reload - Runs all the grunt tasks and reloads the webpage once upload to shopify is completed. https://github.com/gruntjs/grunt-contrib-watch
5. Compass - This Sass add on comes with sass and a bunch of helpers to make your life easier. http://compass-style.org/
6. Grunt Shopify - Once configured this will upload the updated files to shopify. https://github.com/wilr/grunt-shopify
7. Shopify Skeleton theme - The skeleton template theme is included although slightly altered to work with above technologies. https://github.com/Shopify/skeleton-theme
8. Grunt modernizr - Custom modernizr build based on what your are using https://github.com/Modernizr/grunt-modernizr
9. jshint - offers useful advice about how to improve your js https://github.com/gruntjs/grunt-contrib-jshint
10. grunt concat - concatinates all js files into a single file - https://github.com/gruntjs/grunt-contrib-concat
11. grunt concat bower - same thing but understand bowers folder structure - https://github.com/sapegin/grunt-bower-concat
12. grunt uglify - minimizes your javascript - https://github.com/gruntjs/grunt-contrib-uglify

Getting started
---------------------
1. Clone this repo
2. Make sure you have npm, grunt, and bower installed. You can read about installing these on their respective documentations.
3. Install grunt modules - npm install
4. Install bower components - bower install
5. Setup your api, password and store url in the Gruntfile.js
```
//upload changed files to shopify
shopify: {
  options: {
    api_key: "API key",
    password: "pass",
    url: "url",
    base: "shop/"
  }
},
```
6. Setup your live reload browser plugin.
7. Run grunt watch.
8. Start coding.
9. World domination!

What is happening?!
-----------------
When you run grunt watch it starts up grunt and watches for you to edit your files. It watches the following files for changes:
1. /sass/*.scss
2. /custom_js/*.js
3. Bower additions
4. the following folder in the shop directory "shop/assets/**", "shop/config/**", "shop/snippets/**", "shop/layout/**", "shop/templates/**"
depending on the action you took it will minimize/lint javascript, run css pre-processors, upload changed files to your shopify theme and reload your browser so you can view changes.

Basic structure
---------------
```
├──Shop
      ├── assets
      │   └── Javascript, CSS, and theme images - generated from ../custom_js and ../sass folders
      ├── config
      │   └── custom Theme Settings
      ├── layout
      │   ├── theme.liquid
      │   └── optional alternate layouts
      ├── snippets
      │   └── optional custom code snippets
      ├── templates
      │   ├── 404.liquid
      │   ├── article.liquid
      │   ├── blog.liquid
      │   ├── cart.liquid
      │   ├── collection.liquid
      │   ├── index.liquid
      │   ├── page.liquid
      │   ├── product.liquid
      │   └── search.liquid
      │   └── list-collections.liquid
├──bower_components
├──build
├──custom_js
          ├──javascript used in the store pre compression
├──Node Modules
├──sass
          ├──Compass and sass stylesheets for the store pre compression
├──.sass-cache
```


