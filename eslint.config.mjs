// eslint.config.mjs
import pluginVue from 'eslint-plugin-vue'
import {
    defineConfigWithVueTs,
    vueTsConfigs,
    configureVueProject,
} from '@vue/eslint-config-typescript'

configureVueProject({
    ignores: [
        "node_modules/*",
        "dist/*",
        "public/*",
        "coverage/*",
        ".github/*",
        ".vscode/*",
        ".husky/*",
    ],

    // Whether to parse TypeScript syntax in Vue templates.
    // Defaults to `true`.
    // Setting it to `false` could improve performance.
    // But TypeScript syntax in Vue templates will then lead to syntax errors.
    // Also, type-aware rules won't be applied to expressions in templates in that case.
    tsSyntaxInTemplates: true,

    // Optional: specify the script langs in `.vue` files
    // Defaults to `['ts']`.
    scriptLangs: [
        'ts',

        // [!DISCOURAGED]
        // Include 'js' to allow plain `<script>` or `<script setup>` blocks.
        // This might result-in false positive or negatives in some rules for `.vue` files.
        // Note you also need to configure `allowJs: true` and `checkJs: true`
        // in corresponding `tsconfig.json` files.
        'js',

        // [!STRONGLY DISCOURAGED]
        // Include 'tsx' to allow `<script lang="tsx">` blocks.
        // This would be in conflict with all type-aware rules.
        'tsx',

        // [!STRONGLY DISCOURAGED]
        // Include 'jsx' to allow `<script lang="jsx">` blocks.
        // This would be in conflict with all type-aware rules and may result in false positives.
        'jsx',
    ],

    // <https://github.com/vuejs/eslint-plugin-vue/issues/1910#issuecomment-1819993961>
    // Optional: the root directory to resolve the `.vue` files, defaults to `process.cwd()`.
    // You may need to set this to the root directory of your project if you have a monorepo.
    // This is useful when you allow any other languages than `ts` in `.vue` files.
    // Our config helper would resolve and parse all the `.vue` files under `rootDir`,
    // and only apply the loosened rules to the files that do need them.
    rootDir: import.meta.dirname,
})

export default defineConfigWithVueTs(
    pluginVue.configs["flat/essential"],

    // We STRONGLY RECOMMEND you to start with `recommended` or `recommendedTypeChecked`.
    // But if you are determined to configure all rules by yourself,
    // you can start with `base`, and then turn on/off the rules you need.
    //   vueTsConfigs.base,
    vueTsConfigs.recommendedTypeChecked,
)