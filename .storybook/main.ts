// .storybook/main.js|ts
const svgrPlugin = require('vite-plugin-svgr');

module.exports = {
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins,
      svgrPlugin({
        svgrOptions: {
          icon: true,
          replaceAttrValues: { black: '{props.color}' },
        },
      }),
    ];

    // return the customized config
    return config;
  },
  stories: [
    '../src/lib/components/**/*.stories.mdx',
    '../src/lib/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/lib/icons/*.stories.mdx',
    '../src/lib/icons/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  typescript: {
    reactDocgen: false,
    check: false,
    checkOptions: {},
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    // },
  },
};
