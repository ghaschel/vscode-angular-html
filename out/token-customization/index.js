"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInitialDefaults = exports.updateTokenCustomization = void 0;
const tokens = require("./tokens.json");
const config_helper_1 = require("../config-helper");
const vscode = require("vscode");
const updateTokenCustomization = async () => {
    const areCustomizationsEnabled = vscode.workspace.getConfiguration('vscode-angular-html').get('colorCustomizations');
    if (areCustomizationsEnabled === true) {
        const textMateRules = [];
        const vscodeAngularHtmlConfigs = vscode.workspace.getConfiguration('vscode-angular-html');
        Object.keys(vscodeAngularHtmlConfigs)
            .filter(key => !['has', 'get', 'update', 'inspect', 'colorCustomizations'].includes(key))
            .forEach(key => {
            if (vscodeAngularHtmlConfigs[key] !== '') {
                const foundRules = tokens.textMateRules.filter(rule => rule.configRule === `vscode-angular-html.${key}`);
                foundRules.forEach(rule => {
                    textMateRules.push({ scope: rule.scope, settings: { foreground: vscodeAngularHtmlConfigs[key] } });
                });
            }
        });
        const config = await (0, config_helper_1.getRawConfig)();
        config['editor.tokenColorCustomizations'] = { textMateRules };
        (0, config_helper_1.setRawConfig)(config);
    }
    else {
    }
};
exports.updateTokenCustomization = updateTokenCustomization;
const setInitialDefaults = async () => {
    await vscode.workspace.getConfiguration('vscode-angular-html').update('angularExpression', '#D16969', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlDoctypeExclamation', '#C586C0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlDoctypeElement', '#D7BA7D', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('doctypeAttributes', '#4EC9B0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeExclamation', '#C586C0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeElement', '#D7BA7D', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeQuantifier', '#D16969', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('dtdDoctypeQualifier', '#C586C0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlEntitiesAmperstand', '#C586C0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlEntitiesSemicolon', '#C586C0', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlGenericAttributesFollowedByParameter', '#4EC9B0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlEventsAttributes', '#4EC9B0', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlAttributeValueSeparator', '#D7BA7D', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularAndAngularMaterialElementTags', '#D7BA7D', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlScriptAttributesLanguageIdentifier', '#DCDCAA', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('htmlStyleAttributesLanguageIdentifier', '#DCDCAA', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('SvgDAttributePathCommands', '#C586C0', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularAnimationTriggerPrefix', '#D16969', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularAnimationTriggerVariableName', '#DCDCAA', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularEventHandlerName', '#DCDCAA', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularBindingAttributeDelimiter', '#D16969', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularOneWayBindingAnimationTriggerDecorator', '#D7BA7D', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularOneWayBindingFirstLevelDepth', '#DCDCAA', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularOneWayBindingSecondLevelDepth', '#C586C0', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularOneWayBindingThirdLevelDepth', '#DCDCAA', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularPrefixedAttributesLetPrefix', '#569CD6', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularPrefixedAttributesRefPrefix', '#D16969', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularPrefixedAttributesVariableName', '#4EC9B0', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularPrefixedAttributesRxjsSuffix', '#C586C0', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularSyntaxSugarAttributesPrefix', '#D16969', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularSyntaxSugarAttributesName', '#DCDCAA', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularTemplateVariablePrefix', '#D16969', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('AngularTemplateVariableName', '#DCDCAA', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('XmlStylesheetAttributesLanguageIdentifier', '#DCDCAA', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('XmlTagNamespaceDivider', '#D16969', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('XmlTagNamespaceSuffix', '#C586C0', true);
    // prettier-ignore
    await vscode.workspace.getConfiguration('vscode-angular-html').update('XmlAttributeNamespaceDivider', '#D16969', true);
    await vscode.workspace.getConfiguration('vscode-angular-html').update('XmlAttributeNamespaceSuffix', '#C586C0', true);
};
exports.setInitialDefaults = setInitialDefaults;
//# sourceMappingURL=index.js.map