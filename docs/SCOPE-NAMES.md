# Custom Scope Names

> This file aims to be used as a way to point out the matched scopes with custom matches for themes to be able to support them

## Summary

- [Custom Scope Names](#custom-scope-names)
  - [Summary](#summary)
    - [Doctype](#doctype)
    - [Comments](#comments)
    - [Invalid attributes see complete list](#invalid-attributes-see-complete-list)
    - [Angular directives](#angular-directives)
    - [String](#string)
    - [Angular-specific tags](#angular-specific-tags)
    - [Angular Interpolation](#angular-interpolation)
    - [HTML Entities](#html-entities)

### Doctype

<span name="doctype"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/doctype.png" title="vscode-angular-html" alt="Doctype" />

- `<` - (punctuation.definition.tag.begin.html)
- `!` - (keyword.operator.exclamation)
- `DOCTYPE` - (entity.name.tag.html.doctype)
- `html` - (entity.other.attribute-name.html)
- `"any string"` - ([SEE STRING MATCHING](#string))
- `>` - (punctuation.definition.tag.end.html)

### Comments

<span name="comments"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/comments.png" title="vscode-angular-html" alt="Comments" />

- `<!--` - (punctuation.definition.comment.begin.html)
- `ANYTHING` - (comment.block)
- `-->` - (punctuation.definition.comment.end.html)

### Invalid attributes [see complete list](DEPRECATED-ATTRIBUTES.md)

<span name="invalid-attributes"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/invalid-attributes.png" title="Invalid attributes" alt="Invalid attributes" />

- `<` - (punctuation.definition.tag.begin.html) <b>not changed</b>
- `TAG` - (entity.name.tag.html)
- `attributes` - (invalid.deprecated.entity.other.attribute-name.html invalid.deprecated.`TAG_NAME`.`TAG_ATTRIBUTE`) ([see DEPRECATED-TAGS list](DEPRECATED-TAGS.md) and [see DEPRECATED-ATTRIBUTES list](DEPRECATED-ATTRIBUTES.md))
- `=` - (<b>puctuation.separator.key-value.html-template.ng</b> punctuation.separator.key-value.html)
- `"` - (punctuation.definition.string.begin.html)
- `STRING` - ([SEE STRING MATCHING](#string))
- `"` - punctuation.definition.string.end.html

### Angular directives

<span name="angular-directives"></span>

<img src="https://raw.githubusercontent.com/ghaschel/vscode-angular-html/master/assets/angular-directives.png" title="Angular directives" alt="Angular directives" />

### String

<span name="string"></span>

### Angular-specific tags

- DO IT

### Angular Interpolation

-- DO IT

### HTML Entities

-- DO IT (SEE HTML ENTITIES LIST)
