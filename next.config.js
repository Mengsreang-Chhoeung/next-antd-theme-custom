module.exports = {
  reactStrictMode: true,
}

// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#73d13d' },
  // optional
  lessVarsFilePath: './less/antd-theme-custom.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  future: {
    // if you use webpack5
    webpack5: false,
  },
});
