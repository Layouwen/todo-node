#!/usr/bin/env node
const program = require("commander")
const api = require("./index.js")
const pkg = require("./package.json")

program
  .version(pkg.version)
program
  .command("add")
  .description("add a task")
  .action((...args) => {
    const words = args.slice(0, -1).join(" ")
    api.add(words).then(res => console.log("添加成功"), error => console.log("添加失败"))
  })
program
  .command("clear")
  .description("clear a task")
  .action(() => {
    api.clear().then(res => console.log("清除完毕"), error => console.log("删除失败"))
  })

program.parse(process.argv)

if (process.argv.length === 2) {
  void api.showAll()
}