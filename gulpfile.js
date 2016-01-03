'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const coveralls = require('gulp-coveralls');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('mocha', () => {
    return gulp.src('test/*.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('eslint', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.failAfterError());
});

gulp.task('babel', () => {
    return gulp.src('lib/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('pre-test', () => {
  return gulp.src(['lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
    return gulp.src('test/**/*.js')
        .pipe(babel())
        .pipe(mocha({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({thresholds: {global: 95}}));
});

gulp.task('coveralls', ['test'], () => {
    // Upload to coveralls only if running on CI environments
    if (!process.env.CI) {
        return;
    }

    return gulp.src(`${__dirname}/coverage/**/lcov.info`)
      .pipe(coveralls());
});

gulp.task('default', ['eslint', 'test']);
gulp.task('lint', ['eslint']);
gulp.task('build', ['babel', 'jscs', 'eslint', 'coveralls']);
