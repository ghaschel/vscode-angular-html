import {
   workspace,
   commands,
   window,
   Range,
   Position
} from 'vscode';
import * as JSONC from 'jsonc-parser';

const getRawConfig = async (): Promise<any> => {
  // Open the user settings.json file in a new editor
  await commands.executeCommand("workbench.action.openSettingsJson");

  // Grab the new active editor from the window (should be the one we just
  // opened)
  const activeEditor = window.activeTextEditor!;
  // Get the open document from the active editor (should be the
  // settings.json file)
  const settingsDocument = activeEditor.document;

  // Get all of the text contained in the file
  const documentText = settingsDocument.getText();

  // Close the active settings.json editor
  await commands.executeCommand("workbench.action.closeActiveEditor");

  // Return the document parsed to a proper object
  console.log(JSONC.parse(documentText))
  return JSONC.parse(documentText);
}
const setRawConfig = async (settings: any) => {

  // Open the user settings.json file in a new editor
  await commands.executeCommand("workbench.action.openSettingsJson");

  // Grab the new active editor from the window (should be the one we just
  // opened)
  const activeEditor = window.activeTextEditor!;
  // Get the open document from the active editor (should be the
  // settings.json file)
  const settingsDocument = activeEditor.document;

  // Open an edit operation to update the settings document
  activeEditor.edit((editBuilder) => {
     // Make a range from start to end of the document
     const startPosition = new Position(0,0);
     const endPosition = settingsDocument.lineAt(settingsDocument.lineCount - 1).rangeIncludingLineBreak.end;
     const range = new Range(startPosition, endPosition);

     // Attempt to get the editor's tab size for pretty printing the
     // settings
     const tabSize = settings["editor.tabSize"] as number
        || workspace.getConfiguration("editor").get("tabSize") as number
        || 3;

     // Replace everything with the new settings object
     editBuilder.replace(range, JSON.stringify(settings, undefined, tabSize));
  });

  // Save the changed settings.json file
  await settingsDocument.save();
  // Close the active settings.json editor
  await commands.executeCommand("workbench.action.closeActiveEditor");
}

export {getRawConfig, setRawConfig};
