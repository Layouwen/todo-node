const program = require("commander")

program
  .option("-x, --xxx", "what the x")
program
  .command("add")
  .description("add a task")
  .action((x, y, k, l) => {
    console.log(x, y, k, l)
  })

program.parse(process.argv)
