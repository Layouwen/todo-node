const db = require("../db.js")
const fs = require("fs")
jest.mock("fs")

describe("db", () => { // 描述
  afterEach(() => {
    fs.clearMocks() // 每次测试先删除mock
  })

  it("can read", async () => {
    const data = [{title: "hi", done: true}]
    fs.setReadFileMock("/hi", null, JSON.stringify(data)) // 创建假数据
    const list = await db.read("/hi")
    expect(list).toStrictEqual(data)
  })

  it("can write", async () => {
    let fakeFile

    fs.setWriteFileMock("/yyy", (path, data, callback) => {
      fakeFile = data
      callback(null)
    })

    const list = [{title: "看星星", done: true}, {title: "看电影", done: true}]
    await db.write(list, "/yyy")
    expect(fakeFile).toBe(JSON.stringify(list) + "\n")
  })
})