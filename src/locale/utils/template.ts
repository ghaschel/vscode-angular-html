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
    'ext.settings.html.htmlDoctypeAttributes': `${json.settings.html.matchesDoctypeAttr}${markdown.settings.html.htmlDoctypeAttributes}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlDoctypeExclamation': `${json.settings.html.matchesDoctypeExclamation}${markdown.settings.html.doctypeExclamation}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlDoctypeElement': `${json.settings.html.matchesDoctypeElement}${markdown.settings.html.htmlDoctypeElement}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlEntitiesAmperstand': `${json.settings.html.matchesEntitiesAmperstand}${markdown.settings.html.htmlEntitiesAmperstand}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlEntitiesSemicolon': `${json.settings.html.matchesEntitiesSemicolon}${markdown.settings.html.htmlEntitiesSemicolon}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.matchesGenericAttributes': `${json.settings.html.matchesGenericAttributes} [${json.settings.html.seeHtmlEvents}](#ADD-LINK).${markdown.settings.html.htmlGenericAttributes}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlEventsAttributes': `${json.settings.html.matchesHtmlEventsAttributes} [${json.settings.html.seeHtmlEvents}](#ADD-LINK).${markdown.settings.html.htmlEventsAttributes}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlAttributeValueSeparator': `${json.settings.html.matchesHtmlAttributeValueSeparator}${markdown.settings.html.htmlAttributeValueSeparator}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlStyleAttributesLanguageIdentifier': `${json.settings.html.matchesHtmlStyleAttributesLanguageIdentifier}${markdown.settings.html.htmlStyleAttributesLanguageIdentifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.html.htmlScriptAttributesLanguageIdentifier': `${json.settings.html.matchesHtmlScriptAttributeLanguageIdentifier}${markdown.settings.html.htmlScriptAttributesLanguageIdentifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularExpression': `${json.settings.angular.matchesAngularExpression}${markdown.settings.angular.angularExpression}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularAndAngularMaterialElementTags': `${json.settings.angular.matchesAngularAndAngularMaterialElementTags} [${json.settings.angular.seeAngularTags}](#ADD-LINK)${markdown.settings.angular.AngularAndAngularMaterialElementTags}${json.settings.general.leaveEmpty}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularAnimationTriggerPrefix': `${json.settings.angular.matchesAngularAnimationTriggerPrefix}${markdown.settings.angular.AngularAnimationTriggerPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularAnimationTriggerVariableName': `${json.settings.angular.matchesAngularAnimationTriggerName}${markdown.settings.angular.AngularAnimationTriggerVariableName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularBindingAttributeDelimiter': `${json.settings.angular.matchesAngularBindingAttributeDelimiter}${markdown.settings.angular.AngularBindingAttributeDelimiter}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularEventHandlerName': `${json.settings.angular.matchesAngularEventHandlerName}${markdown.settings.angular.AngularEventHandlerName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingAnimationTriggerDecorator': `${json.settings.angular.matchesAngularOneWayBindingAnimationTriggerDecorator}${markdown.settings.angular.AngularOneWayBindingAnimationTriggerDecorator}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingFirstLevelDepth': `${json.settings.angular.matchesAngularOneWayBindingFirstLevelDepth}${markdown.settings.angular.AngularOneWayBindingFirstLevelDepth}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingSecondLevelDepth': `${json.settings.angular.matchesAngularOneWayBindingSecondLevelDepth}${markdown.settings.angular.AngularOneWayBindingSecondLevelDepth}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularOneWayBindingThirdLevelDepth': `${json.settings.angular.matchesAngularOneWayBindingThirdLevelDepth}${markdown.settings.angular.AngularOneWayBindingThirdLevelDepth}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesLetPrefix': `${json.settings.angular.matchesAngularPrefixedAttributesLetPrefix}${markdown.settings.angular.AngularPrefixedAttributesLetPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesRefPrefix': `${json.settings.angular.matchesAngularPrefixedAttributesRefPrefix}${markdown.settings.angular.AngularPrefixedAttributesRefPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesVariableName': `${json.settings.angular.matchesAngularPrefixedAttributesVariableName}${markdown.settings.angular.AngularPrefixedAttributesVariableName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularPrefixedAttributesRxjsSuffix': `${json.settings.angular.matchesAngularPrefixedAttributesRxjsSuffix}${markdown.settings.angular.AngularPrefixedAttributesRxjsSuffix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularSyntaxSugarAttributesPrefix': `${json.settings.angular.matchesAngularSyntaxSugarAttributesPrefix}${markdown.settings.angular.AngularSyntaxSugarAttributesPrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularSyntaxSugarAttributesName': `${json.settings.angular.matchesAngularSyntaxSugarAttributesName}${markdown.settings.angular.AngularSyntaxSugarAttributesName}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularTemplateVariablePrefix': `${json.settings.angular.matchesAngularTemplateVariablePrefix}${markdown.settings.angular.AngularTemplateVariablePrefix}${json.settings.general.leaveEmpty}`,
    'ext.settings.angular.angularTemplateVariableName': `${json.settings.angular.matchcesAngularTemplateVariableName}${markdown.settings.angular.AngularTemplateVariableName}${json.settings.general.leaveEmpty}`,
    'ext.settings.svg.svgDAttributePathCommands': `${json.settings.svg.matchesSvgDAttributePathCommands}${markdown.settings.svg.SvgDAttributePathCommands}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlTagNamespaceDivider': `${json.settings.xml.matchesXmlTagNamespaceDivider}${markdown.settings.xml.XmlTagNamespaceDivider}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlTagNamespaceSuffix': `${json.settings.xml.matchesXmlTagNamespaceSuffix}${markdown.settings.xml.XmlTagNamespaceSuffix}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlAttributeNamespaceDivider': `${json.settings.xml.matchesXmlAttributeNamespaceDivider}${markdown.settings.xml.XmlAttributeNamespaceDivider}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlAttributeNamespaceSuffix': `${json.settings.xml.matchesXmlAttributeNamespaceSuffix}${markdown.settings.xml.XmlAttributeNamespaceSuffix}${json.settings.general.leaveEmpty}`,
    'ext.settings.xml.xmlStylesheetAttributesLanguageIdentifier': `${json.settings.xml.matchesXmlStylesheetAttributesLanguageIdentifier}${markdown.settings.xml.XmlStylesheetAttributesLanguageIdentifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeExclamation': `${json.settings.dtd.matchesDtdDoctypeExclamation}${markdown.settings.dtd.DtdDoctypeExclamation}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeElement': `${json.settings.dtd.matchesDtdDoctypeElement}${markdown.settings.dtd.DtdDoctypeElement}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeQualifier': `${json.settings.dtd.matchesDtdDoctypeQualifier}${markdown.settings.dtd.DtdDoctypeQualifier}${json.settings.general.leaveEmpty}`,
    'ext.settings.dtd.dtdDoctypeQuantifier': `${json.settings.dtd.matchesDtdDoctypeQuantifier}${markdown.settings.dtd.DtdDoctypeQuantifier}${json.settings.general.leaveEmpty}`,
    'ext.commands.updateTokenCustomization': `${json.commands.updateTokenCustomization}`,
    'ext.commands.disableTokenCustomization': `${json.commands.disableTokenCustomization}`,
    'ext.commands.addLegacyColorCustomizations': `${json.commands.addLegacyColorCustomizations}`,
    'ext.messages.updateNotice': `${json.messages.updateNotice}`,
    'ext.messages.enableLegacyColors': `${json.messages.enableLegacyColors}`,
    'ext.messages.goToSettingsPage': `${json.messages.goToSettingsPage}`,
  };
};

export { buildJson };
