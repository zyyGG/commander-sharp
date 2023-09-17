<!-- 直接压缩对应图片 -->
cst compress demo.png 
cst compress demo.png 70
<!-- 需要压缩目录 -->
cst compress "./demo" 70 newfiles    压缩./demo目录，每张图片压缩率70, 完成的图片放置到newfiles文件夹
cst compress //压缩本目录的所有文件，并且其他配置按照默认来


cst replaceColor --targetColor [string] --newColor [string] --range [5] [target] [output] 


计划表
v1.0.4， 
* 优化代码逻辑
* 解耦部分代码
* 制作一些公共组件库文件

v1.0.5 
* 增加图片旋转功能 `cst rotate a.png b.png --degree 90`

v1.0.6
* 增加图片resize功能 
  * `cst resize a.png b.png` 没什么变化
  * `cst resize a.png b.png --type cover --width 100 --height 200`

v1.0.7
* 增加图片裁剪功能
  * `cst exerct a.png b.png rect 0 0 50% 50%`
  * `cst exerct a.png b.png circle 50% 50% 100%`
  * `cst exerct a.png b.png trigle [0,0,20,20,40,40]`