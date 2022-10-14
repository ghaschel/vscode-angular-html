import * as tokens from '../resources/tokens.json';

import * as vscode from 'vscode';

import type { TextMateRule } from '../interfaces/textmate-rules';
import type { TokenRule } from '../interfaces/tokens-rules';

const getTextMateRulesWithoutEmptyOnes = (
  currentRules: TextMateRule[],
  toBeRemoved: Partial<TokenRule>[],
): TextMateRule[] => {
  const scopesToBeRemoved = toBeRemoved.map(rule => rule.scope);

  return currentRules.filter(rule => !scopesToBeRemoved.includes(rule.scope));
};

const updateConfiguration = async (settings: string, value: string, flag: boolean): Promise<void> =>
  vscode.workspace.getConfiguration('vscode-angular-html').update(settings, value, flag);

const removeLegacyColorCustomizations = async (): Promise<void> => {
  await updateConfiguration('angularExpression', '', true);
  await updateConfiguration('htmlDoctypeExclamation', '', true);
  await updateConfiguration('htmlDoctypeElement', '', true);
  await updateConfiguration('htmlDoctypeAttributes', '', true);
  await updateConfiguration('dtdDoctypeExclamation', '', true);
  await updateConfiguration('dtdDoctypeElement', '', true);
  await updateConfiguration('dtdDoctypeQuantifier', '', true);
  await updateConfiguration('dtdDoctypeQualifier', '', true);
  await updateConfiguration('htmlEntitiesAmpersand', '', true);
  await updateConfiguration('htmlEntitiesSemicolon', '', true);
  await updateConfiguration('htmlGenericAttributesFollowedByParameter', '', true);
  await updateConfiguration('htmlEventsAttributes', '', true);
  await updateConfiguration('htmlAttributeValueSeparator', '', true);
  await updateConfiguration('htmlTags', '', true);
  await updateConfiguration('htmlCustomTags', '', true);
  await updateConfiguration('angularAndAngularMaterialElementTags', '', true);
  await updateConfiguration('htmlScriptAttributesLanguageIdentifier', '', true);
  await updateConfiguration('htmlStyleAttributesLanguageIdentifier', '', true);
  await updateConfiguration('svgTags', '', true);
  await updateConfiguration('svgDAttributePathCommands', '', true);
  await updateConfiguration('angularAnimationTriggerPrefix', '', true);
  await updateConfiguration('angularAnimationTriggerVariableName', '', true);
  await updateConfiguration('angularEventHandlerName', '', true);
  await updateConfiguration('angularBindingAttributeDelimiter', '', true);
  await updateConfiguration('angularOneWayBindingAnimationTriggerDecorator', '', true);
  await updateConfiguration('angularOneWayBindingFirstLevelDepth', '', true);
  await updateConfiguration('angularOneWayBindingSecondLevelDepth', '', true);
  await updateConfiguration('angularOneWayBindingThirdLevelDepth', '', true);
  await updateConfiguration('angularPrefixedAttributesLetPrefix', '', true);
  await updateConfiguration('angularPrefixedAttributesRefPrefix', '', true);
  await updateConfiguration('angularPrefixedAttributesVariableName', '', true);
  await updateConfiguration('angularPrefixedAttributesRxjsSuffix', '', true);
  await updateConfiguration('angularSyntaxSugarAttributesPrefix', '', true);
  await updateConfiguration('angularSyntaxSugarAttributesName', '', true);
  await updateConfiguration('angularTemplateVariablePrefix', '', true);
  await updateConfiguration('angularTemplateVariableName', '', true);
  await updateConfiguration('angularExpressionOperatorsAndNavigatorsColor', '', true);
  await updateConfiguration('xmlStylesheetAttributesLanguageIdentifier', '', true);
  await updateConfiguration('xmlTagNamespaceDivider', '', true);
  await updateConfiguration('xmlTagNamespaceSuffix', '', true);
  await updateConfiguration('xmlAttributeNamespaceDivider', '', true);
  await updateConfiguration('xmlAttributeNamespaceSuffix', '', true);
};

