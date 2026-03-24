import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/', '.astro/', 'node_modules/']
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      svelte: eslintPluginSvelte
    },
    rules: {
      ...eslintPluginSvelte.configs.recommended.rules
    }
  }
];
