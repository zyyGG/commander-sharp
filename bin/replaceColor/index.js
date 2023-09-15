
const fs = require("fs")
const path = require("path")
const sharp = require("sharp")
const chalk = require("chalk")
const Color = require("color")

const listFolder = require("../../utils/listFolder")
const createDirection = require("../../utils/createDirection")


// 更换颜色
module.exports = function (target, newColor, options) {
  // 初始化与参数检测
  const targetList = listFolder(target)
  if (targetList.length === 0) return

  const targetDir = path.join("./", options.out)
  newColor = Color(newColor)
  // 开始遍历
  targetList.forEach(async (item) => {
    const image = sharp(item)
    // 判断是否存在完成后放置的文件夹

    const metadata = await image.metadata()
    const raw = image.raw()

    const resultData = await raw.toBuffer().then(bufferDate => replaceColor(new Uint8ClampedArray(bufferDate.buffer), newColor, options))

    sharp(resultData, {
      raw: {
        width: metadata.width,
        height: metadata.height,
        channels: metadata.channels
      }
    })
      .toFormat(metadata.format)
      .toBuffer()
      .then(data => {
        {
          const target = path.join(targetDir, item)
          createDirection(path.dirname(target))
          fs.writeFile(
            target,
            data,
            (err) => {
              if (err) console.log((`${chalk.red("*")}\t${target}`)) //失败的显示
              else console.log((`${chalk.green("*")}\t${target}`)) //成功的显示
            })
        }
      })
  })
}


/**
 * 替换图片中像素
 * @param {Array<number>} data 等待处理的像素
 * @param {Color} newColor 新的颜色
 * @param {} options 配置
 * @returns {Uint8ClampedArray}
 */
function replaceColor(data, newColor, options) {
  if (options.color === undefined) {
    for (let i = 0; i < data.length; i += 4) [data[i], data[i + 1], data[i + 2], data[i + 3]] = [...newColor.color, data[i + 3]]
  } else {
    const color = Color(options.color)
    for (let i = 0; i < data.length; i += 4) {
      sameColor(color.color, Color([data[i], data[i + 1], data[i + 2]]).color,options.range)
        ? ([data[i], data[i + 1], data[i + 2], data[i + 3]] = [...newColor.color, data[i + 3]])
        : ([data[i], data[i + 1], data[i + 2], data[i + 3]] = [data[i], data[i + 1], data[i + 2], data[i + 3]])
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
function sameColor(color, targeColor,range = 5) {
  range = Math.min(Math.max(range,0),255)
  for (let i = 0; i < color.length; i++) {
    if(color[i]+range < targeColor[i] ||  color[i] - range > targeColor[i]) return false
  }
  return true
}