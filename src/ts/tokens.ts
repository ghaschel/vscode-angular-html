import * as vscode from 'vscode';

import path = require('path');

type TokenColors = Map<string, TokenColorSettings>;

interface TokenColorSettings {
  background?: string;
  fontStyle?: string;
  foreground?: string;
}

interface Rule {
  scope: string[];
  settings: TokenColorSettings;
}

interface Theme {
  id: string;
  path: string;
  include: string;
  tokenColors?: Rule[];
}

const getTokenColorsForTheme = async (themeName: string): Promise<TokenColors> => {
  const tokenColors = new Map();
  let currentThemePath;
  for (const extension of vscode.extensions.all) {
    const themes = extension.packageJSON?.contributes?.themes as Theme[] | undefined;
    const currentTheme = themes?.find((theme: Theme) => theme.id === themeName);
    if (currentTheme) {
      currentThemePath = path.join(extension.extensionPath, currentTheme.path);
      break;
    }
  }
  const themePaths: string[] = [];
  if (currentThemePath) {
    themePaths.push(currentThemePath);
  }
  while (themePaths.length > 0) {
    const themePath = themePaths.pop();
    const theme: Theme | undefined = await require(themePath!);

    if (theme) {
      if (theme.include) {
        themePaths.push(path.join(path.dirname(themePath!), theme.include));
      }
      if (theme.tokenColors) {
        theme.tokenColors.forEach(rule => {
          if (typeof rule.scope === 'string' && !tokenColors.has(rule.scope)) {
            tokenColors.set(rule.scope, rule.settings);
          } else if (rule.scope instanceof Array) {
            rule.scope.forEach(scope => {
              if (!tokenColors.has(rule.scope)) {
                tokenColors.set(scope, rule.settings);
              }
            });
          }
        });
      }
    }
  }
  return tokenColors;
};

const test = async (): Promise<void> => {
  const themeName: string | undefined = vscode.workspace.getConfiguration('workbench').get('colorTheme');
  const tokenColors = await getTokenColorsForTheme(themeName!);

  console.log(tokenColors);
};

test();
