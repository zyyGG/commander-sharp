#!/usr/bin/env node
const { program } = require("commander")

const getConfigType = require("./bin/config/getConfigType.js")
const compress = require("./bin/compress/index.js")
const replaceColor = require("./bin/replaceColor/index.js")

program
  .name("commander-sharp")
  .description("利用命令行来处理图片")
  .version("0.1.0");

// 压缩
program.command("compress")
  .description("压缩图片")
  .argument("[string]","需要处理图片目录路径或者图片路径","./")
  .option("-q, --quality [number]","压缩率,值越高压缩越严重",30)
  .option("-o, --out [string]","完成后放置的目录","./")
  .action(compress);

// 将图片中的指定颜色换成另一种颜色
program.command("replaceColor")
  .description("将指定图片中的指定颜色换成指定的颜色")
  .argument("<string>","需要处理图片目录路径或者图片路径")
  .argument("<string>","新颜色")
  .option("-c, --color [string]","指定更改的颜色",undefined)
  .option("-r, --range [number]","模糊匹配范围,值越高，模糊查找的范围就越大,0-255",5)
  // .option("--all [boolearn]","透明通道也替换",false)
  .option("-o, --out [string]","完成后放置的目录,默认覆盖原文件","./")
  .action(replaceColor);

// 获取可以处理的图片对象
program.command("config-type")
  .description("(只读)显示可以处理的图片类型")
  .argument("[string]", "检查输入的类型可以执行哪些操作")
  .action(getConfigType);

program.parse()

