const fs = require("fs")
const sharp = require("sharp")
const chalk = require("chalk")

const getFileList = require("../../utils/getFileList.js")
const getOutputPath = require("../../utils/getOutputPath.js")
const { writeFileCallback } = require("../../utils/callback.js")

/**
 * 旋转指定文件夹或者目录中的图片
 * @param {string} str 需要处理的图片目录或者图片
 * @param {string} output 图片处理完成后放在哪里
 * @param {number} options.angle 旋转角度
 */
function rotate(input, output, options) {
  const result = getFileList(input)
  const angle = Number(options.angle) % 360
  if (Number.isNaN(angle)) return console.log(`${chalk.redBright("传入的角度必须是数字类型")}`)

  result.forEach(async item => {
    const image = sharp(item)
    const data = await image.rotate(angle, { background: options.background }).toBuffer()
    const outputPath = getOutputPath(input, output, item)
    // 写入文件
    fs.writeFile(outputPath, data, writeFileCallback(outputPath))
  })
}

module.exports = rotate