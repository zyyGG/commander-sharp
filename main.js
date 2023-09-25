#!/usr/bin/env node
const { program } = require("commander")

const getConfigType = require("./bin/config/getConfigType.js")
const compress = require("./bin/compress/index.js")
const replaceColor = require("./bin/replaceColor/index.js")
const rotate = require("./bin/rotate/index.js")
const resize = require("./bin/resize/index.js")
const canvaResize = require("./bin/canvaResize/index.js")

process.argv;
// 处理argv --angle无法输入负数的问题
(() => {
  process.argv = process.argv.map((item, index) => {
    if (/^(--angle)$/.test(item)) {
      let result = Number(process.argv[index + 1])
      if (isNaN(result)) {
        console.log(`${item}值异常，{process.argv[index + 1]}`)
        process.exit(1)
      } else {
        process.argv[index + 1] = result
      }
    }
    return item
  })
})();

program
  .name("commander-sharp")
  .description("利用命令行来处理图片")
  .version("1.0.6");

// 压缩
program.command("compress")
  .description("压缩图片")
  .argument("[input]", "需要处理图片目录路径或者图片路径", "./")
  .argument("[output]", "完成后放置的目录,默认覆盖原文件", "./")
  .option("-q, --quality [number]", "图片的处理质量,0-100", 80)
  .action(compress);

// 将图片中的指定颜色换成另一种颜色
program.command("replaceColor")
  .description("将指定图片中的指定颜色换成指定的颜色")
  .argument("[input]", "需要处理图片目录路径或者图片路径", "./")
  .argument("[output]", "完成后放置的目录,默认覆盖原文件", "./")
  .option("--target-color [color]", "需要更改的颜色，不指定就是所有颜色", undefined)
  .option("--new-color [color]", "新的颜色,默认白色", "#ffffff")
  .option("--range [number]", "模糊匹配范围,值越高，模糊查找的范围就越大,0-255", 5)
  .action(replaceColor);

// 旋转图片功能
program.command("rotate")
  .description("旋转图片")
  .argument("[input]", "需要处理图片目录路径或者图片路径", "./")
  .argument("[output]", "完成后放置的目录,默认覆盖原文件", "./")
  .option("--angle [number]", "旋转角度,默认90度(无法输入负数，字符串类型的负数也不可以)", -90)
  .option("--background [color]", "旋转后，空白区域的背景色", "#ffffff")
  .action(rotate);

// 修改图片大小功能
program.command("resize")
  .description("调整图片大小")
  .argument("[input]", "需要处理图片目录路径或者图片路径", "./")
  .argument("[output]", "完成后放置的目录,默认覆盖原文件", "./")
  .option("--width [number]", "宽度", undefined)
  .option("--height [number]", "高度", undefined)
  .option("--fit [cover | contain | fill | inside | outside]", "图片应该以怎样的方式呈现出来", "cover")
  .option("--position [centre | left | right | bottom | top]","当使用cover,contain的时候应该怎样定位图片","centre")
  .option("--background [string]","背景的填充色","#ffffff")
  .action(resize);

// 修改图片画布大小
program.command("canvaResize")
  .description("修改单个或者多个图片画布大小")
  .argument("[input]", "需要处理图片目录路径或者图片路径", "./")
  .argument("[output]", "完成后放置的目录,默认覆盖原文件", "./")
  .option("--width [number]", "宽度", undefined)
  .option("--height [number]", "高度", undefined)
  .option("--position [centre | left | right | bottom | top]","和ps一样往哪个方向调整画布","centre")
  .option("--background [string]","画布的填充色","#ffffff00")
  .action(canvaResize);

// 获取可以处理的图片对象
program.command("config-type")
  .description("(只读)显示可以处理的图片类型")
  .argument("[string]", "检查输入的类型可以执行哪些操作")
  .action(getConfigType);

program.parse(process.argv)

