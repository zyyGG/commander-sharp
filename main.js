#!/usr/bin/env node
const { program } = require("commander")

const getConfigType = require("./bin/config/getConfigType.js")
const compress = require("./bin/compress/index.js")
const replaceColor = require("./bin/replaceColor/index.js")
const rotate = require("./bin/rotate/index.js")

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
  .version("1.0.3");

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

// 获取可以处理的图片对象
program.command("config-type")
  .description("(只读)显示可以处理的图片类型")
  .argument("[string]", "检查输入的类型可以执行哪些操作")
  .action(getConfigType);

program.parse(process.argv)

