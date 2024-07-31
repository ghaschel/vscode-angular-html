import { getTextMateRulesWithoutEmptyOnes } from '../../ts/token-customization/';

import * as vscode from 'vscode';

import * as assert from 'assert';

/*
 * You can import and use all API from the 'vscode' module
 * as well as import your extension to test it
 */

// Import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('getTextMateRulesWithoutEmptyOnes', async () => {
    const currentRules = [
      {
        scope: 'html-template.tag.html',
        settings: {
          foreground: '#569CD6',
        },
      },
      {
        scope: 'html-template.tag.custom',
        settings: {
          foreground: '#569CD6',
        },
      },
    ];

    const ruleToBeRemoved = [
      {
        scope: 'html-template.tag.custom',
        settings: {
          foreground: '#569CD6',
        },
      },
    ];
    const newRules = getTextMateRulesWithoutEmptyOnes(currentRules, ruleToBeRemoved);

    assert.deepStrictEqual(newRules, [
      {
        scope: 'html-template.tag.html',
        settings: {
          foreground: '#569CD6',
        },
      },
    ]);
  });

  /*
   * Test('Disable token customizations', async () => {
   *   await disableTokenCustomization();
   *   const config = vscode.workspace.getConfiguration();
   *   const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as {
   *      textMateRules: TextMateRule[],
   *   };
   *   const isColorCustomizationEnabled = config.get('vscode-angular-html.colorCustomizations');
   *   assert.deepStrictEqual(tokenColorCustomizations.textMateRules, []);
   *   assert.strictEqual(isColorCustomizationEnabled, false);
   * });
   */

  /*
   * Test('Enable custom color customizations', async () => {
   *   await addLegacyColorCustomizations();
   *   const config = vscode.workspace.getConfiguration();
   *   const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as {
   *     textMateRules: TextMateRule[];
   *   };
   *   const isColorCustomizationEnabled = config.get('vscode-angular-html.colorCustomizations');
   *   assert.deepStrictEqual(tokenColorCustomizations.textMateRules, tokens);
   *   assert.strictEqual(isColorCustomizationEnabled, true);
   * });
   */

  /*
   * Test('Change token color customizations', async () => {
   *   await removeLegacyColorCustomizations();
   *   const settings = await getSettingsJSON();
   *   settings['vscode-angular-html.htmlTags'] = '#000000';
   *   await setSettingsJSON(settings);
   */

  //   // Await vscode.commands.executeCommand('vscode-angular-html.updateTokenCustomization');

  //   await updateTokenCustomization();

  /*
   *   const config = vscode.workspace.getConfiguration();
   *   const isColorCustomizationEnabled = config.get('vscode-angular-html.colorCustomizations');
   *   const tokenColorCustomizations = config.get<{ textMateRules: TextMateRule[] }>(
   *     'editor.tokenColorCustomizations',
   *   ) ?? { textMateRules: [] };
   */

  /*
   *   assert.deepStrictEqual(
   *     tokenColorCustomizations.textMateRules.find(s => s.scope === 'html-template.tag.html'),
   *     {
   *       scope: 'html-template.tag.html',
   *       settings: {
   *         foreground: '#000000',
   *       },
   *     },
   *   );
   *   assert.strictEqual(isColorCustomizationEnabled, true);
   * });
   */
});
