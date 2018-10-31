# Change Log

# 0.0.16 (31/10/2018)

- Improved regex matching
- Fixed some scope names
- Fixed some includes
- Clutter removal
- Somehow managed to fix the issue with the attribute having no value (:ghost:)
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
- Added support for bindings and template variables: (), [], \[()\], #.

## 0.0.3 (_07-05-2018_)

- Update scope names.
- Add icon.

## 0.0.2 (_06-29-2018_)

- Update readme.
- Fix issue with filename.

## 0.0.1 (_06-29-2018_)

- Init.
