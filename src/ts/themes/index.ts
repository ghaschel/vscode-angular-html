import { LegacyScopes } from '../interfaces/legacy-scopes-per-rule';
import { supportedThemes } from '../interfaces/themes';
import { getSettingsJSON, setSettingsJSON } from '../settings';

import * as JSONC from 'jsonc-parser';
import * as vscode from 'vscode';

import type { GeneratedTheme, Scopes } from '../interfaces/legacy-scopes-per-rule';
import type { SupportedThemes } from '../interfaces/themes';

const fetchThemeColors = async (): Promise<GeneratedTheme[]> => {
  await vscode.commands.executeCommand('workbench.action.generateColorTheme');
  const content = JSONC.parse(vscode.window.activeTextEditor?.document.getText() as string);
  await vscode.commands.executeCommand('editor.action.selectAll');
  await vscode.commands.executeCommand('editor.action.clipboardCutAction');
  await vscode.commands.executeCommand('workbench.action.closeActiveEditor');

  return content.tokenColors;
};

const fetchScopeColors = (themeColors: GeneratedTheme[]): Scopes => ({
  'constant.character.entity.html': themeColors.find(s => s.scope.includes('constant.character.entity.html'))?.settings
    .foreground as string,
  'constant.numeric.angular-directive': themeColors.find(s => s.scope.includes('constant.numeric.angular-directive'))
    ?.settings.foreground as string,
  'entity.name.tag.other.html': themeColors.find(s => s.scope.includes('entity.name.tag.other.html'))?.settings
    .foreground as string,
  'keyword.operator.entity.html': themeColors.find(s => s.scope.includes('keyword.operator.entity.html'))?.settings
    .foreground as string,
  'keyword.operator.expression.let.js': themeColors.find(s => s.scope.includes('keyword.operator.expression.let.js'))
    ?.settings.foreground as string,
  'keyword.operator.punctuation': themeColors.find(s => s.scope.includes('keyword.operator.punctuation'))?.settings
    .foreground as string,
  'string.regexp': themeColors.find(s => s.scope.includes('string.regexp'))?.settings.foreground as string,
  'support.type.object.html-attribute': themeColors.find(s => s.scope.includes('support.type.object.html-attribute'))
    ?.settings.foreground as string,
});

