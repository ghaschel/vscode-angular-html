/*
 * The module 'vscode' contains the VS Code extensibility API
 * Import the module and reference it with the alias vscode in your code below
 */
import {
  addLegacyColorCustomizations,
  disableTokenCustomization,
  updateTokenCustomization,
} from './token-customization';

import * as vscode from 'vscode';

const activate = function activate(context: vscode.ExtensionContext): void {
  vscode.window
    .showInformationMessage(
      'vscode-angular-html was updated and it now allows color customizations 🎉!  Please, check-out the settings page :)',
      'Enable Legacy Colors',
      'Go to Settings Page',
    )
    .then(value => {
      switch (value) {
        case 'Enable Legacy Colors': {
          vscode.commands.executeCommand('vscode-angular-html.addLegacyColorCustomizations');
          break;
        }

        case 'Go to Settings Page': {
          vscode.commands.executeCommand('workbench.action.openSettings', '@ext:ghaschel.vscode-angular-html');
          break;
        }

        default: {
          break;
        }
      }
    });

  const tokenCustomizationCommand = vscode.commands.registerCommand(
    'vscode-angular-html.updateTokenCustomization',
    async () => updateTokenCustomization(),
  );

  const addLegacyColorCustomizationsCommand = vscode.commands.registerCommand(
    'vscode-angular-html.addLegacyColorCustomizations',
    async () => addLegacyColorCustomizations(),
  );

  const disableTokenCustomizationCommand = vscode.commands.registerCommand(
    'vscode-angular-html.disableTokenCustomization',
    async () => disableTokenCustomization(),
  );

  const configurationChange = vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
    const isAffected = event.affectsConfiguration('vscode-angular-html');

    if (isAffected) {
      const config = vscode.workspace.getConfiguration('vscode-angular-html');
      const isCustomizationEnabled = config.get('colorCustomizations') as boolean;

      if (isCustomizationEnabled) {
        updateTokenCustomization();
      } else {
        disableTokenCustomization();
      }
    }
  });

  context.subscriptions.push(tokenCustomizationCommand);
  context.subscriptions.push(addLegacyColorCustomizationsCommand);
  context.subscriptions.push(configurationChange);
  context.subscriptions.push(disableTokenCustomizationCommand);
};

const deactivate = function deactivate(): void {
  disableTokenCustomization();
};

export { activate, deactivate };
