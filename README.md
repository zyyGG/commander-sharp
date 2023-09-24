# Commander-sharp 
这是一个图片处理工具，使用命令行来处理图片
## 可处理类型的支持情况
| 种类  | 是否支持 |
| :---: | :------: |
|  png  |   yes    |
|  jpg  |   yes    |
| webp  |   yes    |

## 安装(install)
### npm
* `npm install --global commander-sharp`
* 命令行输入`cst --version`，如果看到有输出则安装成功

***
### github
* `git clone https://github.com/zyyGG/commander-sharp.git`
* `npm install` 
* `npm link`
* 命令行输入`cst --version`，如果看到有输出则安装成功

### 关于sharp的安装问题
***如果出现sharp安装失败的问题，可以采取sharp官方提供的建议***
* npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
* npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
* npm i --global commander-sharp

***
## 帮助
`cst help`
## 命令
### 压缩图片（compress）
`cst compress [input] [output]`,
#### 参数解析
* [input] 需要处理的对象，可以是文件也可以是目录，默认当前目录所有可处理的图片，default:"./"
* [output] 压缩完成输出的目录, 默认覆盖自身 default:"./"
*如果输入的`[input]`是一个文件，那么`[output]`就必须是一个文件名称，例如`cst compress demo.png newFileName.png`*

*如果输入的`[input]`是一个目录，那么`[output]`就必须是一个目录名称，例如`cst compress fileFolder newFileFolder`*
#### options
* `quality`, 图片的压缩质量,值越大，压缩效果越厉害，default: 80
#### examples
* `cst compress`
* `cst compress "./"` 
* `cst compress "a.png"` 
* `cst compress --quality 50 "./folder/a.png" "demo.png"` 
* `cst compress "./folder/a.png" "./newfolder/demo.png"`

***
### 将图片中的指定颜色换成另一种颜色（replaceColor）
`cst replaceColor [input] [output]`
#### options
* `--target-color [color]` 需要替换的颜色,default:颜色全部替换
* `--new-color [color]` 替换而成的新颜色,default:#ffffff
* `--range [number]` 模糊匹配范围,值越高，模糊查找的范围就越大,0-255，default:5

#### examples
* `cst replaceColor "a.png" "b.png"` 替换a.png所有的颜色为白色,并生成替换完成的b.png
* `cst replaceColor --new-color #ff0000 "a.png" "b.png"` 替换a.png所有的颜色为红色,并生成替换完成的b.png
* `cst replaceColor --new-color #ff0000 --target-color #000000 "a.png" "b.png"` 替换a.png的所有黑色像素为红色,并生成替换完成的b.png
* `cst replaceColor --new-color #ff0000 --target-color #000000 --range 20 "a.png" "b.png"` 替换a.png的所有黑色像素为红色,模糊搜索范围是20，并生成替换完成的b.png
***
### 旋转图片（rotate）
`cst rotate [input] [output]`
#### options
* `--angle [number]` 图片需要旋转的角度，整数顺时针旋转，负数逆时针旋转，默认90度
* `--background [color]` 图片旋转后的白色空白需要使用什么颜色填充，默认#ffffff

#### examples
* `cst rotate a.png --angle 60` 旋转a.png 60度,并且覆盖自身
* `cst rotate a.png b.png --angle 60` 旋转a.png 60度,并保存为b.png
* `cst rotate a.png b.png --background #ffffff` 旋转a.png 90度（默认度数），因为旋转暴露出的区域用#ffffff填充，并保存为b.png

#### note
*如果不指定`--angle`，那么图片将会旋转90度*
*不要多次旋转图片，最好一次旋转到位*

***
### 修改图片大小（resize）
`cst resize [input] [output] --width [number] -height [number] --fit [string] --position [string] --bakcground [string]`
#### options
* `--width [number]` 图片的宽度
* `--height [number]` 图片的高度
* `--fit [string]` 决定了图片在被调整尺寸后的行为，可选值：cover, contain, fill, inside, outside, 默认cover
* `--position [string]` 如果`fit`设置了`contain`,`fit`那么这个参数才会生效，可选值：`top`, `right`, `left`, `bottom`,`centre`。默认`centre`，你也可以组合他们
* `--bakcground` 如果`fit`设置了`contain`或者其他设置到了图片露出空白的情况，那么这个参数就会生效，用来填充空白的颜色，默认#ffffff
#### examples
* `cst resize a.png b.png --width 1080 --height 1920` 将a.png的宽度修改为1080，高度修改为1920，并保存为b.png
* `cst resize a.png b.png --width 1080` 将a.png的宽度修改为1080，高度按照比例缩放，并保存为b.png

***
## 其他命令
### 查看可处理的图片类型
`cst config-type [string]`

## github
[commander-sharp](https://github.com/zyyGG/commander-sharp)
[sharp](https://github.com/lovell/sharp)

