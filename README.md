# Commander-sharp 
这是一个图片处理工具，使用命令行来处理图片(Demo测试中)
## 基本信息
当前版本`Version 1.0.0-alpha.1`
## 可处理类型的支持情况
| 种类  | 是否支持 |
| :---: | :------: |
|  png  |    yes    |
|  jpg  |    yes    |

## 安装
### 通过npm
`npm install --global commander-sharp`

### 通过github
下载仓库后，通过 npm link 即可

## 帮助
`cst help`

## 常用的命令
### 压缩图片
`cst compress <path>`,
#### 设置
1. `--quality <number | string>`:压缩率，默认70
2. `--out <path>`:压缩完成输出的文件夹

### 旋转图片
`cst rotate <path>`
#### 设置
1. `--degree <number>`:旋转角度,默认90度

## 其他命令
### 查看可处理的图片类型
`cst config-type [string]`