const disableTokenCustomization = async (): Promise<void> => {
  await removeLegacyColorCustomizations();
  const config = vscode.workspace.getConfiguration();

  const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as {
    textMateRules?: TextMateRule[];
  };

  const activeRules = tokenColorCustomizations.textMateRules ?? [];
  const currentRules = getTextMateRulesWithoutEmptyOnes(activeRules, tokens.textMateRules);

  await config.update(
    'editor.tokenColorCustomizations',
    { textMateRules: [...currentRules] },
    vscode.ConfigurationTarget.Global,
  );

  await config.update('vscode-angular-html.colorCustomizations', false, vscode.ConfigurationTarget.Global);
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

const updateTokenCustomization = async (): Promise<void> => {
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

// prettier-ignore
const addLegacyColorCustomizations = async (): Promise<void> => {
  await updateConfiguration('angularExpression', '#D16969', true);
  await updateConfiguration('htmlDoctypeExclamation', '#C586C0', true);
  await updateConfiguration('htmlDoctypeElement', '#D7BA7D', true);
  await updateConfiguration('htmlDoctypeAttributes', '#4EC9B0', true);
  await updateConfiguration('dtdDoctypeExclamation', '#C586C0', true);
  await updateConfiguration('dtdDoctypeElement', '#D7BA7D', true);
  await updateConfiguration('dtdDoctypeQuantifier', '#D16969', true);
  await updateConfiguration('dtdDoctypeQualifier', '#C586C0', true);
  await updateConfiguration('htmlEntitiesAmpersand', '#C586C0', true);
  await updateConfiguration('htmlEntitiesSemicolon', '#C586C0', true);
  await updateConfiguration('htmlGenericAttributesFollowedByParameter', '#4EC9B0', true);
  await updateConfiguration('htmlEventsAttributes', '#4EC9B0', true);
  await updateConfiguration('htmlAttributeValueSeparator', '#D7BA7D', true);
  await updateConfiguration('htmlTags', '#569CD6', true);
  await updateConfiguration('htmlCustomTags', '#569CD6', true);
  await updateConfiguration('angularAndAngularMaterialElementTags', '#D7BA7D', true);
  await updateConfiguration('htmlScriptAttributesLanguageIdentifier', '#DCDCAA', true);
  await updateConfiguration('htmlStyleAttributesLanguageIdentifier', '#DCDCAA', true);
  await updateConfiguration('svgTags', '#569CD6', true);
  await updateConfiguration('svgDAttributePathCommands', '#C586C0', true);
  await updateConfiguration('angularAnimationTriggerPrefix', '#D16969', true);
  await updateConfiguration('angularAnimationTriggerVariableName', '#DCDCAA', true);
  await updateConfiguration('angularEventHandlerName', '#DCDCAA', true);
  await updateConfiguration('angularBindingAttributeDelimiter', '#D16969', true);
  await updateConfiguration('angularOneWayBindingAnimationTriggerDecorator', '#D7BA7D', true);
  await updateConfiguration('angularOneWayBindingFirstLevelDepth', '#DCDCAA', true);
  await updateConfiguration('angularOneWayBindingSecondLevelDepth', '#C586C0', true);
  await updateConfiguration('angularOneWayBindingThirdLevelDepth', '#DCDCAA', true);
  await updateConfiguration('angularPrefixedAttributesLetPrefix', '#569CD6', true);
  await updateConfiguration('angularPrefixedAttributesRefPrefix', '#D16969', true);
  await updateConfiguration('angularPrefixedAttributesVariableName', '#4EC9B0', true);
  await updateConfiguration('angularPrefixedAttributesRxjsSuffix', '#C586C0', true);
  await updateConfiguration('angularSyntaxSugarAttributesPrefix', '#D16969', true);
  await updateConfiguration('angularSyntaxSugarAttributesName', '#DCDCAA', true);
  await updateConfiguration('angularTemplateVariablePrefix', '#D16969', true);
  await updateConfiguration('angularTemplateVariableName', '#DCDCAA', true);
  await updateConfiguration('angularExpressionOperatorsAndNavigatorsColor', '#C586C0', true);
  await updateConfiguration('xmlStylesheetAttributesLanguageIdentifier', '#DCDCAA', true);
  await updateConfiguration('xmlTagNamespaceDivider', '#D16969', true);
  await updateConfiguration('xmlTagNamespaceSuffix', '#C586C0', true);
  await updateConfiguration('xmlAttributeNamespaceDivider', '#D16969', true);
  await updateConfiguration('xmlAttributeNamespaceSuffix', '#C586C0', true);
  await enableColorCustomization();
  await updateTokenCustomization();
};

export {
  updateTokenCustomization,
  addLegacyColorCustomizations,
  disableTokenCustomization,
  updateConfiguration,
  enableColorCustomization,
  removeLegacyColorCustomizations,
};
