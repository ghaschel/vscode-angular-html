import * as tokens from './legacy-colors.json';

import {
  addLegacyColorCustomizations,
  disableTokenCustomization,
  enableColorCustomization,
  removeLegacyColorCustomizations,
  updateConfiguration,
  updateTokenCustomization,
} from '../../ts/token-customization/';

import * as vscode from 'vscode';

import * as assert from 'assert';

import type { TextMateRule } from '../../ts/interfaces/textmate-rules';

/*
 * You can import and use all API from the 'vscode' module
 * as well as import your extension to test it
 */

// Import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Enable legacy color customizations', async () => {
    await addLegacyColorCustomizations();
    const config = vscode.workspace.getConfiguration();
    const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as { textMateRules: TextMateRule[] };
    const isColorCustomizationEnabled = config.get('vscode-angular-html.colorCustomizations');
    assert.deepStrictEqual(tokenColorCustomizations.textMateRules, tokens);
    assert.strictEqual(isColorCustomizationEnabled, true);
  });

  test('Disable token customizations', async () => {
    await disableTokenCustomization();
    const config = vscode.workspace.getConfiguration();
    const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as { textMateRules: TextMateRule[] };
    const isColorCustomizationEnabled = config.get('vscode-angular-html.colorCustomizations');
    assert.deepStrictEqual(tokenColorCustomizations.textMateRules, []);
    assert.strictEqual(isColorCustomizationEnabled, false);
  });

  test('Change token color customizations', async () => {
    await removeLegacyColorCustomizations();
    await disableTokenCustomization();
    await enableColorCustomization();
    await updateConfiguration('htmlTags', '#000000', true);
    await updateTokenCustomization();
    const config = vscode.workspace.getConfiguration();
    const isColorCustomizationEnabled = config.get('vscode-angular-html.colorCustomizations');
    const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as { textMateRules: TextMateRule[] };
    assert.deepStrictEqual(tokenColorCustomizations.textMateRules, [
      {
        scope: 'html-template.tag.html',
        settings: {
          foreground: '#000000',
        },
      },
    ]);
    assert.strictEqual(isColorCustomizationEnabled, true);
  });
});
