const config = [
  {
    name:"png",
    support:["compress","rotate","replaceColor"]
  },
  {
    name:"jpg",
    support:["compress","rotate","replaceColor"]
  },
  {
    name:"webp",
    support:["compress","rotate","replaceColor"]
  }
]

/**
 * 获取配置表
 * @returns 
 * @example
 * const config = require("config/index")
 * // 获取配置数组
 * const types = config.getTypes()
 * console.log(types)
 */
const getTypes = ()=>{
  return config.map(item=>item.name)
}

module.exports = {
  config,
  getTypes,
}