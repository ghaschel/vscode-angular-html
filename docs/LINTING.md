# Linting

> Style tags embedded code linting is possible (one language at time).

> Please refer to the [MIME-types](MIME-TYPES.md) docs to find out more about language detection in this extension

These are the plugins and configurations:

## Style Tags

### CSS

Install [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Install the following packages:

```shell
npm install --save-dev stylelint stylelint-config-html postcss-syntax postcss-html
```

Change the following entries in your settings.json file

```json
{
  "stylelint.snippet": ["css", "html"],
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "npm", // your package manager of preference
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": ["html"]
}
```

.stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-html/html"],
  "customSyntax": "postcss-html",
  "rules": {
    [...],
    // [your stylelint rules]
  }
}
```

### SASS

Install [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Install the following packages:

```shell
npm install --save-dev stylelint stylelint-config-html stylelint-scss postcss-syntax postcss-html postcss-sass
```

Change the following entries in your settings.json file

```json
{
  "stylelint.snippet": ["sass", "html"],
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "npm", // your package manager of preference
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": ["html"]
}
```

.stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-html/html"],
  "customSyntax": "postcss-html",
  "plugins": ["stylelint-scss"],
  "rules": {
    [...],
    // [your scss/at-rules]
  }
}
```

### SCSS

Install [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Install the following packages:

```shell
npm install --save-dev stylelint stylelint-config-recommended stylelint-config-html stylelint-config-standard-scss stylelint-scss postcss-syntax postcss-html postcss-scss
```

Change the following entries in your settings.json file

```json
{
  "stylelint.snippet": ["scss", "html"],
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "npm", // your package manager of preference
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": ["html"]
}
```

.stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-html/html", "stylelint-config-standard-scss"],
  "plugins": ["stylelint-scss"],
  "customSyntax": "postcss-html",
  "rules": {
    [...],
    // [your scss/at-rules]
  }
}
```

### Less

Install [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Install the following packages:

```shell
npm install --save-dev stylelint stylelint-config-recommended stylelint-config-html stylelint-less postcss-syntax postcss-html postcss-less
```

Change the following entries in your settings.json file

```json
{
  "stylelint.snippet": ["less", "html"],
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "npm", // your package manager of preference
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": ["html"]
}
```

.stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-html/html"],
  "plugins": ["stylelint-less"],
  "customSyntax": "postcss-html",
  "rules": {
    [...],
    // [your less/at-rules]
  }
}
```

### Stylus

Install [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Install the following packages:

```shell
npm install --save-dev stylelint stylelint-config-recommended stylelint-config-html stylelint-stylus postcss-syntax postcss-html postcss-stylus
```

Change the following entries in your settings.json file

```json
{
  "stylelint.snippet": ["stylus", "styl", "html"],
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "npm", // your package manager of preference
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": ["html"]
}
```

.stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-html/html"],
  "plugins": ["stylelint-stylus"],
  "customSyntax": "postcss-html",
  "rules": {
    [...],
    // [your stylus/at-rules]
  }
}
```

### PostCSS

Install [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Install the following packages:

```shell
npm install --save-dev stylelint stylelint-config-html postcss-syntax postcss-html
```

Change the following entries in your settings.json file

```json
{
  "stylelint.snippet": ["postcss", "html"],
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "npm", // your package manager of preference
  "stylelint.configFile": ".stylelintrc",
  "stylelint.validate": ["html"]
}
```

.stylelintrc

```json
{
  "extends": ["stylelint-config-recommended", "stylelint-config-html/html"],
  "customSyntax": "postcss-html",
  "rules": {
    [...],
    // [your rules]
  }
}
```

## Script Tags

### Javascript

Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Install the following packages:

```shell
npm install --save-dev eslint eslint-plugin-html
```

Change the following entries in your settings.json file

```json
{
  "eslint.options": {
    "extensions": [".html"] // add html to whatever you have here
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html"
    // add html, javascript and javascriptreact to whatever you have here
  ]
}
```

.eslintrc.js

```js
module.exports = {
  root: true,
  plugins: ['html'],
  settings: {
    'html/javascript-tag-names': ['script'],
    'html/javascript-mime-types': [
      'text/javascript',
      'text/x-javascript',
      'application/javascript',
      'application/x-javascript',
      'text/ecmascript',
      'text/x-ecmascript',
      'application/ecmascript',
      'application/x-ecmascript',
      'module',
    ],
  },
  overrides: [
    {
      files: ['*.html'],
      parserOptions: {
        sourceType: 'module',
      },
      extends: ['eslint:recommended'],
      rules: {
        // [your js rules],
      },
    },
  ],
};
```

### Typescript

> :information_source: Note: this is a simple tip on how to lint Typescript embedded scripts, and does not cover the Angular eslint linting setup. For that, refer to [Angular-eslint](https://github.com/angular-eslint/angular-eslint).

Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Install the following packages:

```shell
npm install --save-dev eslint eslint-plugin-html @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Change the following entries in your settings.json file

```json
{
  "eslint.options": {
    "extensions": [".html"] // add html to whatever you have here
  },
  "eslint.validate": [
    "typescript",
    "typescriptreact",
    "html"
    // add html, typescript and typescriptreact to whatever you have here
  ]
}
```

eslintrc.js

```js
module.exports = {
  root: true,
  ignorePatterns: ['*.js'],
  plugins: ['@typescript-eslint', 'html'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extrafileExtensions: ['.html'],
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  settings: {
    'html/javascript-tag-names': ['script'],
    'html/javascript-mime-types': [
      'text/typescript',
      'text/x-typescript',
      'application/typescript',
      'application/x-typescript',
    ],
  },
  overrides: [
    {
      files: ['*.html'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // [your @typescript-eslint/at-rules]
      },
    },
  ],
};
```

### Coffeescript

> I Could not find an easy way and clean way to do it

### Dart

> I Could not find an easy way and clean way to do it
