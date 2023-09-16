
const fs = require("fs")
const sharp = require("sharp")
const Color = require("color")

const listFolder = require("../../utils/listFolder")
const getOutputPath = require("../../utils/getOutputPath")
const { writeFileCallback } = require("../../utils/callback")


/**
 * 
 * @param {string} input 输入目标
 * @param {string} output 输出目标
 * @param {Color} options.newColor 新颜色
 * @param {number} options.range 模糊范围
 * @returns 
 */
module.exports = function (input, output, options) {
  // 初始化与参数检测
  const result = listFolder(input)
  if (result.length === 0) return console.log(`${chalk.redBright("No file or dir found!")}`)

  // 开始执行
  result.forEach(async (item) => {
    const image = sharp(item)
    const metadata = await image.metadata()
    const raw = await image.raw()
    const bufferData = await raw.toBuffer().then(bufferDate => replaceColor(new Uint8ClampedArray(bufferDate.buffer), Color(options.newColor), metadata.channels, options))
    const newImageBuffer = await sharp(bufferData, {
      raw: {
        width: metadata.width,
        height: metadata.height,
        channels: metadata.channels
      }
    }).toFormat(metadata.format).toBuffer()
    
    outputPath = getOutputPath(input, output, item)
    fs.writeFile( outputPath, newImageBuffer, writeFileCallback)
  })
}


/**
 * 替换图片中像素
 * @param {Array<number>} data 等待处理的像素数组
 * @param {Color} newColor 新的颜色
 * @param {number} channels 通道数 一般都是3或者4
 * @param {number} options.range 模糊范围
 * @param {number} options.targetColor 目标颜色
 * @returns {Uint8ClampedArray}
 */
function replaceColor(data, newColor, channels, options) {
  const targetColor = Color(options.targetColor).color
  const range = options.range

  if (options.targetColor === undefined) {
    for (let i = 0; i < data.length; i += channels) 
      for (let j = 0; j < Math.min(channels, 3); j++) 
        (data[i + j] = newColor.color[j])
  } else {
    for (let i = 0; i < data.length; i += channels) {
      let color = Color([data[i], data[i + 1], data[i + 2]]).color
      if(sameColor(color, targetColor, range))
        for (let j = 0; j < Math.min(channels, 3); j++)
          data[i + j] = newColor.color[j]
    }
  }
  return new Uint8ClampedArray(data)
}


/**
 * 判断两个颜色是否相等
 * @param {Color} color 第一个颜色
 * @param {Color} targeColor 第二个颜色
 * @param {number} range 模糊查找范围0-255
 */
function sameColor(color, targeColor, range = 5) {
  range = Math.min(Math.max(range, 0), 255)
  for (let i = 0; i < color.length; i++) {
    if (color[i] + range < targeColor[i] || color[i] - range > targeColor[i]) return false
  }
  return true
}