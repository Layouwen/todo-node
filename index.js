const program = require("commander")

program
  .option("-x, --xxx", "fuck me")
program
  .command("add")
  .description("add a task")
  .action((...args) => {
    const words = args.slice(0, -1).join(" ")
    console.log(words)
  })

program.parse(process.argv)

// console.log(program.xxx)
