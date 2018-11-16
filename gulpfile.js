const gulp = require('gulp');
const del = require('del');
const download = require('gulp-download');
const decompress = require('gulp-decompress');
const browserSync = require('browser-sync').create();

// Configre Project
// =======================================
var wpUrl = 'https://wordpress.org/'
var wpVesrion = 'latest.zip'
var wpThemeName = 'iceberg-boilerplate'
var localServer = 'http://localhost:8888/'

// Reset 
// =======================================
gulp.task('reset', () =>
    del(['tmp', 'download', 'server'])
);


// Install Wordpress
// =======================================
gulp.task('wp-download', () =>
    download(wpUrl + wpVesrion)
	.pipe(gulp.dest("./tmp"))
);
gulp.task('wp-unzip', () =>
    gulp.src('./tmp/*.{tar,tar.bz2,tar.gz,zip}')
        .pipe(decompress({strip: 1}))
        .pipe(gulp.dest('./server/'))
);
gulp.task('wp-clean', () =>
    del(['tmp', 'download'])
);
gulp.task('wp-copy', wpCopy);
function wpCopy(done) {
    gulp.src('./src/*.*')
        .pipe(gulp.dest('./server/wp-content/themes/' + wpThemeName))
        done();
};

gulp.task('start', start);
function start() {
    browserSync.init({
        proxy: localServer + wpThemeName + "/server/"
    })
    gulp.watch("src/**/*.*").on('change', gulp.series(['wp-copy', browserSync.reload]))
};

gulp.task('install', gulp.series('wp-clean', 'wp-download', 'wp-unzip', 'wp-copy', 'wp-clean', 'start'));
