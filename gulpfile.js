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

gulp.task('eslint', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['jscs', 'eslint', 'mocha', '']);
gulp.task('test', ['mocha']);
gulp.task('lint', ['jscs', 'eslint']);
gulp.task('build', ['jscs', 'eslint', 'mocha', '']);
