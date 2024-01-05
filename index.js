const Comp = function (content) {
  // 这个content就是传过来的ast语法树
  console.log("走到demo-loader了");
  return content.replace(/console\.log/g, "");
};
module.exports = Comp;

// 执行npm link 就把这个包链接到了本地项目上
