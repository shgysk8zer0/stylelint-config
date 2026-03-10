import test from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';
import { config } from '@shgysk8zer0/stylelint-config'; // Adjust path to your entry point

test('Stylelint Config - Valid CSS', async () => {
	const result = await stylelint.lint({
		files: 'test/valid.css',
		config: config,
	});

	assert.equal(
		result.errored,
		false,
		'Expected valid.css to pass without errors'
	);
});

test('Stylelint Config - Invalid CSS', async () => {
	const result = await stylelint.lint({
		files: 'test/invalid.css',
		config: config,
		ignoreDisables: true,
	});

	assert.equal(
		result.errored,
		true,
		'Expected invalid.css to fail'
	);

	const warnings = result.results[0].warnings.map(w => w.rule);

	// Verify it caught the specific rules
	assert.ok(warnings.includes('declaration-no-important'));
	assert.ok(warnings.includes('block-no-empty'));
});

test('Stylelint Config - Ignored Files', async () => {
	const result = await stylelint.lint({
		files: 'test/ignored.min.css',
		config: config,
	});

	const fileResult = result.results[0];

	assert.equal(
		fileResult.ignored,
		true,
		'Expected style.min.css to be marked as ignored'
	);

	assert.equal(
		result.errored,
		false,
		'Expected no errors from an ignored file'
	);
});
