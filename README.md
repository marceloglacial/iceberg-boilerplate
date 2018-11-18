# Iceberg Boilerplate

* Created by Marcelo Glacial
* Starts on 05/2017

## Description

Iceberg Wordpress Boilerplate. 
A starter kit to new Wordpress projects.


## Features

- Using Gulp to automate build, minify files, optimize images and browser live reloading.
- Using Sketch to design and favicons.


## Instructions

### How to Install 
- Install Apache, MySQL and PHP to run WordPress (e.g.: [XAMPP](https://www.apachefriends.org/download.html), [MAMP](https://www.mamp.info/en/))
- Start servers
- Create a database for Wordpress
- [Install npm](https://www.npmjs.com/get-npm)
- [Install Gulp](https://gulpjs.com)
- Optional: [Configure installation](#how-to-configure-installation)
- Open terminal and run
    - npm install 
    - npm audit fix --force
    - gulp install


### How to configure installation
You can change this settings on gulpfile.js
- wpUrl = Link to download WordPress (Default: 'https://wordpress.org/')
- wpVersion = WordPress Version (Default: 'latest.zip')
- wpThemeName = Theme name (Default: 'iceberg-boilerplate')
- LocalServer = Local server url (Default: 'http://localhost:8888/')



## Versions

### 1.0.3
- Create deploy tasks
- Add zip to deploy options

### 1.0.2
- Add Minify CSS
- Add Minify HTML/PHP
- Add Minify JS
- Add Minify images
- Add SASS

### 1.0.1 
- Add Wordpress instalation
- Update to Gulp 4.0
