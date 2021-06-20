# អំពីការ Configuration Antd Theme Custom ទៅលើ Project Next JS

- ទីមួយ:

```js
yarn create next-app project-name --typescript
```

> **Command** ខាងលើគឺក្នុងលក្ខខ័ណ្ឌអ្នកមិនទាន់បានបង្កើត _Project Next JS_ រួចរាល់ តែបើសិនជាអ្នកបានបង្កើតរួចរាល់ហើយ អ្នកអាចទៅជំហានខាងក្រោមទៀត។

- ទីពីរ:

```js
yarn add antd @ant-design/icons
```

> **Command** ខាងលើមាន _packages_ ចំនួនពីរគឺ _antd_ ដែលប្រើសម្រាប់ប្រើ _library_ របស់ _antd_ នឹង _@ant-design/icons_ ប្រើសម្រាប់ប្រើ _icon_ របស់ _antd_។

```js
yarn add next-plugin-antd-less
```

> **Command** ខាងលើមាន _package_ ចំនួនមួយគឺ _next-plugin-antd-less_ ដែលប្រើសម្រាប់ប្រើ _plugin_ របស់ _next_ សម្រាប់ _custom theme_ ជាមួយ _antd_។

```js
yarn add babel-plugin-import
```

> **Command** ខាងលើមាន _package_ ចំនួនមួយគឺ _babel-plugin-import_ ដែលប្រើសម្រាប់ប្រើ _plugin_ របស់ _babel_ សម្រាប់ _custom theme_ ជាមួយ _antd_។

- ទីបី:

> ចូលទៅក្នុង `next.config.js` _file_ ហើយសរសេរកូដទាំងនេះនៅពីក្រោមកូដខាងលើ:

```js
// next.config.js
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#73d13d' },
  // optional
  lessVarsFilePath: "./less/antd-theme-custom.less",
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
```

> កូដខាងលើនេះ គឺខ្ញុំសុំពន្យល់ខ្លីៗនៅកន្លែងដែលសំខាន់ ដូចជា `modifyVars` នៅ _property_ មួយនេះគឺយើងចង់កំណត់ជា តម្លៃពណ៍ដំបូងនៅទីនេះក៏បានឬក៏យើងអាចប្រើ _property_ មួយទៀតជំនួសបានគឺ `lessVarsFilePath` ដែល _property_ មួយនេះគឺយើងអាចកំណត់ជា _path_ ទៅកាន់ _file less_ របស់យើង ដូចដែលដែលឃើញចឹងគឺ `./less/antd-theme-custom.less` ដូច្នេះអ្នកត្រូវបង្កើត _less file_ ឲ្យដូចទៅនឹង _path_ ដែលអ្នកបានកំណត់នៅក្នុង `lessVarsFilePath` មួយនេះ។ មួយវិញទៀត អ្នកត្រូវចំណាំថាទាល់តែ _property_ `lessVarsFilePathAppendToEndOfContent: true` នេះមានតម្លៃ `true` ដែរទើប _less file_ របស់អ្នកអាចដំណើរការ។ មួយទៀតគឺនៅក្នុងចំណុចនេះ ខ្ញុំសុំ _comment property_ `modifyVars` ចោលមានន័យថា ខ្ញុំមិនប្រើវា។

> less / antd-theme-custom.less

```js
@import '../node_modules/antd/dist/antd.less';

@primary-color: #ff18a6; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers
```

> ក្នុងនេះ អ្នកត្រូវ _import style_ ចេញពី `antd.less` ផង ហើយអ្នកអាចផ្លាស់ប្តូរនូវតែអ្នកចង់ផ្លាស់បានហើយ។😉

- ទីបួន

> បង្កើត _file_ មួយនៅ _root folder_ ឈ្មោះថា .`babelrc.js` ហើយសរសេរកូដខាងក្រោមចូល:

```js
// .babelrc.js
module.exports = {
  presets: [require.resolve("next/babel")],
  plugins: [
    [
      require.resolve("babel-plugin-import"),
      { libraryName: "antd", style: true },
    ],
  ],
};
```

- ទីប្រាំ:

> ចូលក្នុង _index.tsx_ នៅក្នុង _page folder_ ហើយលុបកូដដែលនៅក្នុងនោះចោលទាំងអស់ ហើយសរសេរកូដខាងក្រោមចូល:

```js
import React from "react";
import { Button } from "antd";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Button type="primary">Click Me</Button>
    </React.Fragment>
  );
};

export default Home;
```

> បន្ទាប់មក យើង _run project_:

```js
yarn dev
```

> លទ្ធផល

![next-js-result thumbnail](/_thumbnail_doc/nextjs-result.JPG "Next JS Result")
