"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRawConfig = exports.getRawConfig = void 0;
const vscode_1 = require("vscode");
const JSONC = require("jsonc-parser");
const getRawConfig = async () => {
    // Open the user settings.json file in a new editor
    await vscode_1.commands.executeCommand("workbench.action.openSettingsJson");
    // Grab the new active editor from the window (should be the one we just
    // opened)
    const activeEditor = vscode_1.window.activeTextEditor;
    // Get the open document from the active editor (should be the
    // settings.json file)
    const settingsDocument = activeEditor.document;
    // Get all of the text contained in the file
    const documentText = settingsDocument.getText();
    // Close the active settings.json editor
    await vscode_1.commands.executeCommand("workbench.action.closeActiveEditor");
    // Return the document parsed to a proper object
    console.log(JSONC.parse(documentText));
    return JSONC.parse(documentText);
};
exports.getRawConfig = getRawConfig;
const setRawConfig = async (settings) => {
    // Open the user settings.json file in a new editor
    await vscode_1.commands.executeCommand("workbench.action.openSettingsJson");
    // Grab the new active editor from the window (should be the one we just
    // opened)
    const activeEditor = vscode_1.window.activeTextEditor;
    // Get the open document from the active editor (should be the
    // settings.json file)
    const settingsDocument = activeEditor.document;
    // Open an edit operation to update the settings document
    activeEditor.edit((editBuilder) => {
        // Make a range from start to end of the document
        const startPosition = new vscode_1.Position(0, 0);
        const endPosition = settingsDocument.lineAt(settingsDocument.lineCount - 1).rangeIncludingLineBreak.end;
        const range = new vscode_1.Range(startPosition, endPosition);
        // Attempt to get the editor's tab size for pretty printing the
        // settings
        const tabSize = settings["editor.tabSize"]
            || vscode_1.workspace.getConfiguration("editor").get("tabSize")
            || 3;
        // Replace everything with the new settings object
        editBuilder.replace(range, JSON.stringify(settings, undefined, tabSize));
    });
    // Save the changed settings.json file
    await settingsDocument.save();
    // Close the active settings.json editor
    await vscode_1.commands.executeCommand("workbench.action.closeActiveEditor");
};
exports.setRawConfig = setRawConfig;
//# sourceMappingURL=index.js.map