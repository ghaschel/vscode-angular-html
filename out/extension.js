"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const token_customization_1 = require("./token-customization");
function activate(context) {
    console.log('Congratulations, your extension "vscode-angular-html" is now active!');
    let tokenCustomization = vscode.commands.registerCommand('vscode-angular-html.updateTokenCustomization', () => (0, token_customization_1.updateTokenCustomization)());
    let addLegacyColorCustomizations = vscode.commands.registerCommand('vscode-angular-html.addLegacyColorCustomizations', () => (0, token_customization_1.setInitialDefaults)());
    context.subscriptions.push(tokenCustomization);
    context.subscriptions.push(addLegacyColorCustomizations);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map