const gulp = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');
const package = require('./package.json');
const homedir = require('os').homedir();
const edit = require('gulp-json-editor');
const prettier = require('gulp-prettier');
const prettierConfig = require('./.prettierrc.json');
const scopes = package.contributes.grammars.map(scope => scope.scopeName);

function watch() {
  return gulp.watch('./src/grammar/**/*.json5', gulp.series(['compile:grammar']));
}

gulp.task('compile', done => {
  scopes.forEach(scope => {
    gulp
      .src('./src/grammar/**/*.json5')
      .pipe(
        merge({
          fileName: `${scope}.json`,
          json5: true,
        }),
      )
      .pipe(
        json5({
          beautify: true,
        }),
      )
      .pipe(
        edit({
          scopeName: `${scope}`,
        }),
      )
      .pipe(prettier({ ...prettierConfig, editorConfig: true }))
      .pipe(gulp.dest('./syntaxes'));
  });

  done();
});

gulp.task('compile:color-customizations', done => {
  gulp
    .src('./src/color-customizations/*.json5')
    .pipe(
      merge({
        concatArrays: true,
        fileName: 'tokens.json',
        json5: true,
        mergeArrays: true,
      }),
    )
    .pipe(
      json5({
        beautify: true,
      }),
    )
    .pipe(prettier({ ...prettierConfig, editorConfig: true }))
    .pipe(gulp.dest('./src/ts/resources'));

  done();
});

gulp.task('copy', done => {
  scopes.forEach(scope => {
    gulp
      .src(`./syntaxes/${scope}.json`)
      .pipe(
        gulp.dest(`${homedir}/.vscode/extensions/${package.publisher}.${package.name}-${package.version}/syntaxes`),
      );
  });

  gulp
    .src(['./out/**/*'])
    .pipe(gulp.dest(`${homedir}/.vscode/extensions/${package.publisher}.${package.name}-${package.version}/out`));

  gulp
    .src(`./package.json`)
    .pipe(gulp.dest(`${homedir}/.vscode/extensions/${package.publisher}.${package.name}-${package.version}`));

  done();
});

gulp.task('copy', gulp.series(['copy']));
gulp.task('compile:grammar', gulp.series(['compile']));
gulp.task('compile:color-customizations', gulp.series(['compile:color-customizations']));
gulp.task('watch', () => watch());
gulp.task('default', () => watch());
