const gulp = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');
const _ = require('lodash');

gulp.task('default', () => {});

gulp.task('compile-json', () => {
  gulp.src('./src/**/*.json5')
    .pipe(merge({
      fileName: "angular-html.tmLanguage.json",
      json5: true,
      customizer: (objA, objB) => {
        // Sort elements to ensure we are keeping the pattern working
        if (objA instanceof Array && objB instanceof Array) {
          if (objA.some(el => el.index) && objB.some(el => el.index)) {
            return _.sortBy(objA.concat(objB), ['index']);
          }
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