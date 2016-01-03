var gulp = require('gulp');
var babel = require('gulp-babel');
var coveralls = require('gulp-coveralls');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');
var excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('jscs', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));
});

gulp.task('mocha', () => {
    return gulp.src('test/*.js')
        .pipe(mocha());
});

gulp.task('default', ['jscs']);
gulp.task('build', ['jscs']);
