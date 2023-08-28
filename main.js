#!/usr/bin/env node
const { program } = require("commander")

const getConfigType = require("./bin/config/getConfigType.js")

program
  .name("commander-sharp")
  .description("利用命令行来处理图片")
  .version("0.1.0")

// program.command("compress")
//   .description("压缩图片")
//   .option("-q,--quality <string | number>","压缩率",70)
//   .option("")

// 获取可以处理的图片对象
program.command("config-type")
  .description("(只读)显示可以处理的图片类型")
  .argument("[string]", "检查输入的类型可以执行哪些操作")
  .action(getConfigType)

program.parse()

