module.exports = {
  // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  //配置解析es6
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["prettier", "eslint:recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "comma-spacing": 0,
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    "keyword-spacing": 0,
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": 2,
    // 禁止在条件中使用常量表达式
    // if (false) {
    //     doSomethingUnfinished();
    // } //cuowu
    "no-constant-condition": 2,
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止空语句块
    "computed-property-spacing": [2, "never"],
    //"SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "no-empty": 2,
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": [0, "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": [
      2,
      {
        // 允许声明未使用变量
        // "vars": "local",
        // 参数不检查
        args: "none",
      },
    ],
  },
};
