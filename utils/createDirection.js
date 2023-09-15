const fs = require("fs")
const path = require("path")

/**
 * 
 * @param {string} target 需要创建的目录
 * @returns 返回传入的target
 * @example
 * createDirection("./demo/hello/yes")
 */
function createDirection(target) {
  try{
    if(!fs.existsSync(path.join("./",target))){
      const parentDir = path.dirname(path.join("./",target))
      if(!fs.existsSync(parentDir)){
        createDirection(parentDir)
      }
      fs.mkdirSync(path.join("./",target))
    }
    return true
  }catch(e){
    console.warn(e)
    return false
  }
}

module.exports = createDirection