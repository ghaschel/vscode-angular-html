export interface LocaleKeys {
  settings: {
    general: {
      leaveEmpty: string;
    };
    colorCustomizations: {
      description: string;
    };
    html: {
      matchesDoctypeAttr: string;
      matchesDoctypeExclamation: string;
      matchesDoctypeElement: string;
      matchesEntitiesAmperstand: string;
      matchesEntitiesSemicolon: string;
      matchesGenericAttributes: string;
      matchesHtmlEventsAttributes: string;
      matchesHtmlAttributeValueSeparator: string;
      matchesHtmlStyleAttributesLanguageIdentifier: string;
      matchesHtmlScriptAttributeLanguageIdentifier: string;
      seeHtmlEvents: string;
    };
    angular: {
      matchesAngularExpression: string;
      matchesAngularAndAngularMaterialElementTags: string;
      matchesAngularAnimationTriggerPrefix: string;
      matchesAngularAnimationTriggerName: string;
      matchesAngularBindingAttributeDelimiter: string;
      matchesAngularEventHandlerName: string;
      matchesAngularOneWayBindingAnimationTriggerDecorator: string;
      matchesAngularOneWayBindingFirstLevelDepth: string;
      matchesAngularOneWayBindingSecondLevelDepth: string;
      matchesAngularOneWayBindingThirdLevelDepth: string;
      matchesAngularPrefixedAttributesLetPrefix: string;
      matchesAngularPrefixedAttributesRefPrefix: string;
      matchesAngularPrefixedAttributesVariableName: string;
      matchesAngularPrefixedAttributesRxjsSuffix: string;
      matchesAngularSyntaxSugarAttributesPrefix: string;
      matchesAngularSyntaxSugarAttributesName: string;
      matchesAngularTemplateVariablePrefix: string;
      matchcesAngularTemplateVariableName: string;
      seeAngularTags: string;
    };
    svg: {
      matchesSvgDAttributePathCommands: string;
    };
    xml: {
      matchesXmlTagNamespaceDivider: string;
      matchesXmlTagNamespaceSuffix: string;
      matchesXmlAttributeNamespaceDivider: string;
      matchesXmlAttributeNamespaceSuffix: string;
      matchesXmlStylesheetAttributesLanguageIdentifier: string;
    };
    dtd: {
      matchesDtdDoctypeExclamation: string;
      matchesDtdDoctypeElement: string;
      matchesDtdDoctypeQualifier: string;
      matchesDtdDoctypeQuantifier: string;
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
