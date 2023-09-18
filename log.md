<!-- 直接压缩对应图片 -->
cst compress demo.png 
cst compress demo.png 70
<!-- 需要压缩目录 -->
cst compress "./demo" 70 newfiles    压缩./demo目录，每张图片压缩率70, 完成的图片放置到newfiles文件夹
cst compress //压缩本目录的所有文件，并且其他配置按照默认来


cst replaceColor --targetColor [string] --newColor [string] --range [5] [target] [output] 


计划表
### v1.0.4， 
[x] 优化代码逻辑
[x] 解耦部分代码
[x] 制作一些公共组件库文件

### v1.0.5 
[x] 增加图片旋转功能 `cst rotate a.png b.png --angle 90 --background #ff0000`
[ ] 完成`config-type`命令
[x] 优化代码逻辑
[x] fixed:commander 无法使用负数参数
[ ] 增加图片resize功能 
[ ] 增加图片裁剪功能



### v1.0.6
[ ] 优化命令使用

### v1.0.7
