# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.7](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.6...v2.3.7) (2023-01-09)

### [2.3.6](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.5...v2.3.6) (2023-01-09)

### [2.3.5](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.4...v2.3.5) (2023-01-09)

### Bug Fixes

- **color generation:** fixed color customization generation ([1e3ccc9](https://github.com/ghaschel/vscode-angular-html/commit/1e3ccc94312647ac4e8f4b5d2b8fba472688bd85))

### [2.3.4](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.3...v2.3.4) (2022-12-14)

### Bug Fixes

- **legacy-colors-command:** fixed the legacy-colors-command ([48b6855](https://github.com/ghaschel/vscode-angular-html/commit/48b6855b67230d5b72b457f80aff177639b75517))

### [2.3.3](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.2...v2.3.3) (2022-12-05)

### [2.3.2](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.1...v2.3.2) (2022-12-05)

### Bug Fixes

- **animation callback:** fixed annimation callback not working ([6ae55ea](https://github.com/ghaschel/vscode-angular-html/commit/6ae55eae2b19dca50f768ad2231151da8e4e1027))

### [2.3.1](https://github.com/ghaschel/vscode-angular-html/compare/v2.3.0...v2.3.1) (2022-11-14)

## [2.3.0](https://github.com/ghaschel/vscode-angular-html/compare/v2.2.2...v2.3.0) (2022-11-14)

### Features

- **performance:** also added support for data and aria prefixed attributes ([5feb30f](https://github.com/ghaschel/vscode-angular-html/commit/5feb30f2b42c5f6d1c62163ac2b72ded44b9a8de)), closes [#74](https://github.com/ghaschel/vscode-angular-html/issues/74)

### Bug Fixes

- **settings:** fixed an issue with changing settings through the settings page ([d0d9714](https://github.com/ghaschel/vscode-angular-html/commit/d0d9714f79410c46207aa6d381350ef7b1a34c95)), closes [#72](https://github.com/ghaschel/vscode-angular-html/issues/72)

### [2.2.2](https://github.com/ghaschel/vscode-angular-html/compare/v2.2.1...v2.2.2) (2022-11-11)

### Bug Fixes

- **settings:** fixed an issue with changing settings through the settings page ([9b46e62](https://github.com/ghaschel/vscode-angular-html/commit/9b46e62b5d8760022836c52dd83dd2018b287483)), closes [#72](https://github.com/ghaschel/vscode-angular-html/issues/72)

### [2.2.1](https://github.com/ghaschel/vscode-angular-html/compare/v2.2.0...v2.2.1) (2022-10-25)

### Bug Fixes

- **package.json:** fixed entry file ([e2d6f37](https://github.com/ghaschel/vscode-angular-html/commit/e2d6f376ffa777de9f7920bb4503b4c5aa8d728a))

## [2.2.0](https://github.com/ghaschel/vscode-angular-html/compare/v2.1.0...v2.2.0) (2022-10-25)

### Features

- **per-theme support:** per-theme support. some performance improvements ([9106151](https://github.com/ghaschel/vscode-angular-html/commit/9106151e11e84ede3d3b73018670aa8f402315ee)), closes [#63](https://github.com/ghaschel/vscode-angular-html/issues/63) [#64](https://github.com/ghaschel/vscode-angular-html/issues/64) [#65](https://github.com/ghaschel/vscode-angular-html/issues/65) [#68](https://github.com/ghaschel/vscode-angular-html/issues/68)

## [2.1.0](https://github.com/ghaschel/vscode-angular-html/compare/v2.0.2...v2.1.0) (2022-10-17)

### Features

- **primeng support:** fixes an issue with custom-elements matching and adds support for primeng ([67429aa](https://github.com/ghaschel/vscode-angular-html/commit/67429aa799d9861a9f96ae571745657fac02cf2c)), closes [#65](https://github.com/ghaschel/vscode-angular-html/issues/65) [#63](https://github.com/ghaschel/vscode-angular-html/issues/63)

### [2.0.2](https://github.com/ghaschel/vscode-angular-html/compare/v2.0.0...v2.0.2) (2022-10-14)

### Bug Fixes

- **missing node_modules:** attempt to fix runtime error ([02eb620](https://github.com/ghaschel/vscode-angular-html/commit/02eb620c19aa63b5a046e3b6f3ed87e45136a6b2))

### [2.0.1](https://github.com/ghaschel/vscode-angular-html/compare/v2.0.0...v2.0.1) (2022-10-14)

### Bug Fixes

- **missing node_modules:** attempt to fix runtime error ([02eb620](https://github.com/ghaschel/vscode-angular-html/commit/02eb620c19aa63b5a046e3b6f3ed87e45136a6b2))

## [2.0.0](https://github.com/ghaschel/vscode-angular-html/compare/v1.8.4...v2.0.0) (2022-10-14)

### ⚠ BREAKING CHANGES

- **scope customization:** same as before
- **wrong scope names:** same as before
- **script tag:** same as before
- **localization:** same as before
- **settings page:** same as before
- **settings-page:** same breaking changes as before
- **multiple items:** the whole grammar is changing

### Features

- **localization:** added localization structure ([b29611c](https://github.com/ghaschel/vscode-angular-html/commit/b29611cc9b9146c0576d2e45e5bc503ef6403a8c))
- **scope customization:** new scope customization (html, custom-elements, svg, ng operators) ([71d978d](https://github.com/ghaschel/vscode-angular-html/commit/71d978d6e05b33492ff0b17ede67f8a037ef046b))
- **script tag:** finished script and style tags ([3cabca6](https://github.com/ghaschel/vscode-angular-html/commit/3cabca6090d005eb09b6772895d2197480a3d027))
- **settings page:** functional development is done ([c078d2f](https://github.com/ghaschel/vscode-angular-html/commit/c078d2f7d54959dfedbedf74837297f12f08660f))
- **settings-page:** first working version ([1e2d533](https://github.com/ghaschel/vscode-angular-html/commit/1e2d533d82644f1981663d26f2cb6340259bb9b6))
- **svg and xml support:** svg almost done, xml id say half done ([aef5dc3](https://github.com/ghaschel/vscode-angular-html/commit/aef5dc3bda89a436a7b3be598b9232493d215f4e))
- **xml and svg support:** finished implementation of SVG, XML and DTD matching ([26c963b](https://github.com/ghaschel/vscode-angular-html/commit/26c963ba71f365791cca03e94eedd21454fd4c45))

### Bug Fixes

- **config naming:** fixed config naming not associating to some rules ([be485c4](https://github.com/ghaschel/vscode-angular-html/commit/be485c484e47033f1249a8c97ce275542ebe547a))
- **wrong scope names:** fixed a bunch of scope names ([4054765](https://github.com/ghaschel/vscode-angular-html/commit/40547656d91a1ce8d2f82e6a33016da0b58018ab))

- **multiple items:** first step of current refactor ([06a462b](https://github.com/ghaschel/vscode-angular-html/commit/06a462bd48041aba8d43361deed6b7b6fc879f43)), closes [#55](https://github.com/ghaschel/vscode-angular-html/issues/55) [#54](https://github.com/ghaschel/vscode-angular-html/issues/54) [#53](https://github.com/ghaschel/vscode-angular-html/issues/53)

### [1.8.4](https://github.com/ghaschel/vscode-angular-html/compare/v1.8.3...v1.8.4) (2022-08-11)

### Bug Fixes

- **suggestion:** fixed compability with suggestion plugins ([76e621b](https://github.com/ghaschel/vscode-angular-html/commit/76e621bf41c7c9080b8afaaf4695933ad11a31b0)), closes [#46](https://github.com/ghaschel/vscode-angular-html/issues/46)

### [1.8.3](https://github.com/ghaschel/vscode-angular-html/compare/v1.8.2...v1.8.3) (2022-08-09)

### [1.8.2](https://github.com/ghaschel/vscode-angular-html/compare/v1.8.1...v1.8.2) (2022-08-09)

### Bug Fixes

- **scope name:** fixed grammar no longer working. possibly fixed integration with vscode-html-css ([2e60e1e](https://github.com/ghaschel/vscode-angular-html/commit/2e60e1e2ec0d02c7d9e5559749678e5a19b42ac9)), closes [#51](https://github.com/ghaschel/vscode-angular-html/issues/51)

### [1.8.1](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.8.0...v1.8.1) (2022-08-05)

### Bug Fixes

- **multiple scopes:** scopes fixes to match correctly with inline templates ([a68da4f](https://github.com/ghaschel/vscode-angular-syntax/commit/a68da4fb9e155c02f8fe43971c2de7f9fe911d64))

## [1.8.0](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.7.4...v1.8.0) (2022-06-08)

### Features

- **tags and attributes:** added missing angular material and cdk tags and improved attributes ([5789d20](https://github.com/ghaschel/vscode-angular-syntax/commit/5789d2049d205ae79802edf81c85898309242b0a))

### [1.7.4](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.7.3...v1.7.4) (2022-06-01)

### Bug Fixes

- **tag-definition:** added missing mat-pseudo-checkbox tag ([c977af0](https://github.com/ghaschel/vscode-angular-syntax/commit/c977af0a67a23cdba1e663b19dffeb456a241f5e))

### [1.7.3](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.7.2...v1.7.3) (2022-06-01)

### Bug Fixes

- **added missing ng structural tag:** added missing mat-selection-list material tag ([5e40843](https://github.com/ghaschel/vscode-angular-syntax/commit/5e4084331c70fad465971da72236ac4545fa65a8))

### [1.7.2](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.7.1...v1.7.2) (2022-06-01)

### Bug Fixes

- **tag-definition:** fixed an issue with mat-list-option and mat-card-title-group ([9f78b18](https://github.com/ghaschel/vscode-angular-syntax/commit/9f78b18037581dace8a02e95cb97d0aa6697d21e))

### [1.7.1](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.7.0...v1.7.1) (2022-05-03)

### Bug Fixes

- **style-tag:** fixed style tag detection to allow detection of components starting with <style ([70e209a](https://github.com/ghaschel/vscode-angular-syntax/commit/70e209ad23a1094728fbcc8ab3fae5e90c355f1f)), closes [#48](https://github.com/ghaschel/vscode-angular-syntax/issues/48)

## [1.7.0](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.6.0...v1.7.0) (2020-02-19)

### Features

- **mat-drawer:** added support for mat-drawer and mat-drawer-content ([787efd9](https://github.com/ghaschel/vscode-angular-syntax/commit/787efd9d826ade8a16de4ca0ad030d8205ef6c38))

## [1.6.0](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.5.0...v1.6.0) (2020-01-28)

### Features

- **prefixed-attributes:** added highlighting for let- and ref prefix ([22df9bc](https://github.com/ghaschel/vscode-angular-syntax/commit/22df9bcd6e74fc45a6be0f5d71dc601348d64094))

### Bug Fixes

- **main-scope:** attempt to fix a bug where highlithting strips off ([658bbd9](https://github.com/ghaschel/vscode-angular-syntax/commit/658bbd914088e587efba77c85f615bba40cc7f09)), closes [#32](https://github.com/ghaschel/vscode-angular-syntax/issues/32)
- **script-tag:** fixed script tag with src attributes ([00a9e82](https://github.com/ghaschel/vscode-angular-syntax/commit/00a9e82dc8d38c15a3754649b27f16c7b3ad4bc2))

## [1.5.0](https://github.com/ghaschel/vscode-angular-syntax/compare/v1.4.0...v1.5.0) (2020-01-02)

### Features

- **prefixed-attributes:** added highlighting for let- and ref prefix ([b4ed81d](https://github.com/ghaschel/vscode-angular-syntax/commit/b4ed81dd6a9ee8c669b77594fea3f0bef4096886))

### Bug Fixes

- **main-scope:** attempt to fix a bug where highlithting strips off ([f113a35](https://github.com/ghaschel/vscode-angular-syntax/commit/f113a35dffaf4e75de33ad2ef0d104f5a97500a1)), closes [#32](https://github.com/ghaschel/vscode-angular-syntax/issues/32)

# 1.3.1 (13/09/2019)

- Fixed `s` tag being marked as deprecated [#29](https://github.com/ghaschel/vscode-angular-html/issues/29)

# 1.3.0 (23/08/2019)

- Fixed missing `router-outlet` to structural tags differentiation [#24](https://github.com/ghaschel/vscode-angular-html/issues/24)
- Added color differentiatio for pipes [#26](https://github.com/ghaschel/vscode-angular-html/issues/26)
- Fixed missing highlighting for single asterisk [#27](https://github.com/ghaschel/vscode-angular-html/issues/27)

# 1.2.0 (23/08/2019)

- Fixed the dom events that were being overwritted by the attributes without equal [#25](https://github.com/ghaschel/vscode-angular-html/issues/25)
- Added `else` and `then` keywords to \*ngIf directives [#23](https://github.com/ghaschel/vscode-angular-html/issues/23)
- Added color differentiation for angular structural tags [#24](https://github.com/ghaschel/vscode-angular-html/issues/24)

# 1.1.4 (15/08/2019)

- Fixed an issue with tags starting with deprecated tag names [#22](https://github.com/ghaschel/vscode-angular-html/issues/22)

# 1.1.3 (14/08/2019)

- Fixed an issue with multiple directives/attributes at the sime line. [#20](https://github.com/ghaschel/vscode-angular-html/issues/20)

# 1.1.2 (24/05/2019)

- Fixed an issue with angular attributes with underlines

# 1.1.1 (02/02/2019)

- Removed junk

# 1.1.0 (_02/02/2019_)

- Added highlighting for uppercase constants (it was white before)

# 1.0.3 (_28/12/2018_)

- Stupid mistake

# 1.0.2 (_28/12/2018_)

- Minor fixes in scope naming

# 1.0.1 (_12/12/2018_)

- Returned the language id to html until I figure it out the language server thing and prevent it from not having intelisense support for HTML.

# 1.0.0 (_11/12/2018_)

- Changed a lot of scope names for a more concise naming. See [scope names](SCOPE-NAMES.md) (Work in Progress)
- Changed language id from html to angular-html, so that it doesn't overwrite the default html syntax highlighting. (Althought this breaks support for icons on vscode-icons)

# 0.10.4 (_27/11/2018_)

- Cleaning in angular template expressions
- Updated version numbers and changelog to properly follow SemVer

# 0.10.3 (_25/11/2018_)

- Cleaning in angular template expressions

# 0.10.2 (_23/11/2018_)

- Fixed issue with safe operators inside function parameters
- Transformed adapted ts json to multiple json5 for a better maintability.
- Removed some surely not used ts scopes on templates (not all of them yet)

# 0.10.1 (_22/11/2018_)

- Improvements in gulpfile
- Although it's far from optimized yet, managed to fix the issue with angular expressions without semicolon at the end. [#15](https://github.com/ghaschel/vscode-angular-html/issues/15)

# 0.10.0 (_21/11/2018_)

- Style tag support (scss/stylus)

# 0.9.0 (_20/11/2018_)

- Code was improved by a thousand percent
- Removed unused patterns
- Fixed angular interpolations not being recognized inside strings in attributes [#9](https://github.com/ghaschel/vscode-angular-html/issues/9)
- Fixed minified boolean attributes [#11](https://github.com/ghaschel/vscode-angular-html/issues/11)
- Fixed strings not being recogized inside ngClass
- Improved html entities
- Fixed double quote recognition at the beginning of angular directives in other themes
- Visual differentiation between angular directives (ngFor, ngIf, bindings) and html attributes.
- Fixed the issue with `let` [#13](https://github.com/ghaschel/vscode-angular-html/issues/13)
- Switched angular directive unit scope with directive attribute name for better highlighting.

# 0.8.5 (_18/11/2018_)

- Improved generic attribute pattern

# 0.8.4 (_14/11/2018_)

- Further differentiation from attribute names and variables in angular directions. (Applied `support.type.object.module.html` scope)

# 0.8.3 (_14/11/2018_)

- Fixed deprecated tags
- Removed unused patterns
- Improved operator in angular directives and angular interpolations

# 0.8.2 (_12/11/2018_)

- Improves even further the previous issue

# 0.8.1 (_12/11/2018_)

- Fixed security issues pointed by Github with package-lock.json
- Fixed gulpfile tasks
- Fixes the case where normal attributes would apply text color to the next attributes that didn't have a newline before. [#6](https://github.com/ghaschel/vscode-angular-html/issues/6)

# 0.8.0 (_09/11/2018_)

- Support for DOCTYPE

# 0.7.0 (_08/11/2018_)

- Support for style binding with units `[style.font-size.px]="15"`
- Fixed self closing tags with space before being shown as blue instead of gray [#5](https://github.com/ghaschel/vscode-angular-html/issues/5)
- Fixed invalid attribute tag input pattern matching

# 0.6.9 (_08/11/2018_)

- Removed `$` from `[@]` highlight as it makes no sense.
- Returned `</>` colors to default keep it similar to any other HTML highlighting (feedbacks are welcome)
- Fixed issue with attributes value not being applied string scope name. [#4](https://github.com/ghaschel/vscode-angular-html/issues/4)

# 0.6.8 (_07/11/2018_)

- Fixed bug related to single quote. [#3](https://github.com/ghaschel/vscode-angular-html/issues/3)

# 0.6.7 (_07/11/2018_)

- Improved angular directive pattern matching to work with `[attr.test]`, `[@test]` and `[@$test]`

# 0.6.6 (_04/11/2018_)

- Improved tag start and end highlighting. [#2](https://github.com/ghaschel/vscode-angular-html/issues/2)

# 0.6.5 (_31/10/2018_)

- Improved tag script matching (still not perfect)

# 0.6.4 (_31/10/2018_)

- Stupid mistake

# 0.6.3 (_31/10/2018_)

- Code normalization
- Enforce entities scope to '=' on all occurrences (temporary)

# 0.6.2 (_31/10/2018_)

- Improved regex matching
- Fixed some scope names
- Fixed some includes
- Clutter removal
- Somehow managed to fix the issue with the attribute having no value (:ghost:) - only partially
- Highlighting for operators, safe operators, dots, commas, semicolons in angular interpolations and angular directives
- Improved punctuation and keyword such as var, let, const highlighting in inline script tags.

# 0.6.1 (_30/10/2018_)

- Improved script tag pattern matching (still not perfect)

# 0.6.0 (_30/10/2018_)

- Added support for script tags with content (not perfect yet)

# 0.5.0 (_29/10/2018_)

- Added support for style inline.

# 0.4.0 (_29/10/2018_)

- Changes in scope names.
- Initial support for invalid attributes in specific html tags. See [deprecated attributes](DEPRECATED-ATTRIBUTES.md).
- Improved generic attribute pattern recognition.

# 0.3.4 (_26/10/2018_)

- Improved attributes and events pattern (they were conflicting with angular directives).

# 0.3.3 (_26/10/2018_)

- Improved angular interpolation patterns by applying regex scope for brackets for a more readable content.
- Fixed Angular directives bracket matching and conflicts with events.

# 0.3.2 (_26/10/2018_)

- Changes in the deprecated tag recognition pattern for opening space for invalid attributes (not perfect yet).
- Fixed angular directive patterns that stopped recognizing attributes begining with "#" and "\*".

# 0.3.1 (_25/10/2018_)

- Changed the angular interpolations scope from punctuation to regex to take advantage of a more commonly seen regex syntax highlithing.
- Improved regex pattern matching.
- Initial support for deprecated tags. See [deprecated tags](DEPRECATED-TAGS.md).

# 0.3.0 (_24/10/2018_)

- Changes in scope names
- Added regex highlighting.
- Added ng-template and ng-container as block elements alongside html5's template tag.
- Removal of \[CDATA\] pattern as it is not usable inside of Angular's template file.
- Fixed the case when attributes would have their "=" colored.

# 0.2.1 (_24/10/2018_)

- Fixed tag opening and closing recognition caused by conflicts.
- Removal of XML pattern as it is not usable inside of Angular's template file.

# 0.2.0 (_23/10/2018_)

- Changes in scopes names.
- Fixed the issue with tag auto closing.
- Fixed the issue with vscode-icons.
- Fixed some conflicts in HTML attributes and Angular directives.
- Support for DOM events. See [DOM events](DOM-EVENTS.md).

# 0.1.0 (_15/10/2018_) - Fork

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
