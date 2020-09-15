const db = require("../db.js")
jest.mock("fs")

describe("db", () => { // 描述
  it("can read", () => {
    expect(fs.x()).toBe("xxx") // 期待它的返回值为 xxx
  })
})