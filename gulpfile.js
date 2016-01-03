var gulp = require('gulp');
var babel = require('gulp-babel');
var coveralls = require('gulp-coveralls');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');
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
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], (cb) => {
    let mochaErr;

    gulp.src('test/**/*.js')
        .pipe(babel())
        .pipe(plumber())
        .pipe(mocha({reporter: 'spec'}))
        .on('error', (err) => {
            mochaErr = err;
        })
        .pipe(istanbul.writeReports())
        .on('end', () => {
            cb(mochaErr);
        });
});

gulp.task('default', ['jscs', 'eslint', 'mocha']);
gulp.task('lint', ['jscs', 'eslint']);
gulp.task('build', ['jscs', 'eslint', 'mocha', 'babel']);
