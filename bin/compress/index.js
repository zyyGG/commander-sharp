const fs = require("fs")
const path = require("path")
const sharp = require("sharp")
const chalk = require("chalk")

const listFolder = require("../../utils/listFolder")
const createDirection = require("../../utils/createDirection")

/**
 * 压缩目标目录 或者 单个文件
 * @param {string} str 需要处理的图片目录或者图片
 * @param {string | number} options.quality 图片的处理质量
 * @param {string} options.out 图片处理完成后放在哪里,默认覆盖
 */
function compress(str, options) {
  const result = listFolder(str)
  // 预处理图片
  result.forEach(item => {
    const image = sharp(item)
    // 判断是否存在完成后放置的文件夹
    const targetDir = path.join("./", options.out)
    image
      .metadata()
      .then(async (metadata) => {
        const type = metadata.format
        return image
          .toFormat(type, { quality: Math.min(Math.max(100 - options.quality,1),100) })
          .toBuffer()
          .then(data =>{
            const target = path.join(targetDir, item)
            createDirection(path.dirname(target))
            fs.writeFile(
              target,
              data,
              (err) => {
                if (err) console.log((`${chalk.red("*")}\t${target}`)) //失败的显示
                else console.log((`${chalk.green("*")}\t${target}`)) //成功的显示
              }
            )
          })
      })
  })
}



module.exports = compress