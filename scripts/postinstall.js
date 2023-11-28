const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const grammarConfigs = {
  vscode: '1.79.1',
  stylus: '1.16.0',
  scss: 'master',
  sass: 'master',
};

const externalJSONGrammars = {
  'source.css': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/css/syntaxes/css.tmLanguage.json`,
  'source.css.scss': `https://raw.githubusercontent.com/ghaschel/vscode-angular-scss/${grammarConfigs.scss}/syntaxes/angular-scss.tmLanguage.json`,
  'source.ts': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json`,
  'source.js': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/javascript/syntaxes/JavaScript.tmLanguage.json`,
  'source.coffee': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/coffeescript/syntaxes/coffeescript.tmLanguage.json`,
  'source.dart': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/dart/syntaxes/dart.tmLanguage.json`,
  'source.sass': `https://raw.githubusercontent.com/TheRealSyler/vscode-sass-indented/${grammarConfigs.sass}/syntaxes/sass.tmLanguage.json`,
  'source.sassdoc': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/scss/syntaxes/sassdoc.tmLanguage.json`,
  'source.css.less': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/less/syntaxes/less.tmLanguage.json`,
  'source.stylus': `https://raw.githubusercontent.com/d4rkr00t/language-stylus/v${grammarConfigs.stylus}/syntaxes/stylus.json`,
};

const externalPLISTGrammars = {
  'source.js.regexp': `https://raw.githubusercontent.com/microsoft/vscode/${grammarConfigs.vscode}/extensions/javascript/syntaxes/Regular%20Expressions%20(JavaScript).tmLanguage`,
};

const downloadFn = (key, url, extension) => {
  const file = fs.createWriteStream(`./test/externalGrammars/${key}.tmLanguage.${extension}`);
  https.get(url, function (response) {
    response.pipe(file);

    // after download completed close filestream
    file.on('finish', () => {
      file.close();
      console.log(`${key} grammar download completed`);
    });
  });
};

console.log(`Using VSCode ${grammarConfigs.vscode} grammars`);
console.log(`Using Stylus ${grammarConfigs.stylus} grammars`);
console.log(`Using SCSS ${grammarConfigs.scss} grammars`);
console.log(`Using latest available SASS grammars`);

Object.keys(externalJSONGrammars).forEach(key => downloadFn(key, externalJSONGrammars[key], 'json'));
Object.keys(externalPLISTGrammars).forEach(key => downloadFn(key, externalPLISTGrammars[key], 'plist'));
