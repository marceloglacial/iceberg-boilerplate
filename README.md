# Iceberg Boilerplate

* Created by Marcelo Glacial
* Starts on 05/2017

## Description

A starter kit to new Wordpress projects.


## Features

- Using Gulp to automate build, minify files, optimize images and browser live reloading.
- Using Sketch to design and favicons.


## Installation

1. Install Apache, MySQL and PHP to run WordPress (e.g.: [XAMPP](https://www.apachefriends.org/download.html), [MAMP](https://www.mamp.info/en/))
2. Start servers
3. Create a database for Wordpress
4. [Install npm](https://www.npmjs.com/get-npm)
5. [Install Gulp](https://gulpjs.com)
6. Optional: [Configure installation](#how-to-configure-installation)
7. Open terminal and run
    - `npm install` 
    - `npm audit fix --force`
    - `gulp install`

### How to configure installation
You can change this settings on gulpfile.js

```javascript
// Paths
const paths = {
    wordpress: {
        url: 'https://wordpress.org',
        version: 'latest.zip',
        themeName: 'iceberg-boilerplate',
        proxy: 'http://localhost:8888',
        server: 'server',
        tmp: 'tmp'
    },
    project: {
        all: './src/**/*.*',
        src: './src/',
        dist: './dist/',
        deploy: './deploy/'
    },
    styles: {
        src: './src/assets/css/src/*.*',
        dest: './src/assets/css/',
    },
    scripts: {
        src: './src/assets/js/src/*.js',
        dest: './src/assets/js/',
    },
    images: {
        src: './src/assets/img/*.*',
        dest: './dist/assets/img/',
    }
};
```

## Deploy 

Creates a zip file with minified CSS, JS, PHP and images. 

```console
gulp deploy
```

### Recomended CD/CI
- [Buddy](https://buddy.works/pricing) to deploy to a FTP serve.

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
