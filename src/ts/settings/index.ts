import * as JSONC from 'jsonc-parser';
import * as vscode from 'vscode';

import type { SettingsDictionary } from '../interfaces/settings-dictionary';

const getSettingsJSON = async (): Promise<SettingsDictionary> => {
  await vscode.commands.executeCommand('workbench.action.openSettingsJson');

  const activeEditor = vscode.window.activeTextEditor!;
  const settingsDocument = activeEditor.document;
  const documentText = settingsDocument.getText();

  await vscode.commands.executeCommand('workbench.action.closeActiveEditor');

  return JSONC.parse(documentText);
};

const setSettingsJSON = async (settings: SettingsDictionary): Promise<void> => {
  await vscode.commands.executeCommand('workbench.action.openSettingsJson');

  const activeEditor = vscode.window.activeTextEditor!;
  const settingsDocument = activeEditor.document;

  activeEditor.edit(editBuilder => {
    const startPosition = new vscode.Position(0, 0);
    const endPosition = settingsDocument.lineAt(settingsDocument.lineCount - 1).rangeIncludingLineBreak.end;
    const range = new vscode.Range(startPosition, endPosition);
    editBuilder.replace(range, JSON.stringify(settings, null, settings['editor.tabSize'] ?? 2));
  });

  await settingsDocument.save();

  await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
};

export { getSettingsJSON, setSettingsJSON };
