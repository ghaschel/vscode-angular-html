const gulp = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');
const package = require('./package.json');
const homedir = require('os').homedir().replace('\\', '/');

function watch() {
  return gulp.watch('./src/**/*.json5', gulp.series(['compile-json']));
}

function compile() {
  return gulp.src('./src/**/*.json5')
    .pipe(merge({
      fileName: "angular-html.tmLanguage.json",
      json5: true
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
}

gulp.task('copy', () => {
  return gulp.src('./syntaxes/angular-html.tmLanguage.json')
    .pipe(
      gulp.dest(homedir + '/.vscode/extensions/ghaschel.vscode-angular-html-' + package.version + '/syntaxes')
    );
})

gulp.task('compile', () => {
  return compile();
});
gulp.task('compile-json', gulp.series(['compile', 'copy']));

gulp.task('watch', () => {
  return watch();
});

gulp.task('default', () => {
  return watch()
});