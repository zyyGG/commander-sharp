const chalk = require("chalk")

const writeFileCallback = (err) => {
  if (err) console.log((`${chalk.red("*")}\t${outputPath}`)) //失败的显示
  else console.log((`${chalk.green("*")}\t${outputPath}`)) //成功的显示
}

module.exports = {
  writeFileCallback
}