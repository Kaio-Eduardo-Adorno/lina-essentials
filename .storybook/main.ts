// .storybook/main.js|ts

module.exports = {
  stories: ['../src/lib/components/**/*.stories.mdx', '../src/lib/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
};