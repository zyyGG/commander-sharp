# Commander-sharp 
这是一个图片处理工具，使用命令行来处理图片
## 基本信息
当前版本`Version 1.0.0-alpha.1`
## 可处理类型的支持情况
| 种类  | 是否支持 |
| :---: | :------: |
|  png  |   yes    |
|  jpg  |   yes    |
| webp  |   yes    |

## 安装
***
### 通过npm
（版本可能没有github上的新）
`npm install --global commander-sharp`

***
### 通过github
下载仓库后，通过 npm link 即可

***
## 帮助
`cst help`
## 命令
### 压缩图片
`cst compress [path] [-o] [-q]`,
#### options
* `-q , --quality [string]` 压缩率，值越高，压缩的越严重。default:30
* `-o , --out <path>` 压缩完成输出的文件夹 default:覆盖原文件
#### examples
* `cst compress`
* `cst compress "./"` 
* `cst compress "a.png` 
* `cst compress "./folder/a.png"`  
* `cst compress "a.png" -q 90`
* `cst compress "a.png" -o "./demo"`

***
### 将图片中的指定颜色换成另一种颜色
`cst replaceColor <path> <newColor> [--color] [--range] [--out]`
#### options
* `-c, --color [string]` 需要替换的颜色,default:颜色全部替换
* `-r, --range [number]` 模糊匹配范围,值越高，模糊查找的范围就越大,0-255，default:5
* `-o, --out [string]` 压缩完成输出的文件夹 default:覆盖原文件

#### examples
* `cst replaceColor "a.png" white` 替换a.png所有的颜色为白色
* `cst replaceColor "a.png" #ff0000` 替换a.png所有的颜色为红色
* `cst replaceColor "a.png" white -o "./demo"` 处理的完成的图片会被复制到`./demo/a.png`


***
## 其他命令
### 查看可处理的图片类型
`cst config-type [string]`

## 更新日志
[github](https://github.com/zyyGG/commander-sharp)
[日志](https://github.com/zyyGG/commander-sharp/blob/master/log.md)
