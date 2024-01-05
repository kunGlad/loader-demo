// const Comp = function (content) {
//   // 这个content就是传过来的ast语法树
//   console.log("走到demo-loader了");
//   return content.replace(/console\.log/g, "");
// };
// module.exports = Comp;

// // 执行npm link 就把这个包链接到了本地项目上

const loaderUtils = require("loader-utils");
// 安装指定版本 loader-utils@1.4.2

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  console.log(options, "=====options");

  this.callback(null, addSign(content, options.sign));

  return;
};

function addSign(content, sign) {
  console.log("我执行到增加标识了");
  // 每个文件前面都增加一个标识
  return `/**${sign}*/\n${content}`;
}
