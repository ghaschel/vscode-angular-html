export interface LocaleKeys {
  settings: {
    general: {
      leaveEmpty: string;
    };
    colorCustomizations: {
      description: string;
    };
    html: {
      htmlDoctypeAttributes: string;
      htmlDoctypeExclamation: string;
      htmlDoctypeElement: string;
      htmlEntitiesAmperstand: string;
      htmlEntitiesSemicolon: string;
      htmlGenericAttributesFollowedByParameter: string;
      htmlEventsAttributes: string;
      htmlAttributeValueSeparator: string;
      htmlStyleAttributesLanguageIdentifier: string;
      htmlScriptAttributesLanguageIdentifier: string;
      htmlTags: string;
      htmlCustomTags: string;
      seeHtmlEvents: string;
    };
    angular: {
      angularExpression: string;
      angularAndAngularMaterialElementTags: string;
      angularAnimationTriggerPrefix: string;
      angularAnimationTriggerVariableName: string;
      angularBindingAttributeDelimiter: string;
      angularEventHandlerName: string;
      angularOneWayBindingAnimationTriggerDecorator: string;
      angularOneWayBindingFirstLevelDepth: string;
      angularOneWayBindingSecondLevelDepth: string;
      angularOneWayBindingThirdLevelDepth: string;
      angularPrefixedAttributesLetPrefix: string;
      angularPrefixedAttributesRefPrefix: string;
      angularPrefixedAttributesVariableName: string;
      angularPrefixedAttributesRxjsSuffix: string;
      angularSyntaxSugarAttributesPrefix: string;
      angularSyntaxSugarAttributesName: string;
      angularTemplateVariablePrefix: string;
      angularTemplateVariableName: string;
      angularExpressionOperatorsAndNavigatorsColor: string;
      seeAngularTags: string;
    };
    svg: {
      svgTags: string;
      svgDAttributePathCommands: string;
    };
    xml: {
      xmlTagNamespaceDivider: string;
      xmlTagNamespaceSuffix: string;
      xmlAttributeNamespaceDivider: string;
      xmlAttributeNamespaceSuffix: string;
      xmlStylesheetAttributesLanguageIdentifier: string;
    };
    dtd: {
      dtdDoctypeExclamation: string;
      dtdDoctypeElement: string;
      dtdDoctypeQualifier: string;
      dtdDoctypeQuantifier: string;
    };
  };
  command: {
    updateTokenCustomization: {
      title: string;
    };
    disableTokenCustomization: {
      title: string;
    };
    addLegacyColorCustomizations: {
      title: string;
    };
  };
  messages: {
    updateNotice: string;
    enableLegacyColors: string;
    goToSettingsPage: string;
  };
}
