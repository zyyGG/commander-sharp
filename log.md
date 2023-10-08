## 计划表
### v1.0.4， 
[x] 优化代码逻辑
[x] 解耦部分代码
[x] 制作一些公共组件库文件

### v1.0.5 
[x] 增加图片旋转功能 `cst rotate a.png b.png --angle 90 --background #ff0000`
[x] 完成`config-type`命令
[x] 优化代码逻辑
[x] fixed:commander 无法使用负数参数

### v1.0.6
[x] 增加图片resize功能 
[x] 增加图片CanvasResize功能,画布修改
[x] 增加图片裁剪功能
[ ] 图片模糊blur

### 未来版本内容
[ ] 异形裁剪，例如三角形，圆形，或者path路径
[ ] 强化命令使用
[ ] 函数重载
[ ] 引入ts
[ ] 代码打包
[ ] 修改图片整体对比度
[ ] 修改图片的灰度
[ ] 批量打包图片，cst zip ./，压缩文件夹内的所有文件

### resize功能设计
cst resize a.png 1080 1920 b.png


## 设计原则 
* 可变参数不多于四个， 否则难以管理
<!-- 直接压缩对应图片 -->
cst compress demo.png 

cst compress demo.png 70

<!-- 需要压缩目录 -->

cst compress "./demo" 70 newfiles    压缩./demo目录，每张图片压缩率70, 完成的图片放置到newfiles文件夹

cst compress //压缩本目录的所有文件，并且其他配置按照默认来


cst replaceColor --targetColor [string] --newColor [string] --range [5] [target] [output] 

### 旋转命令强化
cst rotate A.jpg 90 //-->A.jpg旋转90度
cst rotate A.jpg 90 B.jpg //-->A.jpg 旋转90度 然后保存成为B.jpg
cst rotate A.jpg B.jpg //-->A.jpg 选装默认角度 然后保存为B.jpg
cst rptate A.jpg 

### 压缩命令强化
cst compress A.jpg 90 //-->A.jpg 压缩90% 覆盖自身
cst compress A.jpg 90 B.jpg
cst compress A.jpg B.jpg
cst compress A.jpg //-->按照默认压缩率压缩，然后覆盖自身

### replaceColor 命令强化
cst replaceColor A.jpg                              //-->error 无效命令，缺失了替换的颜色
cst replaceColor A.jpg white                        //-->更改A.jpg 所有像素为#ffffff像素，默认模糊范围,并且覆盖自身
cst replaceColor A.jpg white red                    //-->更改A.jpg 中的所有#ffffff像素。将其替换为#ff0000, 默认模糊范围, 并且覆盖自身
cst replaceColor A.jpg white B.jpg                  //-->更改A.jpg 中的所有像素为#ffffff，默认模糊范围,并且保存为B.jpg
cst replaceColor A.jpg white red B.jpg 
cst replaceColor A.jpg white red B.jpg --range 20   //-->20的模糊范围

### resize 命令强化
cst resize A.jpg 1080                         //-->修改A.jpg 宽为1080
cst resize A.jpg 1080 1920                    //-->修改A.jpg 宽为1080，高是1920
cst resize A.jpg 1080 B.jpg                   //-->修改A.jpg 宽为1080, 保存为B.jpg
cst resize A.jpg 1080 1920 B.jpg



