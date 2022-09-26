# vscode-angular-html

[![SemVer](https://img.shields.io/github/tag/ghaschel/vscode-angular-html.svg)](https://img.shields.io/github/tag/ghaschel/vscode-angular-html.svg)
[![GitHub issues](https://img.shields.io/github/issues/ghaschel/vscode-angular-html.svg)](https://github.com/ghaschel/vscode-angular-html/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ghaschel/vscode-angular-html/blob/master/LICENSE)
[![Build status](https://travis-ci.org/ghaschel/vscode-angular-html.svg?branch=master)](https://travis-ci.org/ghaschel/vscode-angular-html.svg?branch=master)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/ghaschel.vscode-angular-html.svg?style=flat&color=blue)](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)
[![Version](https://vsmarketplacebadge.apphb.com/version-short/ghaschel.vscode-angular-html.svg?style=flat&color=blue)](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html) [![Greenkeeper badge](https://badges.greenkeeper.io/ghaschel/vscode-angular-html.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<div align="center">
    <img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/angular-html.png" title="vscode-angular-html" alt="Logo" />
</div>

## Angular HTML Template Syntax Highlighting

This plugin adds syntax highlighting for angular HTML template files in VS Code. It supports the angular syntax itself, HTML DOM events and emphasizes deprecated and obsolete tags and attributes usage according to the current status of HTML.

> Note: VSCode's default Dark+ theme doesn't have the highlighting displayed in these images. For that effect I recommend using [dark-plus-syntax](https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax) theme.
> Other themes that have similar highlighting: [cobalt2](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2), [dracula / dracula soft](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) and [and old hope classic](https://marketplace.visualstudio.com/items?itemName=dustinsanders.an-old-hope-theme-vscode).

## Summary

- [vscode-angular-html](#vscode-angular-html)
  - [Angular HTML Template Syntax Highlighting](#angular-html-template-syntax-highlighting)
  - [Summary](#summary)
    - [Angular directives](#angular-directives)
    - [Doctype](#doctype)
    - [Comments](#comments)
    - [Invalid attributes see complete list](#invalid-attributes-see-complete-list)
    - [Angular interpolations (with safe navigation operator)](#angular-interpolations-with-safe-navigation-operator)
    - [Angular structural tags](#angular-structural-tags)
    - [Entities](#entities)
    - [Regex](#regex)
    - [Deprecated tags see complete list](#deprecated-tags-see-complete-list)
    - [DOM events see complete list](#dom-events-see-complete-list)
    - [Style inline](#style-inline)
    - [Style tag (scss/stylus)](#style-tag-scssstylus)
    - [Script tag](#script-tag)
    - [Generic attributes](#generic-attributes)
  - [Disclaimer](#disclaimer)
  - [Changelog](#changelog)
- [title](#title)

### Angular directives

<span name="angular-directives"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/angular-directives.gif" title="Angular directives" alt="Angular directives" />

### Doctype

<span name="doctype"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/doctype.png" title="vscode-angular-html" alt="Doctype" />

### Comments

<span name="comments"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/comments.png" title="vscode-angular-html" alt="Comments" />

### Invalid attributes [see complete list](DEPRECATED-ATTRIBUTES.md)

<span name="invalid-attributes"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/invalid-attributes.png" title="Invalid attributes" alt="Invalid attributes" />

### Angular interpolations (with safe navigation operator)

<span name="angular-interpolations"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/angular-interpolations.png" title="Angular Interpolations" alt="Angular Interpolations" />

### Angular structural tags

<span name="angular-structural-tags"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/angular-structural-tags.png" title="Angular Structural Tags" alt="Angular Structural Tags" />

### Entities

<span name="html-entities"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/html-entities.png" title="HTML Entities" alt="HTML Entities" />

### Regex

<span name="regex"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/regex.png" title="vscode-angular-html" alt="Regex" />

### Deprecated tags [see complete list](DEPRECATED-TAGS.md)

<span name="deprecated-tags"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/deprecated-tags.png" title="Deprecated tags" alt="Deprecated tags" />

### DOM events [see complete list](DOM-EVENTS.md)

<span name="dom-events"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/dom-events.png" title="DOM events" alt="DOM events" />

### Style inline

<span name="style-inline"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/style-inline.png" title="Style inline" alt="Style inline" />

### Style tag (scss/stylus)

<span name="style-tag"></span>

> Note: stylus is only supported via [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/style-tag.png" title="Style tag" alt="Style tag" />

### Script tag

<span name="script-tags"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/script-tag.png" title="Script tags" alt="Script tag" />

### Generic attributes

<span name="generic-attributes"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/generic-attributes.png" title="Generic attributes" alt="Generic attributes" />

## Disclaimer

> The development of this plugin serves as a way for me to train Regex, so may not be 100% correct. Feel free to submit a pull request if needed.

> Based in the original work of [dunstontc](https://github.com/dunstontc/vscode-angular-syntax)

## [Changelog](CHANGELOG.md)

# title

```less
@variable: test;
@variable: test;

body {
  &:extends(.test) {
    color: gray;
    display: block;
  }
}
```

```scss
@mixin test {
  $variable: test;

  @return $variable;
}

body {
  color: gray;
  display: block;

  @include test();
}
```

```stylus
test()
  $variable

body
  color gray
  display block
  test()

```
