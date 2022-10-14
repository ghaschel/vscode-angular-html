# Colorize Settings

> This is just a suggestion and a personal preference.

<img src="../assets/style-inline-colorize.png" title="Style inline" alt="Style inline with colorize">

In order to have the following effect in your HTML file, make sure [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) is installed, and then, make the following changes in your settings.json file:

- Add `"html"` to your `"colorize.languages"` array.

It should look something like this:

```json
"colorize.languages": ["css", "scss", "less", "styl", "html"],
"colorize.colorized_variables": ["CSS", "SASS", "LESS", "STYLUS"],
```

Your style tags, inline styles and non-string SVG attributes should display their selected colors now.
