const gulp = require('gulp');
const del = require('del');
const download = require('gulp-download');
const decompress = require('gulp-decompress');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


// Configre Project
// =======================================
var wpUrl = 'https://wordpress.org/'
var wpVersion = 'latest.zip'
var wpThemeName = 'iceberg-boilerplate'
var localServer = 'http://localhost:8888/'

// Reset 
// =======================================
gulp.task('reset', () =>
    del(['tmp', 'download', 'server', 'node_modules'])
);

// Minfy Files
// =======================================
function style() {
    return (
        gulp
            .src("src/assets/sass/*.*")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("src/assets/css"))
    );
}
exports.style = style;

function sassWatch(){
    gulp.watch('src/assets/sass/*.*', style)
}
exports.watch = sassWatch

// Install Wordpress and start serve
// =======================================
gulp.task('wp-download', () =>
    download(wpUrl + wpVersion)
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
gulp.task('wp-watch-clean', () =>
    del('server/wp-content/themes/' + wpThemeName)
);
gulp.task('wp-copy', wpCopy);
function wpCopy(done) {
    gulp.src('src/**/*.*')
        .pipe(gulp.dest('server/wp-content/themes/' + wpThemeName))
        done();
};

gulp.task('start', start);
function start() {
    browserSync.init({
        proxy: localServer + wpThemeName + "/server/"
    })
    gulp.watch("src/**/*.*").on('change', gulp.series(['wp-watch-clean', 'wp-copy', browserSync.reload]))
    gulp.watch('src/assets/sass/*.*', style)
};

gulp.task('install', gulp.series('wp-clean', 'wp-download', 'wp-unzip', 'wp-copy', 'wp-clean', 'start'));