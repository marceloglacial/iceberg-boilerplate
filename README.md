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
- Install Apache, PHP and MySQL to run WordPress
- Start servers
- Create a database for Wordpress
- Open terminal and run
    - npm install 
    - npm audit fix --force
    - gulp install

### How to configure
You can change this settings on gulpfile.js
- wpUrl = Link to download WordPress (Default: 'https://wordpress.org/')
- wpVesrion = WordPress Version (Default:'latest.zip')
- wpThemeName = Theme name (Default:'iceberg-boilerplate')
- LocalServer = Local server url (Default:'http://localhost:8888/')


## Versions

### 1.0.1 
- Add Wordpress instalation
- Update to Gulp 4.0