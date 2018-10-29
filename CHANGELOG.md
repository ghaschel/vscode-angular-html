# Change Log

# 0.0.12 (29/10/2018)

- Changes in scope names
- Initial support for invalid attributes in specific html tags (see deprecated-attributes.txt).
- Improved generic attribute pattern recognition

# 0.0.11 (_26/10/2018_)

- Improved attributes and events pattern (they were conflicting with angular directives)

# 0.0.10 (_26/10/2018_)

- Improved angular interpolation patterns to apply regex scope to brackets for a more readable content.
- Fixed Angular directives bracket matching and conflicts with events.

# 0.0.9 (_26/10/2018_)

- Changes in the deprecated tag recognition pattern for opening space for invalid attributes (not perfect yet)
- Fixed angular directive patterns that stopped recognizing attributes begining with "#" and "\*" (not perfect yet)

# 0.0.8 (_25/10/2018_)

- Changed the angular interpolations scope from punctuation to regex to take advantage of a more commonly seen regex syntax highlighting
- Improved the regex pattern matching
- Initial support for deprecated tags (see deprecated-tags.txt)

# 0.0.7 (_24/10/2018_)

- Changes in scope names
- Added regex highlight (initial)
- Added ng-template and ng-container as block elements alongside html5's template tag.
- Removal of \[CDATA\] pattern as it is not usable inside of Angular's template file.
- Fixed the case when attributes would have their "=" colored.

# 0.0.6 (_24/10/2018_)

- Fixed tag opening and closing recognition caused by conflicts.
- Removal of XML pattern as it is not usable inside of Angular's template file.

# 0.0.5 (_23/10/2018_)

- Changes in scopes names
- Fixed the issue with tag auto closing
- Fixed the issue with vscode-icons
- Fixed some conflicts in HTML attributes and Angular directives.
- [Support for DOM events (Common, Pointer, Internet Explorer-specific and XUL events)](https://en.wikipedia.org/wiki/DOM_events) (see dom-events.txt)

# 0.0.4 (_15/10/2018_) - Fork

- Code rewrite for a better maintability.
- Added support for bindings and template variables: (), [], \[()\], #

## 0.0.3 (_07-05-2018_)

- Update scope names.
- Add icon.

## 0.0.2 (_06-29-2018_)

- Update readme.
- Fix issue with filename.

## 0.0.1 (_06-29-2018_)

- Init.
