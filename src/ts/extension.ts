import {
  addLegacyColorCustomizations,
  disableTokenCustomization,
  updateTokenCustomization,
} from './token-customization';

import * as semver from 'semver';
import * as vscode from 'vscode';
import { localize, init as nlsInit } from 'vscode-nls-i18n';

const activate = function activate(context: vscode.ExtensionContext): void {
  nlsInit(context.extensionPath);

  const versionKey = 'shown.version';
  const updateMessage = 'updateMessage.shown';

  context.globalState.setKeysForSync([versionKey, updateMessage]);

  const currentVersion: string = context.extension.packageJSON.version;
  const lastVersionShown: string = context.globalState.get(versionKey) ?? '0.0.0';
  const wasMessageShown: string = context.globalState.get(updateMessage) ?? 'false';

  if (semver.gtr(currentVersion, lastVersionShown) === true && wasMessageShown === 'false') {
    context.globalState.update(versionKey, currentVersion);
    context.globalState.update(updateMessage, 'true');

    vscode.window
      .showInformationMessage(
        localize(
          'ext.messages.updateNotice',
          'vscode-angular-html was updated and it now allows color customizations 🎉!  Please, check-out the settings page :)',
        ),
        localize('ext.messages.enableLegacyColors', 'Enable Legacy Colors'),
        localize('ext.messages.goToSettingsPage', 'Go to Settings Page'),
      )
      .then(value => {
        switch (value) {
          case localize('ext.messages.enableLegacyColors', 'Enable Legacy Colors'): {
            vscode.commands.executeCommand('vscode-angular-html.addLegacyColorCustomizations');
            break;
          }

          case localize('ext.messages.goToSettingsPage', 'Go to Settings Page'): {
            vscode.commands.executeCommand('workbench.action.openSettings', '@ext:ghaschel.vscode-angular-html');
            break;
          }

          default: {
            break;
          }
        }
      });
  }

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
