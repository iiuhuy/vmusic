module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "eol-last": 0,
    indent: 0,
    // quotes: ["off", "double"], // 不是双引号则 warn
    "semi-style": ["off", "last"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
