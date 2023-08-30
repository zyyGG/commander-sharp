const fs = require("fs")
const path = require("path")

const isImage = require("./isImage")


/**
 * 列出文件夹内所有的文件和目录，并展示成最终的列表样式
 * @param {string} target 目录或者文件
 */
const listFolder = (target) => {
  let result = []
  // 是否是文件夹
  if (fs.statSync(target).isDirectory()) {
    fs.readdirSync(target).forEach(file => {
      const targetFile = path.join(target, file)
      if(isImage(targetFile) === true){
        const fileList = listFolder(targetFile)
        result.push( typeof(fileList === "string") ? fileList : [...fileList])
      }
    })
    return result
  } else {
    return target
  }
}

module.exports = listFolder