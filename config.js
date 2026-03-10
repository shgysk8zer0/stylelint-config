export const IGNORE_FILES = [
	'/img/',
	'/js/',
	'/fonts/',
	'/_site/',
	'/node_modules/',
	'**/*.min*',
	'**/*.map',
];

export const PLUGINS = [];

export const RULES = {
	'declaration-no-important': true,
	'max-nesting-depth': 3,
	'block-no-empty': true,
	'declaration-block-no-duplicate-properties': [
		true,
		{ ignore: ['consecutive-duplicates-with-different-values'] }
	],
	'length-zero-no-unit': true,
	'function-url-quotes': 'always',
	'selector-pseudo-element-colon-notation': 'double',
	'comment-no-empty': true,
	'color-no-invalid-hex': true,
	'font-family-no-duplicate-names': true,
	'font-family-no-missing-generic-family-keyword': true,
	'function-calc-no-unspaced-operator': true,
	'function-linear-gradient-no-nonstandard-direction': true,
	'string-no-newline': true,
	'declaration-block-no-shorthand-property-overrides': true,
	'keyframe-declaration-no-important': true,
	'no-duplicate-at-import-rules': true,
	'no-duplicate-selectors': true,
	'no-empty-source': true,
	'no-irregular-whitespace': true
};

export const config = {ignoreFiles: IGNORE_FILES, plugins: PLUGINS, rules: RULES };

export const getStyleLintConfig = ({ ignoreFiles = IGNORE_FILES, plugins = [], rules = {}, ...rest } = {}) => ({
	ignoreFiles,
	plugins: [...plugins, ...PLUGINS],
	rules: { ...RULES, ...rules },
	...rest
});
