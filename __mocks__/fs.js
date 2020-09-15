const fs = jest.genMockFromModule("fs") // 声明这是jest的假模块

fs.x = () => {
  console.log("1")
  return "xxx"
}

module.exports = fs
