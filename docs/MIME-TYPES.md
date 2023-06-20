# MIME Types and Lang attributes

> This are the allowed mime-types for script, style xml-stylesheet and link tags

## Summary

- [Script tag](#script-tag)
  - [Lang attribute](#lang-attribute)
  - [Type attribute](#type-attribute)
- [Style tag](#style-tag)
  - [Lang attribute](#lang-attribute-1)
  - [Type attribute](#type-attribute-1)
- [XML-Stylesheet and link tags](#xml-stylesheet-and-link-tags)
  - [XML-Stylesheet tag](#xml-stylesheet-tag)
  - [Link tag](#link-tag)
- [Reference](#reference)

## Script tag

### Lang attribute

> List of allowed `lang` attribute values that will change the embedded code detection:

> :information_source: Not setting a `lang` attribute will automatically fallback to any of the `type` attribute detection, or fallback to Javascript

- javascript
  - the embedded code will be displayed as Javascript
- typescript
  - the embedded code will be displayed as Typescript
- coffeescript
  - the embedded code will be displayed as Coffeescript
- dart
  - the embedded code will be displayed as Dart

### Type attribute

> List of allowed `type` attribute values that will change the embedded code detection:

> :information_source: Not setting a `type` attribute will automatically fallback to any of the `lang` attribute detection, or fallback to Javascript

> :warning: Please note that some of the used MIME types are not defined by [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml) and were created based on the Javascript ones.

- Content will be displayer as **Javascript**
  - module
  - text/javascript `prefered` :heavy_check_mark:
  - text/ecmascript `deprecated but allowed` :warning:
  - text/x-javascript `deprecated but allowed` :warning:
  - text/x-ecmascript `deprecated but allowed` :warning:
  - application/javascript `deprecated but allowed` :warning:
  - application/ecmascript `deprecated but allowed` :warning:
  - application/x-javascript `deprecated but allowed` :warning:
  - application/x-ecmascript `deprecated but allowed` :warning:
- Content Will be displayerd as **Typescript**
  - text/typescript `not a standard MIME-type` :warning:
  - text/x-typescript `not a standard MIME-type` :warning:
  - application/typescript `not a standard MIME-type` :warning:
  - application/x-typescript `not a standard MIME-type` :warning:
- Content will be displayed as **Coffeescript**
  - text/coffeescript `not a standard MIME-type` :warning:
  - text/x-coffeescript `not a standard MIME-type` :warning:
  - application/coffeescript `not a standard MIME-type` :warning:
  - application/x-coffeescript `not a standard MIME-type` :warning:
- Content will be displayed as **Dart**
  - text/dart `not a standard MIME-type` :warning:
  - text/x-dart `not a standard MIME-type` :warning:
  - application/dart `not a standard MIME-type` :warning:
  - application/x-dart `not a standard MIME-type` :warning:

## Style tag

### Lang attribute

> List of allowed `lang` attribute values that will change the embedded code detection:

> :information_source: Not setting a `lang` attribute will automatically fallback to any of the `type` attribute detection, or fallback to CSS

- css
  - the embedded code will be displayed as CSS
- less
  - the embedded code will be displayed as LESS
- scss
  - the embedded code will be displayed as SCSS
- sass
  - the embedded code will be displayed as SASS
- postcss
  - the embedded code will be displayed as PostCSS
- stylus
  - the embedded code will be displayed as Stylus
- styl
  - the embedded code will be displayed as Stylus

### Type attribute

> List of allowed `type` attribute values that will change the embedded code detection:

> :information_source: Not setting a `type` attribute will automatically fallback to any of the `lang` attribute detection, or fallback to Javascript

> :warning: Please note that some of the used MIME types are not defined by [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml) and were created based on the Javascript ones.

- Content will be displayer as **CSS**
  - text/css `standard MIME-type` :heavy_check_mark:
- Content Will be displayerd as **LESS**
  - text/less `not a standard MIME-type` :warning:
- Content will be displayed as **SCSS**
  - text/scss `not a standard MIME-type` :warning:
- Content will be displayed as **SASS**
  - text/sass `not a standard MIME-type` :warning:
- Content will be displayed as **PostCSS**
  - text/postcss `not a standard MIME-type` :warning:
- Content will be displayed as **Stylus**
  - text/styl `not a standard MIME-type` :warning:
  - text/stylus `not a standard MIME-type` :warning:

## XML-Stylesheet and link tags

> These tags will not change content detection as they are void elements. But they will have language visual differentiation

### XML-Stylesheet tag

> List of type attribute values that will have visual differentiation

- text/css
- text/xml
- text/xls

### Link tag

> List of type attribute values that will have visual differentiation

- text/css
- text/less
- text/sass
- text/scss
- text/styl
- text/stylus
- text/postcss

## Reference

- [MIMEtype.io](https://mimetype.io/)
- [IANA.org](https://www.iana.org/assignments/media-types/media-types.xhtml)
