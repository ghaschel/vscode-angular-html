# Localization

> If you want to help translate this extension, please follow these simple instructions

- Clone this repository
- Install with `npm install`
- Find out the target [VSCode's locale code](https://code.visualstudio.com/docs/getstarted/locales#_available-locales) for your translation.
- Add the selected locale code to the `availableLangs` array in `src/locale/types/lang.ts`
- Create a folder with the selected locale code as the name in `src/locale/languages`
- Use the available `new-language-template.json` file in `src/locale/language` as your base file.

## Testing your translation

To test your translation, run `npm run compile` to generate the `package.nls.json` files, and test by running the `Run Extension` task in the _Run and Debug_ VSCode tab.
