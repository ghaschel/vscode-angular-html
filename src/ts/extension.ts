// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import *  as fs from 'fs';
import path = require('path');
import * as vscode from 'vscode';
import { updateTokenCustomization, setInitialDefaults } from './token-customization';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-angular-html" is now active!'
  );

  let tokenCustomization = vscode.commands.registerCommand(
    'vscode-angular-html.updateTokenCustomization',
    () => updateTokenCustomization()
  )

  let addLegacyColorCustomizations = vscode.commands.registerCommand(
    'vscode-angular-html.addLegacyColorCustomizations',
    () => setInitialDefaults()
  )

  context.subscriptions.push(tokenCustomization)
  context.subscriptions.push(addLegacyColorCustomizations)
}

// this method is called when your extension is deactivated
export function deactivate() {}
