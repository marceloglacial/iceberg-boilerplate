const gulp = require('gulp');
const del = require('del');
const download = require('gulp-download');
const decompress = require('gulp-decompress');


// Configre Project
// =======================================
var wpUrl = 'https://wordpress.org/'
var wpVesrion = 'latest.zip'
var wpThemeName = 'iceber-boilerplate'

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
gulp.task('wp-copy', () =>
    gulp.src('./src/*.*')
        .pipe(gulp.dest('./server/wp-content/themes/' + wpThemeName))
);
gulp.task('wp-install', gulp.series('wp-clean', 'wp-download', 'wp-unzip', 'wp-copy', 'wp-clean'));