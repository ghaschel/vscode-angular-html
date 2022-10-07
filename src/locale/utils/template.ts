/* eslint-disable sort-keys */
import * as markdown from '../assets/markdown.json';

import * as fs from 'fs';

import type { Lang } from '../types/lang';
import type { LocaleKeys } from '../types/locale-keys';
import type { PackageNls } from '../types/package.nls';

const buildJson = (lang: Lang): PackageNls => {
  const path = `./src/locale/languages/${lang}/keys.json`;
  const jsonText = fs.readFileSync(path).toString();
  const json: LocaleKeys = JSON.parse(jsonText);

  return {
    'ext.settings.colorCustomizations.description': `${json.settings.colorCustomizations.description}`,
    'ext.settings.html.htmlDoctypeAttributes': `${json.settings.html.htmlDoctypeAttributes}${markdown.settings.html.htmlDoctypeAttributes}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlDoctypeExclamation': `${json.settings.html.htmlDoctypeExclamation}${markdown.settings.html.htmlDoctypeExclamation}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlDoctypeElement': `${json.settings.html.htmlDoctypeElement}${markdown.settings.html.htmlDoctypeElement}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlEntitiesAmperstand': `${json.settings.html.htmlEntitiesAmperstand}${markdown.settings.html.htmlEntitiesAmperstand}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlEntitiesSemicolon': `${json.settings.html.htmlEntitiesSemicolon}${markdown.settings.html.htmlEntitiesSemicolon}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlGenericAttributesFollowedByParameter': `${json.settings.html.htmlGenericAttributesFollowedByParameter} [${json.settings.html.seeHtmlEvents}](#ADD-LINK).${markdown.settings.html.htmlGenericAttributesFollowedByParameter}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlEventsAttributes': `${json.settings.html.htmlEventsAttributes} [${json.settings.html.seeHtmlEvents}](#ADD-LINK).${markdown.settings.html.htmlEventsAttributes}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlAttributeValueSeparator': `${json.settings.html.htmlAttributeValueSeparator}${markdown.settings.html.htmlAttributeValueSeparator}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlStyleAttributesLanguageIdentifier': `${json.settings.html.htmlStyleAttributesLanguageIdentifier}${markdown.settings.html.htmlStyleAttributesLanguageIdentifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlScriptAttributesLanguageIdentifier': `${json.settings.html.htmlScriptAttributesLanguageIdentifier}${markdown.settings.html.htmlScriptAttributesLanguageIdentifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlTags': `${json.settings.html.htmlTags}${markdown.settings.html.htmlTags}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlCustomTags': `${json.settings.html.htmlCustomTags}${markdown.settings.html.htmlCustomTags}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularExpression': `${json.settings.angular.angularExpression}${markdown.settings.angular.angularExpression}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularAndAngularMaterialElementTags': `${json.settings.angular.angularAndAngularMaterialElementTags} [${json.settings.angular.seeAngularTags}](#ADD-LINK)${markdown.settings.angular.angularAndAngularMaterialElementTags}${json.settings.general.leaveEmpty}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularAnimationTriggerPrefix': `${json.settings.angular.angularAnimationTriggerPrefix}${markdown.settings.angular.angularAnimationTriggerPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularAnimationTriggerVariableName': `${json.settings.angular.angularAnimationTriggerVariableName}${markdown.settings.angular.angularAnimationTriggerVariableName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularBindingAttributeDelimiter': `${json.settings.angular.angularBindingAttributeDelimiter}${markdown.settings.angular.angularBindingAttributeDelimiter}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularEventHandlerName': `${json.settings.angular.angularEventHandlerName}${markdown.settings.angular.angularEventHandlerName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingAnimationTriggerDecorator': `${json.settings.angular.angularOneWayBindingAnimationTriggerDecorator}${markdown.settings.angular.angularOneWayBindingAnimationTriggerDecorator}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingFirstLevelDepth': `${json.settings.angular.angularOneWayBindingFirstLevelDepth}${markdown.settings.angular.angularOneWayBindingFirstLevelDepth}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingSecondLevelDepth': `${json.settings.angular.angularOneWayBindingSecondLevelDepth}${markdown.settings.angular.angularOneWayBindingSecondLevelDepth}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingThirdLevelDepth': `${json.settings.angular.angularOneWayBindingThirdLevelDepth}${markdown.settings.angular.angularOneWayBindingThirdLevelDepth}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesLetPrefix': `${json.settings.angular.angularPrefixedAttributesLetPrefix}${markdown.settings.angular.angularPrefixedAttributesLetPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesRefPrefix': `${json.settings.angular.angularPrefixedAttributesRefPrefix}${markdown.settings.angular.angularPrefixedAttributesRefPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesVariableName': `${json.settings.angular.angularPrefixedAttributesVariableName}${markdown.settings.angular.angularPrefixedAttributesVariableName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesRxjsSuffix': `${json.settings.angular.angularPrefixedAttributesRxjsSuffix}${markdown.settings.angular.angularPrefixedAttributesRxjsSuffix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularSyntaxSugarAttributesPrefix': `${json.settings.angular.angularSyntaxSugarAttributesPrefix}${markdown.settings.angular.angularSyntaxSugarAttributesPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularSyntaxSugarAttributesName': `${json.settings.angular.angularSyntaxSugarAttributesName}${markdown.settings.angular.angularSyntaxSugarAttributesName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularTemplateVariablePrefix': `${json.settings.angular.angularTemplateVariablePrefix}${markdown.settings.angular.angularTemplateVariablePrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularTemplateVariableName': `${json.settings.angular.angularTemplateVariableName}${markdown.settings.angular.angularTemplateVariableName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularExpressionOperatorsAndNavigatorsColor': `${json.settings.angular.angularExpressionOperatorsAndNavigatorsColor}${markdown.settings.angular.angularExpressionOperatorsAndNavigatorsColor}${json.settings.general.leaveEmpty}`,
    'ext.settings.svg.svgTags': `${json.settings.svg.svgTags}${markdown.settings.svg.svgTags}${json.settings.general.leaveEmpty}`,
    'ext.settings.svg.svgDAttributePathCommands': `${json.settings.svg.svgDAttributePathCommands}${markdown.settings.svg.svgDAttributePathCommands}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlTagNamespaceDivider': `${json.settings.xml.xmlTagNamespaceDivider}${markdown.settings.xml.xmlTagNamespaceDivider}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlTagNamespaceSuffix': `${json.settings.xml.xmlTagNamespaceSuffix}${markdown.settings.xml.xmlTagNamespaceSuffix}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlAttributeNamespaceDivider': `${json.settings.xml.xmlAttributeNamespaceDivider}${markdown.settings.xml.xmlAttributeNamespaceDivider}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlAttributeNamespaceSuffix': `${json.settings.xml.xmlAttributeNamespaceSuffix}${markdown.settings.xml.xmlAttributeNamespaceSuffix}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlStylesheetAttributesLanguageIdentifier': `${json.settings.xml.xmlStylesheetAttributesLanguageIdentifier}${markdown.settings.xml.xmlStylesheetAttributesLanguageIdentifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeExclamation': `${json.settings.dtd.dtdDoctypeExclamation}${markdown.settings.dtd.dtdDoctypeExclamation}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeElement': `${json.settings.dtd.dtdDoctypeElement}${markdown.settings.dtd.dtdDoctypeElement}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeQualifier': `${json.settings.dtd.dtdDoctypeQualifier}${markdown.settings.dtd.dtdDoctypeQualifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeQuantifier': `${json.settings.dtd.dtdDoctypeQuantifier}${markdown.settings.dtd.dtdDoctypeQuantifier}${json.settings.general.leaveEmpty}`,
    'ext.command.updateTokenCustomization.title': `${json.command.updateTokenCustomization.title}`,
    'ext.command.disableTokenCustomization.title': `${json.command.disableTokenCustomization.title}`,
    'ext.command.addLegacyColorCustomizations.title': `${json.command.addLegacyColorCustomizations.title}`,
    'ext.messages.updateNotice': `${json.messages.updateNotice}`,
    'ext.messages.enableLegacyColors': `${json.messages.enableLegacyColors}`,
    'ext.messages.goToSettingsPage': `${json.messages.goToSettingsPage}`,
  };
};

export { buildJson };
