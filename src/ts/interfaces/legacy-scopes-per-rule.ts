/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export enum LegacyScopes {
  angularExpression = 'string.regexp',
  dtdDoctypeQuantifier = 'string.regexp',
  angularAnimationTriggerPrefix = 'string.regexp',
  angularBindingAttributeDelimiter = 'string.regexp',
  angularPrefixedAttributesRefPrefix = 'string.regexp',
  angularSyntaxSugarAttributesPrefix = 'string.regexp',
  angularTemplateVariablePrefix = 'string.regexp',
  xmlTagNamespaceDivider = 'string.regexp',
  xmlAttributeNamespaceDivider = 'string.regexp',
  controlFlowPrefix = 'string.regexp',

  svgDAttributePathCommands = 'keyword.operator.entity.html',
  angularOneWayBindingSecondLevelDepth = 'keyword.operator.entity.html',
  xmlTagNamespaceSuffix = 'keyword.operator.entity.html',
  xmlAttributeNamespaceSuffix = 'keyword.operator.entity.html',

  htmlDoctypeExclamation = 'keyword.operator.punctuation',
  dtdDoctypeExclamation = 'keyword.operator.punctuation',
  angularExpressionOperatorsAndNavigatorsColor = 'keyword.operator.punctuation',
  htmlEntitiesAmpersand = 'keyword.operator.punctuation',
  htmlEntitiesSemicolon = 'keyword.operator.punctuation',

  htmlDoctypeAttributes = 'support.type.object.html-attribute',
  htmlGenericAttributesFollowedByParameter = 'support.type.object.html-attribute',
  angularPrefixedAttributesVariableName = 'support.type.object.html-attribute',
  htmlEventsAttributes = 'support.type.object.html-attribute',
  ariaAttributeSuffix = 'support.type.object.html-attribute',
  dataAttributeSuffix = 'support.type.object.html-attribute',

  htmlDoctypeElement = 'constant.character.entity.html',
  dtdDoctypeElement = 'constant.character.entity.html',
  htmlAttributeValueSeparator = 'constant.character.entity.html',
  angularOneWayBindingAnimationTriggerDecorator = 'constant.character.entity.html',
  angularPrefixedAttributesRxjsSuffix = 'constant.character.entity.html',
  angularAndAngularMaterialElementTags = 'constant.character.entity.html',
  angularOneWayBindingThirdLevelDepth = 'constant.character.entity.html',
  primeNgElementTags = 'constant.character.entity.html',
  ngBootstrapElementTags = 'constant.character.entity.html',
  kendoUiElementTags = 'constant.character.entity.html',

  dtdDoctypeQualifier = 'entity.name.tag.other.html',
  htmlTags = 'entity.name.tag.other.html',
  htmlCustomTags = 'entity.name.tag.other.html',
  svgTags = 'entity.name.tag.other.html',

  htmlScriptAttributesLanguageIdentifier = 'constant.numeric.angular-directive',
  htmlStyleAttributesLanguageIdentifier = 'constant.numeric.angular-directive',
  htmlLinkAttributesMimeType = 'constant.numeric.angular-directive',
  angularAnimationTriggerVariableName = 'constant.numeric.angular-directive',
  angularEventHandlerName = 'constant.numeric.angular-directive',
  angularOneWayBindingFirstLevelDepth = 'constant.numeric.angular-directive',
  angularSyntaxSugarAttributesName = 'constant.numeric.angular-directive',
  angularTemplateVariableName = 'constant.numeric.angular-directive',
  xmlStylesheetAttributesLanguageIdentifier = 'constant.numeric.angular-directive',
  dataAttributePrefix = 'constant.numeric.angular-directive',
  controlFlowKeyword = 'constant.numeric.angular-directive',

  angularPrefixedAttributesLetPrefix = 'keyword.operator.expression.let.js',
  ariaAttributePrefix = 'keyword.operator.expression.let.js',
}

export interface Scopes {
  'string.regexp': string;
  'keyword.operator.entity.html': string;
  'keyword.operator.punctuation': string;
  'support.type.object.html-attribute': string;
  'constant.character.entity.html': string;
  'entity.name.tag.other.html': string;
  'constant.numeric.angular-directive': string;
  'keyword.operator.expression.let.js': string;
}

export interface GeneratedTheme {
  scope: string | string[];
  settings: { foreground: string; fontStyle: string };
}
