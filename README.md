# vscode-angular-html

[![SemVer](https://img.shields.io/github/tag/ghaschel/vscode-angular-html.svg)](https://img.shields.io/github/tag/ghaschel/vscode-angular-html.svg)
[![GitHub issues](https://img.shields.io/github/issues/ghaschel/vscode-angular-html.svg)](https://github.com/ghaschel/vscode-angular-html/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ghaschel/vscode-angular-html/blob/master/LICENSE)
[![NodeJS with Gulp](https://github.com/ghaschel/vscode-angular-html/actions/workflows/npm-gulp.yml/badge.svg?event=push)](https://github.com/ghaschel/vscode-angular-html/actions/workflows/npm-gulp.yml)
[![Downloads](https://vsmarketplacebadges.dev/downloads-short/ghaschel.vscode-angular-html.png)](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)
[![Installs](https://vsmarketplacebadges.dev/installs-short/ghaschel.vscode-angular-html.png)](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)
[![Version](https://vsmarketplacebadges.dev/version-short/ghaschel.vscode-angular-html.png)](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)
[![Known Vulnerabilities](https://snyk.io/test/github/ghaschel/vscode-angular-html/badge.svg)](https://snyk.io/test/github/ghaschel/vscode-angular-html)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<div align="center">
    <img src="assets/angular-html.png" title="vscode-angular-html" alt="Logo" />
</div>

> Note: No theme will have the highlighting displayed in these images. For that effect, run the `vscode-angular-html: Set custom color customizations` command from the command pallete and you're good to go.

## Angular HTML Template Syntax Highlighting

This plugin adds syntax highlighting for angular HTML template files in VS Code. It supports the angular syntax itself, HTML DOM events, SVG, XML (with DTD and namespaces support), emphasizes deprecated and obsolete tags and attributes usage according to the current status of HTML. Also supports custom colors for extra-matched scopes. See [settings](docs/SETTINGS.md)

# Summary

- [vscode-angular-html](#vscode-angular-html)
  - [Angular HTML Template Syntax Highlighting](#angular-html-template-syntax-highlighting)
- [Summary](#summary)
- [General](#general)
  - [Element differentiation (HTML/SVG/Custom/Angular)](#element-differentiation-htmlsvgcustomangular)
  - [Customizations](#customizations)
- [Angular](#angular)
  - [Directives](#directives)
  - [Interpolations](#interpolations)
  - [Control Flow](#control-flow)
  - [Structural tags](#structural-tags)
- [HTML](#html)
  - [Doctype](#doctype)
  - [Comments](#comments)
  - [Entities](#entities)
  - [PrimeNG](#primeng)
  - [NG Bootstrap](#ng-bootstrap)
  - [Kendo UI](#kendo-ui)
  - [Custom components](#custom-components)
  - [DOM events](#dom-events)
  - [Generic attributes](#generic-attributes)
  - [Style inline](#style-inline)
  - [Regex](#regex)
  - [Deprecated attributes](#deprecated-attributes)
  - [Deprecated tags](#deprecated-tags)
  - [ARIA-prefixed attributes](#aria-prefixed-attributes)
  - [Data attributes](#data-attributes)
- [SVG](#svg)
  - [Non-string attributes](#non-string-attributes)
  - [Deprecated tags](#deprecated-tags-1)
  - [Deprecated attributes](#deprecated-attributes-1)
- [XML](#xml)
  - [DTD, elements and attributes namespace](#dtd-elements-and-attributes-namespace)
  - [Stylesheet](#stylesheet)
- [Style tags (CSS/SASS/PostCSS/SCSS/Stylus)](#style-tags-csssasspostcssscssstylus)
  - [CSS](#css)
  - [SCSS](#scss)
  - [LESS](#less)
  - [SASS](#sass)
  - [Stylus](#stylus)
  - [PostCSS](#postcss)
  - [CSS Fallback](#css-fallback)
- [Script tag (Javascript/Typescript/Coffeescript/Dart)](#script-tag-javascripttypescriptcoffeescriptdart)
  - [Javascript](#javascript)
  - [Typescript](#typescript)
  - [Coffeescript](#coffeescript)
  - [Dart](#dart)
  - [Javascript fallback](#javascript-fallback)
- [Link tags](#link-tags)
- [Theming](#theming)
- [Translate](#translate)
- [Changelog](#changelog)

# General

## Element differentiation (HTML/SVG/Custom/Angular)

> The highlighting displayed in this specific section is not part of the custom color customization, and can be achieved by changing this [extension' settings](docs/SETTINGS.md).

> See [Angular-specific list](docs/ANGULAR-SPECIFIC-TAGS.md)

> See [HTML-specific list](docs/HTML-SPECIFIC-TAGS.md)

> See [SVG-specific list](docs/SVG-SPECIFIC-TAGS.md)

> See [PrimeNG-specific list](docs/PRIMENG.md)

<img src="assets/tag-differentiation.png" title="Element differentiation" alt="Element differentiation" />

## Customizations

> There are a ton of customizations available, and everything can be changed in this [extension' settings](docs/SETTINGS.md).

# Angular

## Directives

<img src="assets/angular-directives.gif" title="Angular directives" alt="Angular directives" />

## Interpolations

<img src="assets/angular-interpolations.png" title="Angular Interpolations" alt="Angular Interpolations" />

## Control Flow

<img src="assets/angular-control-flow.png" title="Angular Control Flow" alt="Angular Control Flow" />

## Structural tags

> See the [complete list](docs/ANGULAR-SPECIFIC-TAGS.md)

<img src="assets/angular-structural-tags.png" title="Angular Structural Tags" alt="Angular Structural Tags" />

# HTML

## Doctype

<img src="assets/doctype.png" title="vscode-angular-html" alt="Doctype" />

## Comments

<img src="assets/comments.png" title="vscode-angular-html" alt="Comments" />

## Entities

> See the [complete list](docs/HTML-ENTITIES.md)

<img src="assets/html-entities.png" title="HTML Entities" alt="HTML Entities" />

## PrimeNG

> See the [complete list](docs/PRIMENG.md)

<img src="assets/prime-ng-tags.png" title="Prime NG Tags" alt="Prime NG Tags" />

## NG Bootstrap

> See the [complete list](docs/NG-BOOTSTRAP.md)

<img src="assets/ng-bootstrap-tags.png" title="NG Bootstrap Tags" alt="NG Bootstrap Tags" />

## Kendo UI

> See the [complete list](docs/KENDO-UI.md)

<img src="assets/kendo-ui-tags.png" title="Kendo UI Tags" alt="Kendo UI Tags" />

## Custom components

> See [color-customization](docs/SETTINGS.MD)

<img src="assets/custom-components.png" title="Custom Components" alt="Custom Component">

## DOM events

> See the [complete list](docs/DOM-EVENTS.md)

<img src="assets/dom-events.png" title="DOM events" alt="DOM events" />

## Generic attributes

<img src="assets/generic-attributes.png" title="Generic attributes" alt="Generic attributes" />

## Style inline

<img src="assets/style-inline-normal.png" title="Style inline" alt="Style inline" />

And with [colorize support](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize):

<img src="assets/style-inline-colorize.png" title="Style inline" alt="Style inline with colorize">

> See [colorize settings](docs/COLORIZE-SETTINGS.md)

## Regex

<img src="assets/regex.png" title="vscode-angular-html" alt="Regex" />

## Deprecated attributes

> See the [complete list](docs/DEPRECATED-HTML-ATTRIBUTES.md)

<img src="assets/invalid-attributes.png" title="Invalid attributes" alt="Invalid attributes" />

## Deprecated tags

> See the [complete list](docs/DEPRECATED-HTML-TAGS.md)

<img src="assets/deprecated-html-tags.png" title="Deprecated tags" alt="Deprecated tags" />

## ARIA-prefixed attributes

> See the [complete list](docs/ARIA-ATTRIBUTES.md)

<img src="assets/aria-attributes.png" title="Aria attributes" alt="Aria attributes" />

## Data attributes

<img src="assets/data-attributes.png" title="Data attributes" alt="Data attributes" />

# SVG

## Non-string attributes

> See [SVG's non string attributes](docs/SVG-NONSTRING-ATTRIBUTES.md)

> Elements like stroke can benefit from the [colorize settings](docs/COLORIZE-SETTINGS.md) as the [style inline](#style-inline) section.

<img src="assets/svg-processing.png" title="SVG Processing" alt="SVG Processing"/>

## Deprecated tags

> See the [complete list](docs/DEPRECATED-SVG-TAGS.md)

<img src="assets/svg-deprecated-tags.png" title="SVG deprecated tags" alt="SVG deprecated tags"/>

## Deprecated attributes

> See the [complete list](docs/DEPRECATED-SVG-ATTRIBUTES.md)

<img src="assets/svg-deprecated-attributes.png" title="SVG invalid attributes" alt="SVG invalid attributes"/>

# XML

## DTD, elements and attributes namespace

<img src="assets/xml-dtd-namespace.png" title="XML Processing" alt="XML Processing">

## Stylesheet

<img src="assets/xml-stylesheet.png" title="XML Stylesheet" alt="XML Stylesheet">

# Style tags (CSS/SASS/PostCSS/SCSS/Stylus)

> See [scripts and style MIME-types](docs/MIME-TYPES.md)

> See [linting tips](docs/LINTING.md)

> Every MIME-type shown in this section also will be highlighted in `<link>` elements

> Every style tag in this section can also benefit from the [colorize settings](docs/COLORIZE-SETTINGS.md) as the [style inline](#style-inline) section

## CSS

<img src="assets/style-tag-css.png" title="Style tag" alt="Style tag" />

## SCSS

> The displayed highlighting is achieved via [vscode-angular-scss](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-scss) and it fallbacks to the default one if not installed.

<img src="assets/style-tag-scss.png" title="Style tag" alt="Style tag" />

## LESS

<img src="assets/style-tag-less.png" title="Style tag" alt="Style tag" />

## SASS

<img src="assets/style-tag-sass.png" title="Style tag" alt="Style tag" />

## Stylus

<img src="assets/style-tag-stylus.png" title="Style tag" alt="Style tag" />

## PostCSS

> The displayed highlighting is achieved via [language-postcss](https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss) and it may be replaced with another extension as soon as [this merge](https://github.com/csstools/postcss-language/pull/13) is released in a new version of the plugin

<img src="assets/style-tag-postcss.png" title="Style tag" alt="Style tag" />

## CSS Fallback

<img src="assets/style-tag-css-fallback.png" title="Style tag" alt="Style tag" />

# Script tag (Javascript/Typescript/Coffeescript/Dart)

> See [scripts and style mime-types](docs/MIME-TYPES.md)

## Javascript

<img src="assets/script-tag-javascript.png" title="Script tags" alt="Script tag" />

## Typescript

<img src="assets/script-tag-typescript.png" title="Script tags" alt="Script tag" />

## Coffeescript

<img src="assets/script-tag-coffeescript.png" title="Script tags" alt="Script tag" />

## Dart

<img src="assets/script-tag-dart.png" title="Script tags" alt="Script tag" />

## Javascript fallback

<img src="assets/script-tag-javascript-fallback.png" title="Script tags" alt="Script tag" />

# Link tags

<img src="assets/link-tag-icon.png" title="Link tags" alt="Link tag" />

# Theming

> If you want to create a theme and support this extension, please checkout the [theming docs](docs/THEMING.md)

# Translate

> If you want to help translating this extension, please checkout the [localization docs](docs/LOCALIZATION.md)

# Changelog

> See the [changelog](CHANGELOG.md)