const applyScopeColors = async (scopeColors: Scopes): Promise<void> => {
  const settings = await getSettingsJSON();

  settings['vscode-angular-html.angularAndAngularMaterialElementTags'] =
    scopeColors[LegacyScopes.angularAndAngularMaterialElementTags];
  settings['vscode-angular-html.angularAnimationTriggerPrefix'] =
    scopeColors[LegacyScopes.angularAnimationTriggerPrefix];
  settings['vscode-angular-html.angularAnimationTriggerVariableName'] =
    scopeColors[LegacyScopes.angularAnimationTriggerVariableName];
  settings['vscode-angular-html.angularBindingAttributeDelimiter'] =
    scopeColors[LegacyScopes.angularBindingAttributeDelimiter];
  settings['vscode-angular-html.angularEventHandlerName'] = scopeColors[LegacyScopes.angularEventHandlerName];
  settings['vscode-angular-html.angularExpression'] = scopeColors[LegacyScopes.angularExpression];
  settings['vscode-angular-html.angularExpressionOperatorsAndNavigatorsColor'] =
    scopeColors[LegacyScopes.angularExpressionOperatorsAndNavigatorsColor];
  settings['vscode-angular-html.angularOneWayBindingAnimationTriggerDecorator'] =
    scopeColors[LegacyScopes.angularOneWayBindingAnimationTriggerDecorator];
  settings['vscode-angular-html.angularOneWayBindingFirstLevelDepth'] =
    scopeColors[LegacyScopes.angularOneWayBindingFirstLevelDepth];
  settings['vscode-angular-html.angularOneWayBindingSecondLevelDepth'] =
    scopeColors[LegacyScopes.angularOneWayBindingSecondLevelDepth];
  settings['vscode-angular-html.angularOneWayBindingThirdLevelDepth'] =
    scopeColors[LegacyScopes.angularOneWayBindingThirdLevelDepth];
  settings['vscode-angular-html.angularPrefixedAttributesLetPrefix'] =
    scopeColors[LegacyScopes.angularPrefixedAttributesLetPrefix];
  settings['vscode-angular-html.angularPrefixedAttributesRefPrefix'] =
    scopeColors[LegacyScopes.angularPrefixedAttributesRefPrefix];
  settings['vscode-angular-html.angularPrefixedAttributesRxjsSuffix'] =
    scopeColors[LegacyScopes.angularPrefixedAttributesRxjsSuffix];
  settings['vscode-angular-html.angularPrefixedAttributesVariableName'] =
    scopeColors[LegacyScopes.angularPrefixedAttributesVariableName];
  settings['vscode-angular-html.angularSyntaxSugarAttributesName'] =
    scopeColors[LegacyScopes.angularSyntaxSugarAttributesName];
  settings['vscode-angular-html.angularSyntaxSugarAttributesPrefix'] =
    scopeColors[LegacyScopes.angularSyntaxSugarAttributesPrefix];
  settings['vscode-angular-html.angularTemplateVariableName'] = scopeColors[LegacyScopes.angularTemplateVariableName];
  settings['vscode-angular-html.angularTemplateVariablePrefix'] =
    scopeColors[LegacyScopes.angularTemplateVariablePrefix];
  settings['vscode-angular-html.colorCustomizations'] = true;
  settings['vscode-angular-html.dtdDoctypeElement'] = scopeColors[LegacyScopes.dtdDoctypeElement];
  settings['vscode-angular-html.dtdDoctypeExclamation'] = scopeColors[LegacyScopes.dtdDoctypeExclamation];
  settings['vscode-angular-html.dtdDoctypeQualifier'] = scopeColors[LegacyScopes.dtdDoctypeQualifier];
  settings['vscode-angular-html.dtdDoctypeQuantifier'] = scopeColors[LegacyScopes.dtdDoctypeQuantifier];
  settings['vscode-angular-html.htmlAttributeValueSeparator'] = scopeColors[LegacyScopes.htmlAttributeValueSeparator];
  settings['vscode-angular-html.htmlCustomTags'] = scopeColors[LegacyScopes.htmlCustomTags];
  settings['vscode-angular-html.htmlDoctypeAttributes'] = scopeColors[LegacyScopes.htmlDoctypeAttributes];
  settings['vscode-angular-html.htmlDoctypeElement'] = scopeColors[LegacyScopes.htmlDoctypeElement];
  settings['vscode-angular-html.htmlDoctypeExclamation'] = scopeColors[LegacyScopes.htmlDoctypeExclamation];
  settings['vscode-angular-html.htmlEntitiesAmpersand'] = scopeColors[LegacyScopes.htmlEntitiesAmpersand];
  settings['vscode-angular-html.htmlEntitiesSemicolon'] = scopeColors[LegacyScopes.htmlEntitiesSemicolon];
  settings['vscode-angular-html.htmlEventsAttributes'] = scopeColors[LegacyScopes.htmlEventsAttributes];
  settings['vscode-angular-html.htmlGenericAttributesFollowedByParameter'] =
    scopeColors[LegacyScopes.htmlGenericAttributesFollowedByParameter];
  settings['vscode-angular-html.htmlScriptAttributesLanguageIdentifier'] =
    scopeColors[LegacyScopes.htmlScriptAttributesLanguageIdentifier];
  settings['vscode-angular-html.htmlLinkAttributesMimeType'] = scopeColors[LegacyScopes.htmlLinkAttributesMimeType];
  settings['vscode-angular-html.htmlStyleAttributesLanguageIdentifier'] =
    scopeColors[LegacyScopes.htmlStyleAttributesLanguageIdentifier];
  settings['vscode-angular-html.htmlTags'] = scopeColors[LegacyScopes.htmlTags];
  settings['vscode-angular-html.ariaAttributePrefix'] = scopeColors[LegacyScopes.ariaAttributePrefix];
  settings['vscode-angular-html.ariaAttributeSuffix'] = scopeColors[LegacyScopes.ariaAttributeSuffix];
  settings['vscode-angular-html.dataAttributePrefix'] = scopeColors[LegacyScopes.dataAttributePrefix];
  settings['vscode-angular-html.dataAttributeSuffix'] = scopeColors[LegacyScopes.dataAttributeSuffix];
  settings['vscode-angular-html.htmlTags'] = scopeColors[LegacyScopes.htmlTags];
  settings['vscode-angular-html.primeNgElementTags'] = scopeColors[LegacyScopes.primeNgElementTags];
  settings['vscode-angular-html.svgDAttributePathCommands'] = scopeColors[LegacyScopes.svgDAttributePathCommands];
  settings['vscode-angular-html.svgTags'] = scopeColors[LegacyScopes.svgTags];
  settings['vscode-angular-html.xmlAttributeNamespaceDivider'] = scopeColors[LegacyScopes.xmlAttributeNamespaceDivider];
  settings['vscode-angular-html.xmlAttributeNamespaceSuffix'] = scopeColors[LegacyScopes.xmlAttributeNamespaceSuffix];
  settings['vscode-angular-html.xmlStylesheetAttributesLanguageIdentifier'] =
    scopeColors[LegacyScopes.xmlStylesheetAttributesLanguageIdentifier];
  settings['vscode-angular-html.xmlTagNamespaceDivider'] = scopeColors[LegacyScopes.xmlTagNamespaceDivider];
  settings['vscode-angular-html.xmlTagNamespaceSuffix'] = scopeColors[LegacyScopes.xmlTagNamespaceSuffix];

  await setSettingsJSON(settings);
};

const updateScopeColors = async (): Promise<void> => {
  let scopeColors: Scopes;
  const theme = ((await vscode.workspace.getConfiguration().get('workbench.colorTheme')) as string).replace(
    '/',
    '',
  ) as unknown as SupportedThemes;

  if (supportedThemes.includes(theme)) {
    scopeColors = await require(`./${theme}`);
  } else {
    const themeColors = await fetchThemeColors();
    scopeColors = fetchScopeColors(themeColors);
  }

  await applyScopeColors(scopeColors);
};

export { fetchScopeColors, fetchThemeColors, updateScopeColors, applyScopeColors };
