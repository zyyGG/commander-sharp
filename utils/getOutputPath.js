const fs = require("fs")
const path = require("path")
const createDirection = require("./createDirection")
/**
 * 获取最终应该输入的样子
 * @param {string} input 输入目标
 * @param {string} output 输出目标
 * @param {string} item 当前正在处理的目标
 * @returns {string}
 */
function getOutputPath (input, output, item){
  let result
  if(fs.statSync(input).isDirectory()) result = path.join(output, item)
  else if(output === "./") result = item
  else result = output
  createDirection(path.dirname(result))
  return result
}

module.exports = getOutputPath