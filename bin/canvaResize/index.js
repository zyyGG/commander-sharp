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
function canvaResize(input, output, options) {
  const result = getFileList(input)
  const canvas = sharp({
    create:{
      width:Number(options.width) || 0,
      height:Number(options.height) || 0,
      channels:4,
      background:options.background || "#ffffff"
    },
  })
  // 预处理图片
  result.forEach(async (item) => {
    const image = sharp(item)
    const metadata = await image.metadata()
    // 相同尺寸则直接返回
    if(options.width === metadata.width && options.height === metadata.height) return
    else if(options.width <= metadata.width || options.height <= metadata.height) {
      console.error("目标尺寸小于原图尺寸，无法处理")
    }else{
      canvas.channels = metadata.channels
      const data = await canvas.composite([
        {input:item,gravity:getGravity(options.position)}
      ]).toFormat(metadata.format).toBuffer()
      
      const outputPath = getOutputPath(input, output, item)
      fs.writeFile(outputPath, data, writeFileCallback)
    }
  })
}

function getGravity(position){
  switch(position){
    case "left top": return "northwest";
    case "top": return "north";
    case "right top": return "northeast";
    case "left": return "west";
    case "centre": return "centre";
    case "right": return "east";
    case "left bottom": return "southwest";
    case "bottom": return "south";
    case "right bottom": return "southeast";
    default: return "centre";
  }
}

module.exports = canvaResize