/* eslint-disable @typescript-eslint/naming-convention */
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
      seeAngularTags: string;
    };
    svg: {
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
  commands: {
    updateTokenCustomization: string;
    disableTokenCustomization: string;
    addLegacyColorCustomizations: string;
  };
  messages: {
    updateNotice: string;
    enableLegacyColors: string;
    goToSettingsPage: string;
  };
}
