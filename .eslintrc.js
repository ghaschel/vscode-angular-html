var baseTsRules = {
  'array-callback-return': [
    'error',
    {
      allowImplicit: false,
      checkForEach: true,
    },
  ],
  'linebreak-style': ['error', 'windows'],
  'no-constant-binary-expression': 'error',
  'no-constructor-return': 'error',
  'no-duplicate-imports': 'off',
  'import/no-duplicates': ['error'],
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-unreachable-loop': 'error',
  'no-unused-private-class-members': 'error',
  'no-use-before-define': 'off',
  'accessor-pairs': ['error', { getWithoutSet: true }],
  'arrow-body-style': ['error', 'as-needed'],
  'block-scoped-var': 'error',
  camelcase: [
    'error',
    {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: true,
    },
  ],
  'capitalized-comments': [
    'error',
    'always',
    {
      ignorePattern: 'pragma|ignore|prettier-ignore',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
  ],
  'consistent-return': ['error'],
  'consistent-this': ['error', 'that'],
  curly: ['error'],
  'default-case-last': ['error'],
  'default-param-last': 'off',
  eqeqeq: ['error', 'always'],
  'func-name-matching': ['error', 'always'],
  'func-names': ['error', 'always'],
  'func-style': ['error', 'expression', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': ['error', 'setBeforeGet'],
  'guard-for-in': 'error',
  'init-declarations': 'off',
  'multiline-comment-style': ['error', 'starred-block'],
  'no-alert': 'error',
  'no-array-constructor': 'off',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-confusing-arrow': 'error',
  'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
  'no-continue': 'error',
  'no-else-return': ['error', { allowElseIf: true }],
  'no-empty': 'error',
  'no-empty-function': 'off',
  'no-eq-null': 'error',
  'no-extend-native': 'error',
  'no-extra-semi': 'off',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': ['error', { disallowTemplateShorthand: false }],
  'no-implied-eval': 'off',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'off',
  'no-magic-numbers': 'off',
  'no-mixed-operators': [
    'error',
    {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    },
  ],
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-new': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': ['error', { props: false }],
  'no-plusplus': 'off',
  'no-proto': 'error',
  'no-restricted-globals': ['error', 'event', 'fdescribe'],
  'no-return-assign': 'error',
  'no-return-await': 'off',
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': 'off',
  'no-shadow-restricted-names': 'error',
  'no-throw-literal': 'off',
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'off',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
  'no-useless-concat': 'error',
  'no-useless-constructor': 'off',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'object-shorthand': ['error', 'always'],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'never'],
  'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'as-needed'],
  radix: 'error',
  'require-await': 'off',
  'require-unicode-regexp': 'error',
  'sort-imports': [
    'error',
    {
      ignoreCase: false,
      ignoreDeclarationSort: true, // don"t want to sort import lines, use eslint-plugin-import instead
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: true,
    },
  ],
  'prefer-destructuring': [
    'error',
    {
      array: true,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'no-eval': 'error',
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2, allowLineSeparatedGroups: true }],
  'vars-on-top': 'error',
  yoda: ['error', 'never', { exceptRange: true }],
  'array-bracket-newline': 'off',
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': 'off',
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': ['error', { before: true, after: true }],
  'block-spacing': ['error', 'always'],
  'brace-style': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': 'off',
  'function-call-argument-newline': 'off',
  'function-paren-newline': 'off',
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        markers: ['/'],
        exceptions: ['-', '+'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    },
  ],
  'implicit-arrow-linebreak': 'off',
  indent: 'off',
  'key-spacing': [
    'error',
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    },
  ],
  'keyword-spacing': 'off',
  'lines-around-comment': [
    'error',
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      afterLineComment: false,
      allowBlockEnd: false,
      allowClassStart: true,
      allowClassEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
      beforeLineComment: true,
      allowBlockStart: true,
      ignorePattern: 'pragma|ignore|prettier-ignore',
    },
  ],
  'lines-between-class-members': 'off',
  'max-len': [
    'error',
    {
      code: 120,
      ignoreUrls: true,
      tabWidth: 2,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: false,
    },
  ],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-parens': ['error', 'always'],
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  'no-extra-parens': 'off',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': ['error', { max: 2 }],
  'no-tabs': ['error', { allowIndentationTabs: true }],
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-newline': 'off',
  'object-curly-spacing': 'off',
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'operator-linebreak': 'off',
  'padded-blocks': ['error', 'never'],
  quotes: 'off',
  'rest-spread-spacing': ['error', 'never'],
  semi: 'off',
  'semi-spacing': ['error', { before: false, after: false }],
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'off',
  'space-unary-ops': [
    2,
    {
      words: true,
      nonwords: false,
      overrides: {
        new: false,
        '++': false,
      },
    },
  ],
  'switch-colon-spacing': ['error', { after: true, before: false }],
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'wrap-regex': 'off',
  'yield-star-spacing': ['error', 'before'],
  'dot-notation': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: true,
      classes: true,
      variables: true,
      enums: true,
      typedefs: true,
      ignoreTypeReferences: true,
    },
  ],
  '@typescript-eslint/default-param-last': ['error'],
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/no-array-constructor': ['error'],
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [
        'arrowFunctions',
        'private-constructors',
        'protected-constructors',
        'decoratedFunctions',
        'overrideMethods',
      ],
    },
  ],
  '@typescript-eslint/no-extra-semi': ['error'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-invalid-this': ['error'],
  '@typescript-eslint/no-loop-func': ['error'],
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/no-throw-literal': ['error'],
  '@typescript-eslint/no-unused-expressions': ['error'],
  '@typescript-eslint/no-useless-constructor': ['error'],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
  '@typescript-eslint/lines-between-class-members': ['error', 'always'],
  '@typescript-eslint/no-extra-parens': [
    'error',
    'all',
    {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: true,
      enforceForArrowConditionals: true,
      enforceForSequenceExpressions: true,
      enforceForNewInMemberExpressions: false,
      enforceForFunctionPrototypeMethods: false,
    },
  ],
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
  '@typescript-eslint/semi': ['error', 'always'],
  '@typescript-eslint/space-before-blocks': ['error', 'always'],
  '@typescript-eslint/space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowString: true,
      allowNumber: true,
      allowNullableObject: true,
      allowNullableBoolean: false,
      allowNullableString: true,
      allowNullableNumber: false,
      allowAny: false,
    },
  ],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/ban-tslint-comment': 'warn',
  '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
  '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      allowDirectConstAssertionInArrowFunctions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': ['error'],
  '@typescript-eslint/explicit-module-boundary-types': ['error'],
  '@typescript-eslint/member-delimiter-style': ['error'],
  '@typescript-eslint/member-ordering': ['error'],
  '@typescript-eslint/method-signature-style': ['error'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    },
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      filter: {
        regex: '[.]',
        match: false,
      },
    },
    {
      selector: 'enumMember',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'objectLiteralProperty',
      format: null,
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
  '@typescript-eslint/no-confusing-void-expression': ['error'],
  '@typescript-eslint/no-duplicate-enum-values': ['error'],
  '@typescript-eslint/no-dynamic-delete': ['error'],
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: false,
    },
  ],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  '@typescript-eslint/no-invalid-void-type': ['error'],
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    {
      checkNever: false,
    },
  ],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['off'],
  '@typescript-eslint/no-redundant-type-constituents': ['error'],
  '@typescript-eslint/no-unnecessary-condition': ['error'],
  '@typescript-eslint/prefer-enum-initializers': ['error'],
  '@typescript-eslint/prefer-for-of': ['error'],
  '@typescript-eslint/prefer-function-type': ['error'],
  '@typescript-eslint/prefer-literal-enum-member': ['error'],
  '@typescript-eslint/prefer-includes': ['error'],
  '@typescript-eslint/prefer-nullish-coalescing': ['error'],
  '@typescript-eslint/prefer-optional-chain': ['error'],
  '@typescript-eslint/prefer-readonly': ['error'],
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-return-this-type': ['error'],
  '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
  '@typescript-eslint/promise-function-async': ['error'],
  '@typescript-eslint/switch-exhaustiveness-check': ['error'],
  '@typescript-eslint/type-annotation-spacing': ['error'],
  '@typescript-eslint/brace-style': ['error', '1tbs'],
  '@typescript-eslint/dot-notation': ['error'],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '_',
    },
  ],
  '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
  ],
  '@typescript-eslint/array-type': 'error',
  'import/no-unresolved': ['error', { ignore: ['vscode'] }],

  'import/order': [
    'error',
    {
      groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
      'newlines-between': 'always',
      alphabetize: {
        /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
        order: 'asc',
        /* ignore case. Options: [true, false] */
        caseInsensitive: true,
      },
    },
  ],
};

var tsRules = {
  ...baseTsRules,
  'max-classes-per-file': ['error', { ignoreExpressions: true, max: 1 }],
  '@typescript-eslint/no-require-imports': ['error'],
};

module.exports = {
  root: true,
  ignorePatterns: ['*.js'],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      rules: tsRules,
    },
  ],
};
