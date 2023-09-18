const { config } = require("./index")
/**
 * 获取当前的支持列表，输入图片后缀就可以了
 * @param {string | undefined} str support image type
 * @example
 * getConfigType("png")
 */
function getConfigType(str) {
  if(str === undefined) console.log(config)
  else console.log(config.filter(item=>item.name === str)[0])

}

module.exports = getConfigType

