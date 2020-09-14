const db = require("./db.js")

module.exports.add = async (title) => {
  // 读
  const list = await db.read()
  // 添加
  list.push({title, done: false})
  // 存储
  await db.write(list)
}