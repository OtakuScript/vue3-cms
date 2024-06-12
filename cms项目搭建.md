# 项目搭建

## 项目创建

vue-cli 创建项目

```js
vue create vue3-cms
```

## 项目选项说明

### 1.选择项目的预设

```js
Vue CLI v5.0.8  // 当前vue-cli的版本
? Please pick a preset: (Use arrow keys)
  vue3 just with babel ([Vue 3] babel) // 保留的预设
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
> Manually select features // 手动选择项目的特性
```

### 2.选择项目的特性

```js
? Check the features needed for your project: (Press <space> to select, <a> to toggle
all, <i> to invert selection, and <enter> to proceed)
>(*) Babel  // 代码转换，es6 -> es5
 (*) TypeScript  // 类型检查
 ( ) Progressive Web App (PWA) Support // 渐进式 web 应用
 (*) Router  // 路由
 (*) Vuex  // 状态管理
 (*) CSS Pre-processors // css预处理
 (*) Linter / Formatter // 代码格式化
 ( ) Unit Testing // 单元测试
 ( ) E2E Testing // 端到端测试
```

### 3.选择 vue 版本

```js
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
> 3.x
  2.x
```

### 4.是否部使用类组件开发

```js
? Use class-style component syntax? No
```

### 5.是否使用 Babel 转换 Ts

```js
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
```

### 6.选择 css 的预处理 less

```js
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
  Sass/SCSS (with dart-sass)
> Less
  Stylus
```

### 7.选择代码检查约束

```js
? Pick a linter / formatter config: (Use arrow keys)
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
```

### 8.选择代码格式化时机

```js
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to
proceed)
>(*) Lint on save // 保存时格式化
 ( ) Lint and fix on commit
```

### 9.保存代码集成的配置

```js
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files // 使用一个独立的文件保存配置
  In package.json // 保存在依赖文件里
```

### 10.是否保存为预设

```js
? Save this as a preset for future projects? (y/N) n
```

### 11.最终配置

```js
D:\project>vue create vue3-cms

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) n
```

## 第三方库集成

### 1.editorconfig 配置

**代码风格样式**: 保持字符集、缩进、换行符等一致。

```js
root = true

[*] // 表示所有文件适用
charset = utf-8 // 设置文件字符集为 utf-8
indent_style = space // 缩进风格（tab | space）
indent_size = 2 // 缩进大小
end_of_line = lf // 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true // 去除行首的任意空白字符
insert_final_newline = true // 始终在文件末尾插入一个新行

[*.md] // 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### 2.prettier

代码格式化风格

```js
npm install prettier -D
```

.prettierrc 配置

```js
{
  "useTabs": false, // 使用tab缩减还是空格缩进
  "tabWidth": 2, // 缩进长度
  "printWidth": 80, // 字符长度
  "singleQuote": false, // 是否使用单引号
  "trailingComma": "none", // 多行输入时是否添加逗号
  "semi": false // 语句末尾是否添加分号
}
```

.prettierignore 忽略文件配置

```js
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

全局格式化命令行配置

```js
"prettier": "prettier --write .",
```

### 3.eslint 代码约束

代码风格检查

项目创建会默认创建.eslintrc.js 及其默认配置

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended"
 ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
```

根据自定义的 prettier 规范约束则需要增加配置，后面的推荐配置会覆盖前面的

```js
  extends: [
    ...
    "plugin:prettier/recommended"
  ],
```

此配置会调用两个插件，创建项目时选择 ESLint + Prettier 的情况下默认安装：

```js
npm i eslint-plugin-prettier eslint-config-prettier -D
```

### 4.git Husky 和 eslint

[husky 官网]([Husky (typicode.github.io)](https://typicode.github.io/husky/))

代码提交之前进行约束，使用自动化命令；即 commit 之前，执行 script 的命令

配置方式直接走教程或者官网，以下的方法暂时无效：https://typicode.github.io/husky

```js
 npx husky -init && npm install #npm  // powershell/cmd中无效，需要换成git bash终端或者&&加上引号""
```

自动生成.husky 目录，还有目录下 pre-commit 配置文件，是配置执行 git commit 前执行的 hook

pre-commit 配置

```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

自动化命令无效时，手动安装步骤

```js
npm intsall husky -D
npx husky install
```

配置命令行脚本，并重新 npm install

```js
"scripts": {
  ...
  "prettier": "prettier --write .",
  "prepare": "husky install"
}
```

### 5. commitizen 提交信息风格规范

commit 信息规范，自动生成提交信息。

安装插件：

```js
npm install commitizen -D
```

安装并初始化 cz-conventional-changelog：

```js
npx commitizen init cz-conventional-changelog -D --save-exact
```

初始化后会自动在 package.json 生成配置：

```js
"config": {
  "commitizen": {
 	"path": "./node_modules/cz-conventional-changelog"
   }
 }
```

使用：

```js
npx cz
```

配置 script 命令行：

```js
"scripts": {
  ...
  "commit": "cz"
}
```

### 6.commitlint 代码提交信息验证

对 commit message 进行验证，并限制不规范的信息提交

安装以下依赖

```js
npm i @commitlint/config-conventional @commitlint/cli -D
```

创建 commitlint.config.js 配置文件

```js
module.exports = {
  extends: ["@commitlint/config-conventional"]
}
```

生成拦截文件 commit-msg，执行 husky 的自动化命令

```js
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

### 7.vue-cli创建的项目的webpack配置

根目录里添加vue.config.js文件

### 8.组件库 element-plus

安装及注册见：

[安装 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/guide/installation.html)

按需引入见：

[快速开始 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/guide/quickstart.html#按需导入)

当前时间下两个按需引入的插件稳定版为(2024/3)

```js
npm install -D unplugin-vue-components@0.25.2 unplugin-auto-import@0.16.7
```

### 9.axios

### 10.区分环境变量
