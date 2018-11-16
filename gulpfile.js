const gulp = require('gulp');
const del = require('del');
const download = require('gulp-download');
const decompress = require('gulp-decompress');


// Configre Project
// =======================================
var wordpressUrl = 'https://wordpress.org/'
var wordpressVesrion = 'latest.zip'

// Install Wordpress
// =======================================
gulp.task('wp-download', () =>
    download(wordpressUrl + wordpressVesrion)
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
gulp.task('wp-install', gulp.series('wp-clean', 'wp-download', 'wp-unzip', 'wp-clean'));

// Reset 
// =======================================
gulp.task('reset', () =>
    del(['tmp', 'download', 'server'])
);
