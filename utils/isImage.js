const path = require("path")
const config = require("../bin/config/index")
/**
 * 判断target是不是可处理的图片
 * @param {string} target 
 * @example
 * const { isImage } = require("utils/index")
 * // 判断A.png是不是可以处理的图片类型
 * console.log(isImage("./A.png")) // --> true
 * // 判断B.abc是不是可以处理的图片类型
 * console.log(isImage("./B.abc")) // --> false
 */
const isImage = (target) => {
  const result = path.extname(target).slice(1)
  return config.getTypes().includes(result) ? true : false
}

module.exports = isImage