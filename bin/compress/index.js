const fs = require("fs")
const path = require("path")
const sharp = require("sharp")
const chalk = require("chalk")

const listFolder = require("../../utils/listFolder")
const createDirection = require("../../utils/createDirection")

/**
 * 压缩目标目录 或者 单个文件
 * @param {string} str 需要处理的图片目录或者图片
 * @param {string} output 图片处理完成后放在哪里
 * @param {number} options.quality 图片的处理质量
 */
function compress(target, output, options) {
  const result = listFolder(target)
  // 空数组就直接返回一个错误提示
  if (result.length === 0) return console.log(`${chalk.redBright("No file or dir found!")}`)
  // 预处理图片
  result.forEach(item => {
    const image = sharp(item)
    image
      .metadata()
      .then(async (metadata) => {
        image
          .toFormat(metadata.format, { quality: Math.min(Math.max(options.quality , 1), 100) })
          .toBuffer()
          .then(data => {
            let targetItem = fs.statSync(target).isDirectory() 
              ? path.join(output, item) 
              : output==="./"
                ? item
                : output
            createDirection(path.dirname(targetItem))
            fs.writeFile(
              targetItem,
              data,
              (err) => {
                if (err) console.log((`${chalk.red("*")}\t${targetItem}`)) //失败的显示
                else console.log((`${chalk.green("*")}\t${targetItem}`)) //成功的显示
              }
            )
          })
      })
  })
}

module.exports = compress