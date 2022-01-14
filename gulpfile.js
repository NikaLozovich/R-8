const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });
};

const buildSass = () => {
    return src('dist/sass/*.scss')
        .pipe(sass())
        .pipe(dest('build/css/'))
        .pipe(browserSync.stream());
}

const buildPug = () => {
    return src('dist/index.pug')
        .pipe(pug())
        .pipe(dest('build/'))
        .pipe(browserSync.stream());
}

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);