const db = require("../db.js")
jest.mock("fs")

describe("db", () => { // 描述
  it("can read", () => {
    expect(db.read).toBeInstanceOf(Function)
    db.read("/xxx.json")
  })
  it("can write", () => {
    expect(db.write).toBeInstanceOf(Function)
  })
})