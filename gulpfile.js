const gulp = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');
const package = require('./package.json');
const homedir = require('os').homedir().replace('\\', '/');
const edit = require('gulp-json-editor');
const scopes = package.contributes.grammars.map(scope => scope.scopeName);

function watch() {
  return gulp.watch('./src/**/*.json5', gulp.series(['compile-json']));
}

function compile(cb) {
  scopes.forEach(scope => {
    gulp.src('./src/**/*.json5')
      .pipe(merge({
        fileName: `${scope}.json`,
        json5: true
      }))
      .pipe(json5({
        beautify: true,
      }))
      .pipe(edit({
        "scopeName": `${scope}`,
      }))
      .pipe(gulp.dest('./syntaxes'));
  });

  cb()
}

function copy(cb) {
  scopes.forEach(scope => {
    gulp.src(`./syntaxes/${scope}.json`)
    .pipe(
      gulp.dest(`${homedir}/.vscode/extensions/ghaschel.vscode-angular-html-${package.version}/syntaxes`)
    );
  });

  cb();
}

gulp.task('compile-json', gulp.series([compile, copy]));

gulp.task('watch', () => {
  return watch();
});

gulp.task('default', () => {
  return watch()
});