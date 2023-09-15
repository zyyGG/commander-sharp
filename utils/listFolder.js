const fs = require("fs")
const path = require("path")

const isImage = require("./isImage")


/**
 * 列出文件夹内所有的文件和目录，并展示成列表样式
 * @param {string} target 目录或者文件
 */
const listFolder = (target) => {
  if(!fs.existsSync(target)) return
  let result = []
  function readImage(target) {
    // 是否是文件夹
    if (fs.statSync(target).isDirectory()) {
      fs.readdirSync(target).forEach(file => {
        const targetFile = path.join(target, file)
        readImage(targetFile)
      })
    } else isImage(target) && result.push(target)
  }
  readImage(target)
  return result
}

module.exports = listFolder