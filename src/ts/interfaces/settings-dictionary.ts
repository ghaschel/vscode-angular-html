import type { TextMateRule } from './textmate-rules';

export interface SettingsDictionary {
  'editor.tabSize'?: number;
  'editor.tokenColorCustomizations'?: {
    textMateRules?: TextMateRule[];
  };
  'vscode-angular-html.colorCustomizations'?: boolean;
  'vscode-angular-html.angularExpression'?: string;
  'vscode-angular-html.htmlDoctypeExclamation'?: string;
  'vscode-angular-html.htmlDoctypeElement'?: string;
  'vscode-angular-html.htmlDoctypeAttributes'?: string;
  'vscode-angular-html.dtdDoctypeExclamation'?: string;
  'vscode-angular-html.dtdDoctypeElement'?: string;
  'vscode-angular-html.dtdDoctypeQuantifier'?: string;
  'vscode-angular-html.dtdDoctypeQualifier'?: string;
  'vscode-angular-html.htmlEntitiesAmpersand'?: string;
  'vscode-angular-html.htmlEntitiesSemicolon'?: string;
  'vscode-angular-html.htmlGenericAttributesFollowedByParameter'?: string;
  'vscode-angular-html.htmlEventsAttributes'?: string;
  'vscode-angular-html.htmlAttributeValueSeparator'?: string;
  'vscode-angular-html.htmlTags'?: string;
  'vscode-angular-html.htmlCustomTags'?: string;
  'vscode-angular-html.angularAndAngularMaterialElementTags'?: string;
  'vscode-angular-html.htmlScriptAttributesLanguageIdentifier'?: string;
  'vscode-angular-html.htmlStyleAttributesLanguageIdentifier'?: string;
  'vscode-angular-html.htmlLinkAttributesMimeType'?: string;
  'vscode-angular-html.ariaAttributePrefix'?: string;
  'vscode-angular-html.ariaAttributeSuffix'?: string;
  'vscode-angular-html.dataAttributePrefix'?: string;
  'vscode-angular-html.dataAttributeSuffix'?: string;
  'vscode-angular-html.primeNgElementTags'?: string;
  'vscode-angular-html.svgTags'?: string;
  'vscode-angular-html.svgDAttributePathCommands'?: string;
  'vscode-angular-html.angularAnimationTriggerPrefix'?: string;
  'vscode-angular-html.angularAnimationTriggerVariableName'?: string;
  'vscode-angular-html.angularEventHandlerName'?: string;
  'vscode-angular-html.angularBindingAttributeDelimiter'?: string;
  'vscode-angular-html.angularOneWayBindingAnimationTriggerDecorator'?: string;
  'vscode-angular-html.angularOneWayBindingFirstLevelDepth'?: string;
  'vscode-angular-html.angularOneWayBindingSecondLevelDepth'?: string;
  'vscode-angular-html.angularOneWayBindingThirdLevelDepth'?: string;
  'vscode-angular-html.angularPrefixedAttributesLetPrefix'?: string;
  'vscode-angular-html.angularPrefixedAttributesRefPrefix'?: string;
  'vscode-angular-html.angularPrefixedAttributesVariableName'?: string;
  'vscode-angular-html.angularPrefixedAttributesRxjsSuffix'?: string;
  'vscode-angular-html.angularSyntaxSugarAttributesPrefix'?: string;
  'vscode-angular-html.angularSyntaxSugarAttributesName'?: string;
  'vscode-angular-html.angularTemplateVariablePrefix'?: string;
  'vscode-angular-html.angularTemplateVariableName'?: string;
  'vscode-angular-html.angularExpressionOperatorsAndNavigatorsColor'?: string;
  'vscode-angular-html.xmlStylesheetAttributesLanguageIdentifier'?: string;
  'vscode-angular-html.xmlTagNamespaceDivider'?: string;
  'vscode-angular-html.xmlTagNamespaceSuffix'?: string;
  'vscode-angular-html.xmlAttributeNamespaceDivider'?: string;
  'vscode-angular-html.xmlAttributeNamespaceSuffix'?: string;
}
