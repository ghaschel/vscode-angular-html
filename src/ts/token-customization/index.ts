import * as tokens from '../resources/tokens.json';
import { getSettingsJSON, setSettingsJSON } from '../settings';
import { updateScopeColors } from '../themes';

import * as vscode from 'vscode';
import { localize } from 'vscode-nls-i18n';

import type { SettingsDictionary } from '../interfaces/settings-dictionary';
import type { TextMateRule } from '../interfaces/textmate-rules';
import type { TokenRule } from '../interfaces/tokens-rules';

const getTextMateRulesWithoutEmptyOnes = (
  currentRules: TextMateRule[],
  toBeRemoved: Partial<TokenRule>[],
): TextMateRule[] => {
  const scopesToBeRemoved = toBeRemoved.map(rule => rule.scope);

  return currentRules.filter(rule => !scopesToBeRemoved.includes(rule.scope));
};

const removeLegacyColorCustomizations = async (): Promise<SettingsDictionary> => {
  const settings = await getSettingsJSON();

  settings['vscode-angular-html.angularAndAngularMaterialElementTags'] = '';
  settings['vscode-angular-html.angularAnimationTriggerPrefix'] = '';
  settings['vscode-angular-html.angularAnimationTriggerVariableName'] = '';
  settings['vscode-angular-html.angularBindingAttributeDelimiter'] = '';
  settings['vscode-angular-html.angularEventHandlerName'] = '';
  settings['vscode-angular-html.angularExpression'] = '';
  settings['vscode-angular-html.angularExpressionOperatorsAndNavigatorsColor'] = '';
  settings['vscode-angular-html.angularOneWayBindingAnimationTriggerDecorator'] = '';
  settings['vscode-angular-html.angularOneWayBindingFirstLevelDepth'] = '';
  settings['vscode-angular-html.angularOneWayBindingSecondLevelDepth'] = '';
  settings['vscode-angular-html.angularOneWayBindingThirdLevelDepth'] = '';
  settings['vscode-angular-html.angularPrefixedAttributesLetPrefix'] = '';
  settings['vscode-angular-html.angularPrefixedAttributesRefPrefix'] = '';
  settings['vscode-angular-html.angularPrefixedAttributesRxjsSuffix'] = '';
  settings['vscode-angular-html.angularPrefixedAttributesVariableName'] = '';
  settings['vscode-angular-html.angularSyntaxSugarAttributesName'] = '';
  settings['vscode-angular-html.angularSyntaxSugarAttributesPrefix'] = '';
  settings['vscode-angular-html.angularTemplateVariableName'] = '';
  settings['vscode-angular-html.angularTemplateVariablePrefix'] = '';
  settings['vscode-angular-html.dtdDoctypeElement'] = '';
  settings['vscode-angular-html.dtdDoctypeExclamation'] = '';
  settings['vscode-angular-html.dtdDoctypeQualifier'] = '';
  settings['vscode-angular-html.dtdDoctypeQuantifier'] = '';
  settings['vscode-angular-html.htmlAttributeValueSeparator'] = '';
  settings['vscode-angular-html.htmlCustomTags'] = '';
  settings['vscode-angular-html.htmlDoctypeAttributes'] = '';
  settings['vscode-angular-html.htmlDoctypeElement'] = '';
  settings['vscode-angular-html.htmlDoctypeExclamation'] = '';
  settings['vscode-angular-html.htmlEntitiesAmpersand'] = '';
  settings['vscode-angular-html.htmlEntitiesSemicolon'] = '';
  settings['vscode-angular-html.htmlEventsAttributes'] = '';
  settings['vscode-angular-html.htmlGenericAttributesFollowedByParameter'] = '';
  settings['vscode-angular-html.htmlScriptAttributesLanguageIdentifier'] = '';
  settings['vscode-angular-html.htmlStyleAttributesLanguageIdentifier'] = '';
  settings['vscode-angular-html.htmlTags'] = '';
  settings['vscode-angular-html.primeNgElementTags'] = '';
  settings['vscode-angular-html.svgDAttributePathCommands'] = '';
  settings['vscode-angular-html.svgTags'] = '';
  settings['vscode-angular-html.xmlAttributeNamespaceDivider'] = '';
  settings['vscode-angular-html.xmlAttributeNamespaceSuffix'] = '';
  settings['vscode-angular-html.xmlStylesheetAttributesLanguageIdentifier'] = '';
  settings['vscode-angular-html.xmlTagNamespaceDivider'] = '';
  settings['vscode-angular-html.xmlTagNamespaceSuffix'] = '';

  return settings;
};

