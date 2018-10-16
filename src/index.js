function getJSON(path) {
	return JSON.parse(fs.readFileSync(path));
}

const fs = require('fs');
const beautify = require('json-beautify');
const saveFile = require('save-file');

const angularDirectives = getJSON('./json/repository/angular-directives.json');
const angularInterpolations = getJSON('./json/repository/angular-interpolations.json');
const entities = getJSON('./json/repository/entities.json');
const stringDoubleQuoted = getJSON('./json/repository/string-double-quoted.json');
const stringSingleQuoted = getJSON('./json/repository/string-single-quoted.json');
const tagGenericAttribute = getJSON('./json/repository/tag-generic-attribute.json');
const tagIdAttribute = getJSON('./json/repository/tag-id-attribute.json');
const tagStuff = getJSON('./json/repository/tag-stuff.json');
const unquotedAttribute = getJSON('./json/repository/unquoted-attribute.json');

const pAngularInterpolations = getJSON('./json/patterns/angular.iterpolations.json');
const pCommentBlockHtml = getJSON('./json/patterns/comment.block.html.json');
const pEntities = getJSON('./json/patterns/entities.json');
const pInvalidIllegalBadAngleBracket = getJSON('./json/patterns/invalid.illegal.bad-angle-bracket.json');
const pInvalidIllegalIncomplete = getJSON('./json/patterns/invalid.illegal.incomplete.json');
const pMetaTagAnyHtml = getJSON('./json/patterns/meta.tag.any.html.json');
const pMetaTagAngularHtmlContentAnyHtml = getJSON('./json/patterns/meta.tag.angular-html-content.any.html.json');
const pMetaTagAngularHtmlAnyHtml = getJSON('./json/patterns/meta.tag.angular-html.any.html.json');
const pMetaTagBlockAnyHtml1 = getJSON('./json/patterns/meta.tag.block.any.html-1.json');
const pMetaTagBlockAnyHtml2 = getJSON('./json/patterns/meta.tag.block.any.html-2.json');
const pMetaTagInlineAnyHtml = getJSON('./json/patterns/meta.tag.inline.any.html.json');
const pMetaTagOtherHtml = getJSON('./json/patterns/meta.tag.other.html.json');
const pMetaTagPreprocessorXmlHtml = getJSON('./json/patterns/meta.tag.preprocessor.xml.html.json');
const pMetaTagSgmlHtml = getJSON('./json/patterns/meta.tag.sgml.html.json');
const pMetaTagStructureAnyHtml = getJSON('./json/patterns/meta.tag.structure.any.html.json');

const base = {
	repository: {
		"entities": entities,
		"unquoted-attribute": unquotedAttribute,
		"string-single-quoted": stringSingleQuoted,
		"string-double-quoted": stringDoubleQuoted,
		"angular-interpolations": angularInterpolations,
		"angular-directives": angularDirectives,
		"tag-generic-attribute": tagGenericAttribute,
		"tag-id-attribute": tagIdAttribute,
		"tag-stuff": tagStuff,
	},
	patterns: [
		pAngularInterpolations,
		pMetaTagAnyHtml,
		pMetaTagPreprocessorXmlHtml,
		pCommentBlockHtml,
		pMetaTagSgmlHtml,
		pMetaTagBlockAnyHtml1,
		pMetaTagAngularHtmlAnyHtml,
		pMetaTagAngularHtmlContentAnyHtml,
		pMetaTagStructureAnyHtml,
		pMetaTagBlockAnyHtml2,
		pMetaTagInlineAnyHtml,
		pMetaTagOtherHtml,
		pEntities,
		pInvalidIllegalIncomplete,
		pInvalidIllegalBadAngleBracket
	],
	name: "angular-html",
	scopeName: "text.html.angular-html"
}

const json = beautify(base, null, 2, 80);

saveFile(json, '../syntaxes/angular-html.tmLanguage.json', (err, data) => {
	if (err) throw err;
});