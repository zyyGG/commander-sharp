const listFolder = require("./listFolder.js")
const chalk = require("chalk")

/**
 * 获取指定路径下的所有image文件
 * @param { string } input 输入文件夹/文件路径
 * @returns { String[] } 返回所有文件的路劲数组
 */
function getFileList(input) {
  const result = listFolder(input)
  if (result.length === 0) {
    console.log(`${chalk.redBright("No file or dir found!")}`)
    // 强制结束进程
    process.exit(1)
  }
  else return result
}

module.exports = getFileList