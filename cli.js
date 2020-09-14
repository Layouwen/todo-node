const program = require("commander")
const api = require("./index.js")

program
  .option("-x, --xxx", "what the x")
program
  .command("add")
  .description("add a task")
  .action((...args) => {
    const words = args.slice(0, -1).join(" ")
    api.add(words)
  })
program
  .command("clear")
  .description("clear a task")
  .action((...args) => {
    console.log("clear task")
  })

program.parse(process.argv)
