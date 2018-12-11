# Scope names

> This file aims to be used as a way to point out the main matches of the angular template highlighting just in case any theme developer wants to add support for this highlighting.

## Summary

- [Doctype](#doctype)
- [Comments](#comments)
- [Invalid attributes](#invalid-attributes)
- [Angular directives](#angular-directives)
- [Angular interpolations](#angular-interpolations)
- [Entities](#html-entities)
- [Regex](#regex)
- [Deprecated tags](#deprecated-tags)
- [DOM Events](#dom-events)
- [Style inline](#style-inline)
- [Style tag](#style-tag)
- [Script tags](#script-tags)
- [Generic attributes](#generic-attributes)

### Doctype

<span name="doctype"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/doctype.png" title="vscode-angular-html" alt="Doctype" />

- `<` - (punctuation.definition.tag.begin.html)
- `!` - (keyword.operator.exclamation)
- `DOCTYPE` - (constant.character.entity.html)
- `html` - (support.type.object.html-attribute)
- `"any string"` - (string.quoted.double)

### Comments

<span name="comments"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/comments.png" title="vscode-angular-html" alt="Comments" />

- `<!--` - (punctuation.definition.comment.begin.html)
- `ANYTHING` - (comment.block)
- `-->` - (punctuation.definition.comment.end.html)

### Invalid attributes [see complete list](DEPRECATED-ATTRIBUTES.md)

<span name="invalid-attributes"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/invalid-attributes.png" title="Invalid attributes" alt="Invalid attributes" />

- `<` - (punctuation.definition.tag.begin.html)
- `TAG` - (entity.name.tag.other.html)
- `attributes` - (invalid.deprecated.attribute-name.`TAG_NAME`) ([see TAG_NAME list](DEPRECATED-ATTRIBUTES.md))
- `"` - (punctuation.definition.string.begin.html)
- `ANYTHING` - (string.quoted.double.html)
- `"` - punctuation.definition.string.end.html

### Angular directives

<span name="angular-directives"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/angular-directives.png" title="Angular directives" alt="Angular directives" />
