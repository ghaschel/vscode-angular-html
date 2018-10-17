const gulp = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');
const _ = require('lodash');

gulp.task('default', () => {});

gulp.task('compile-json', () => {
  gulp.src('./src/**/*.json5')
    .pipe(merge({
      fileName: "shell.tmLanguage.json",
      json5: true,
      customizer: (objA, objB) => {
        // Sort elements to ensure we are keeping the pattern working
        if (objA instanceof Array && objB instanceof Array) {
          return _.sortBy(objA.concat(objB), ['index']).forEach(el => delete el.index)
        }
      },
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.json5', ['compile-json']);
});