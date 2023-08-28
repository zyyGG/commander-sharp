# Commander-sharp 
这是一个图片处理工具，使用命令行来处理图片
## 基本信息
当前版本`Version 0.0.1`处于测试中

## 安装
### 通过npm（暂时未实现）
`npm install --global commander-sharp`

### 通过github
下载仓库后，通过 npm link 即可

## 帮助
`cst help`

## 常用的命令
### 压缩图片
`cst compress <path>`,
#### 配置
1. `--quality <number | string>`:压缩率，默认70
2. `--out <path>`:压缩完成输出的文件夹

### 旋转图片
`cst rotate <path>`
#### 配置
1. `--degree <number>`:旋转角度,默认90度

## 其他命令
### 查看可处理的图片类型
`cst config-type [string]`