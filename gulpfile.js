import gulp from 'gulp';
import merge from 'gulp-merge-json';
import json5 from 'gulp-json5-to-json'
import packageJson from './package.json' with { type: "json" };
import { homedir as home } from 'os';
import edit from 'gulp-json-editor'
import prettier from 'gulp-prettier'
import prettierConfig from './.prettierrc.json' with { type: "json" };
const scopes = packageJson.contributes.grammars.map(scope => scope.scopeName);
const homedir = home();

function watch() {
  return gulp.watch('./src/grammar/**/*.json5', gulp.series(['compile:grammar']));
}

gulp.task('compile', done => {
  console.log(prettier.default)
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
        gulp.dest(`${homedir}/.vscode/extensions/${packageJson.publisher}.${packageJson.name}-${packageJson.version}/syntaxes`),
      );
  });

  gulp
    .src(['./out/**/*'])
    .pipe(gulp.dest(`${homedir}/.vscode/extensions/${packageJson.publisher}.${packageJson.name}-${packageJson.version}/out`));

  gulp
    .src(`./package.json`)
    .pipe(gulp.dest(`${homedir}/.vscode/extensions/${packageJson.publisher}.${packageJson.name}-${packageJson.version}`));

  done();
});

gulp.task('copy', gulp.series(['copy']));
gulp.task('compile:grammar', gulp.series(['compile']));
gulp.task('compile:color-customizations', gulp.series(['compile:color-customizations']));
gulp.task('watch', () => watch());
gulp.task('default', () => watch());
