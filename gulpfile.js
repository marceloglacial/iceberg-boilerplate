var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var smushit = require('gulp-smushit');
var autoprefixer = require('gulp-autoprefixer');
var gulpSequence = require('gulp-sequence')
var {
    phpMinify
} = require('@cedx/gulp-php-minify');
var minifyHTML = require('gulp-minify-html');


// Configre Project
var projectProxy = "http://localhost:8888/"
var themePath = "server/wp-content/themes/new-theme/"

// MAMP Static Server 
gulp.task('serve', function () {
    browserSync.init({
        proxy: projectProxy
    });

    gulp.watch("src/**/*.*").on('change', browserSync.reload);
});

// Work In Progress
gulp.task('build-work', function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest(themePath));
});
gulp.task('work', function () {
    return gulp.watch("src/**/*.*", ['build-work']);
});


// Clean dist and tmp
gulp.task('build-clean', function () {
    return del([
        'dist/**/*',
        themePath + '**/*'
    ]);
});

// Copy files to dist
gulp.task('build-dist', function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist/'));
});
gulp.task('build-server', function () {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest(themePath));
});


// Minify CSS and ADD vendor prefix
gulp.task('build-css', function () {
    return gulp.src('src/assets/css/*.*')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            debug: true
        }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(gulp.dest('dist/assets/css'));
});

// Minimize JS
gulp.task('build-js', function (cb) {
    pump([
            gulp.src('src/assets/js/*.js'),
            uglify(),
            gulp.dest('dist/assets/js')
        ],
        cb
    );
});

// Minify PHP
gulp.task('build-php', function () {
    var opts = {
        comments: false,
        spare: true
    };

    gulp.src('./src/**/*.php')
        .pipe(phpMinify())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
});


// Optimize images
gulp.task('build-img', function () {
    return gulp.src('src/assets/img/*')
        .pipe(smushit())
        .pipe(gulp.dest('dist/assets/img'))
});

// Copy to server
gulp.task('build-wordpress', function () {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest(themePath));
});

// Build
gulp.task('build', gulpSequence(
    'build-clean',
    'build-dist',
    'build-css',
    'build-js',
    'build-php',
    'build-img',
    'build-wordpress'
    // 'build-server'
));

// Run Default
gulp.task('default', ['work']);