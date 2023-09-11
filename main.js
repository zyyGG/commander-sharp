#!/usr/bin/env node
const { program } = require("commander")

const getConfigType = require("./bin/config/getConfigType.js")
const compress = require("./bin/compress/index.js")

program
  .name("commander-sharp")
  .description("利用命令行来处理图片")
  .version("0.1.0")

program.command("compress")
  .description("压缩图片")
  .argument("[string]","需要处理图片目录路径或者图片路径","./")
  .option("-q, --quality [number]","压缩率,值越高压缩越严重",30)
  .option("-o, --out [string]","完成后放置的目录","./")
  .action(compress)

// 获取可以处理的图片对象
program.command("config-type")
  .description("(只读)显示可以处理的图片类型")
  .argument("[string]", "检查输入的类型可以执行哪些操作")
  .action(getConfigType)

program.parse()

