const fs = require("fs")
const sharp = require("sharp")

const listFolder = require("../../utils/listFolder")
const getOutputPath = require("../../utils/getOutputPath")
const { writeFileCallback } = require("../../utils/callback")

/**
 * 压缩目标目录 或者 单个文件
 * @param {string} str 需要处理的图片目录或者图片
 * @param {string} output 图片处理完成后放在哪里
 * @param {number} options.quality 图片的处理质量
 */
function compress(input, output, options) {
  const result = listFolder(input)
  // 空数组就直接返回一个错误提示
  if (result.length === 0) return console.log(`${chalk.redBright("No file or dir found!")}`)
  // 预处理图片
  result.forEach(async (item) => {
    const image = sharp(item)
    const metadata = await image.metadata()
    const data = await image.toFormat(metadata.format, { quality: Math.min(Math.max(100 - options.quality, 1), 100) }).toBuffer()

    outputPath = getOutputPath(input, output, item)
    fs.writeFile(outputPath, data, writeFileCallback)

  })
}



module.exports = compress