const getOpenTabs = (): string[] => {
  const labelList = vscode.window.tabGroups.all.map(tabGroup => tabGroup.tabs).map(tabs => tabs.map(tab => tab.label));

  return labelList.flat();
};

const checkOpenTabs = (openTabs: string[], fromSettingsChange = false): boolean => {
  const labelsList = fromSettingsChange ? ['settings.json'] : ['Settings', 'settings.json'];

  return openTabs.some(openTab => labelsList.includes(openTab));
};

const displayTabsMessage = (): void => {
  vscode.window.showErrorMessage(
    localize(
      'ext.messages.settingsNotice',
      'Please, close any open settings.json or Settings UI page before proceeding.',
    ),
  );
};

const disableTokenCustomization = async (fromSettingsChange = false): Promise<void> => {
  const openTabs = getOpenTabs();

  if (checkOpenTabs(openTabs, fromSettingsChange)) {
    displayTabsMessage();

    return;
  }

  const settings = await removeLegacyColorCustomizations();
  const activeCustomizations = settings['editor.tokenColorCustomizations']?.textMateRules ?? [];
  const currentRules = getTextMateRulesWithoutEmptyOnes(activeCustomizations, tokens.textMateRules);

  settings['editor.tokenColorCustomizations'] = { textMateRules: [...currentRules] };
  settings['vscode-angular-html.colorCustomizations'] = false;

  console.log(settings);

  await setSettingsJSON(settings);
};

const getActiveRulesFromSettings = (configs: vscode.WorkspaceConfiguration): TextMateRule[] => {
  const rules: TextMateRule[] = [];

  Object.keys(configs)
    .filter(key => !['has', 'get', 'update', 'inspect', 'colorCustomizations'].includes(key))
    .forEach(key => {
      if (configs[key] !== '') {
        const foundRules = tokens.textMateRules.filter(rule => rule.configRule === `vscode-angular-html.${key}`);

        foundRules.forEach(rule => {
          rules.push({ scope: rule.scope, settings: { foreground: configs[key] } });
        });
      }
    });

  return rules;
};

const updateTokenCustomization = async (fromSettingsChange = false): Promise<void> => {
  const openTabs = getOpenTabs();

  if (checkOpenTabs(openTabs, fromSettingsChange)) {
    displayTabsMessage();

    return;
  }

  const config = vscode.workspace.getConfiguration();
  let currentRules: TextMateRule[] = [];

  const textMateRulesToBeAdded: TextMateRule[] = getActiveRulesFromSettings(
    config.get('vscode-angular-html') as vscode.WorkspaceConfiguration,
  );

  const tokenColorCustomizations = config.get<{
    textMateRules?: TextMateRule[];
  }>('editor.tokenColorCustomizations');

  if ((tokenColorCustomizations?.textMateRules?.length as number) > -1) {
    const activeRules = tokenColorCustomizations!.textMateRules as TextMateRule[];
    currentRules = getTextMateRulesWithoutEmptyOnes(activeRules, tokens.textMateRules);
  }

  await config.update(
    'editor.tokenColorCustomizations',
    { textMateRules: [...currentRules, ...textMateRulesToBeAdded] },
    vscode.ConfigurationTarget.Global,
  );
};

const enableColorCustomization = async (): Promise<void> => {
  await vscode.workspace.getConfiguration('vscode-angular-html').update('colorCustomizations', true, true);
};

const addLegacyColorCustomizations = async (): Promise<void> => {
  const openTabs = getOpenTabs();

  if (checkOpenTabs(openTabs)) {
    displayTabsMessage();

    return;
  }

  await updateScopeColors();
  await updateTokenCustomization();
};

export {
  updateTokenCustomization,
  addLegacyColorCustomizations,
  disableTokenCustomization,
  enableColorCustomization,
  removeLegacyColorCustomizations,
  getTextMateRulesWithoutEmptyOnes,
};
