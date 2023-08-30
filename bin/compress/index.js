const fs = require("fs")

const { listFolder } = require("../../utils/index")

/**
 * 压缩目标目录 或者 单个文件
 * @param {string} str 需要处理的图片目录或者图片
 * @param {string | number} options.quality 图片的处理质量
 * @param {string} options.out 图片处理完成后放在哪里,默认覆盖
 */
function compress(str, options) {
  console.log("compress 开发中")
  
  const result = listFolder(str)
  console.log(result)
  
}

module.exports = compress