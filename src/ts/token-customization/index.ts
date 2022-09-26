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

const disableTokenCustomization = async (): Promise<void> => {
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

  const tokenColorCustomizations = config.get('editor.tokenColorCustomizations') as {
    textMateRules?: TextMateRule[];
  };

  if (tokenColorCustomizations.textMateRules!.length > -1) {
    const activeRules = tokenColorCustomizations.textMateRules as TextMateRule[];
    currentRules = getTextMateRulesWithoutEmptyOnes(activeRules, tokens.textMateRules);
  }

  await config.update(
    'editor.tokenColorCustomizations',
    { textMateRules: [...currentRules, ...textMateRulesToBeAdded] },
    vscode.ConfigurationTarget.Global,
  );
};

// prettier-ignore
const addLegacyColorCustomizations = async (): Promise<void> => {
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularExpression', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlDoctypeExclamation', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlDoctypeElement', '#D7BA7D', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlDoctypeAttributes', '#4EC9B0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeExclamation', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeElement', '#D7BA7D', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeQuantifier', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeQualifier', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlEntitiesAmperstand', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlEntitiesSemicolon', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlGenericAttributesFollowedByParameter', '#4EC9B0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlEventsAttributes', '#4EC9B0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlAttributeValueSeparator', '#D7BA7D', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularAndAngularMaterialElementTags', '#D7BA7D', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlScriptAttributesLanguageIdentifier', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlStyleAttributesLanguageIdentifier', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('svgDAttributePathCommands', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularAnimationTriggerPrefix', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularAnimationTriggerVariableName', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularEventHandlerName', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularBindingAttributeDelimiter', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularOneWayBindingAnimationTriggerDecorator', '#D7BA7D', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularOneWayBindingFirstLevelDepth', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularOneWayBindingSecondLevelDepth', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularOneWayBindingThirdLevelDepth', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularPrefixedAttributesLetPrefix', '#569CD6', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularPrefixedAttributesRefPrefix', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularPrefixedAttributesVariableName', '#4EC9B0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularPrefixedAttributesRxjsSuffix', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularSyntaxSugarAttributesPrefix', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularSyntaxSugarAttributesName', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularTemplateVariablePrefix', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('angularTemplateVariableName', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('xmlStylesheetAttributesLanguageIdentifier', '#DCDCAA', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('xmlTagNamespaceDivider', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('xmlTagNamespaceSuffix', '#C586C0', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('xmlAttributeNamespaceDivider', '#D16969', true);
  await vscode.workspace.getConfiguration('vscode-angular-html').update('xmlAttributeNamespaceSuffix', '#C586C0', true);
  await updateTokenCustomization();
};

export { updateTokenCustomization, addLegacyColorCustomizations, disableTokenCustomization };
