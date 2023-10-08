const fs = require("fs")
const sharp = require("sharp")

const getOutputPath = require("../../utils/getOutputPath")
const { writeFileCallback } = require("../../utils/callback")
const getFileList = require("../../utils/getFileList")

/**
 * 压缩目标目录 或者 单个文件
 * @param {string} str 需要处理的图片目录或者图片
 * @param {string} output 图片处理完成后放在哪里
 * @param {number} options.quality 图片的处理质量
 */
function extract(input, output, options) {
  const result = getFileList(input)
  // 预处理图片
  result.forEach(async (item) => {
    const image = sharp(item)
    const metadata = await image.metadata()
    const data = await image.extract(
      {
        width:+options.width || metadata.width,
        height:+options.height || metadata.height,
        left:+options.left || 0,
        top:+options.top || 0,
      }
    )
    .toBuffer()
    const outputPath = getOutputPath(input, output, item)
    fs.writeFile(outputPath, data, writeFileCallback)
  })
}



module.exports = extract