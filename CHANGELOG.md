# Change Log

# 0.0.24 (08/11/2018)

- Support for style binding with units `[style.font-size.px]="15"`
- Fixed self closing tags with space before being shown as blue instead of gray [#5](https://github.com/ghaschel/vscode-angular-html/issues/5)
- Fixed invalid attribute tag input pattern matching

# 0.0.23 (_08/11/2018_)

- Removed `$` from `[@]` highlight as it makes no sense.
- Returned `</>` colors to default keep it similar to any other HTML highlighting (feedbacks are welcome)
- Fixed issue with attributes value not being applied string scope name. [#4](https://github.com/ghaschel/vscode-angular-html/issues/4)

# 0.0.22 (_07/11/2018_)

- Fixed bug related to single quote. [#3](https://github.com/ghaschel/vscode-angular-html/issues/3)

# 0.0.21 (_07/11/2018_)

- Improved angular directive pattern matching to work with `[attr.test]`, `[@test]` and `[@$test]`

# 0.0.20 (_04/11/2018_)

- Improved tag start and end highlighting. [#2](https://github.com/ghaschel/vscode-angular-html/issues/2)

# 0.0.19 (_31/10/2018_)

- Improved tag script matching (still not perfect)

# 0.0.18 (_31/10/2018_)

- Stupid mistake

# 0.0.17 (_31/10/2018_)

- Code normalization
- Enforce entities scope to '=' on all occurrences (temporary)

# 0.0.16 (_31/10/2018_)

- Improved regex matching
- Fixed some scope names
- Fixed some includes
- Clutter removal
- Somehow managed to fix the issue with the attribute having no value (:ghost:) - only partially
- Highlighting for operators, safe operators, dots, commas, semicolons in angular interpolations and angular directives
- Improved punctuation and keyword such as var, let, const highlighting in inline script tags.

# 0.0.15 (_30/10/2018_)

- Improved script tag pattern matching (still not perfect)

# 0.0.14 (_30/10/2018_)

- Added support for script tags with content (not perfect yet)

# 0.0.13 (_29/10/2018_)

- Added support for style inline.

# 0.0.12 (_29/10/2018_)

- Changes in scope names.
- Initial support for invalid attributes in specific html tags. See [deprecated attributes](DEPRECATED-ATTRIBUTES.md).
- Improved generic attribute pattern recognition.

# 0.0.11 (_26/10/2018_)

- Improved attributes and events pattern (they were conflicting with angular directives).

# 0.0.10 (_26/10/2018_)

- Improved angular interpolation patterns by applying regex scope for brackets for a more readable content.
- Fixed Angular directives bracket matching and conflicts with events.

# 0.0.9 (_26/10/2018_)

- Changes in the deprecated tag recognition pattern for opening space for invalid attributes (not perfect yet).
- Fixed angular directive patterns that stopped recognizing attributes begining with "#" and "\*".

# 0.0.8 (_25/10/2018_)

- Changed the angular interpolations scope from punctuation to regex to take advantage of a more commonly seen regex syntax highlithing.
- Improved regex pattern matching.
- Initial support for deprecated tags. See [deprecated tags](DEPRECATED-TAGS.md).

# 0.0.7 (_24/10/2018_)

- Changes in scope names
- Added regex highlighting.
- Added ng-template and ng-container as block elements alongside html5's template tag.
- Removal of \[CDATA\] pattern as it is not usable inside of Angular's template file.
- Fixed the case when attributes would have their "=" colored.

# 0.0.6 (_24/10/2018_)

- Fixed tag opening and closing recognition caused by conflicts.
- Removal of XML pattern as it is not usable inside of Angular's template file.

# 0.0.5 (_23/10/2018_)

- Changes in scopes names.
- Fixed the issue with tag auto closing.
- Fixed the issue with vscode-icons.
- Fixed some conflicts in HTML attributes and Angular directives.
- Support for DOM events. See [DOM events](DOM-EVENTS.md).

# 0.0.4 (_15/10/2018_) - Fork

- Code rewrite for a better maintability.
- Added support for bindings and template variables: `()`, `[]`, `[()]`, `#`.

## 0.0.3 (_07-05-2018_)

- Update scope names.
- Add icon.

## 0.0.2 (_06-29-2018_)

- Update readme.
- Fix issue with filename.

## 0.0.1 (_06-29-2018_)

- Init.
