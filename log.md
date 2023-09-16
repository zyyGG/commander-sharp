<!-- 直接压缩对应图片 -->
cst compress demo.png 
cst compress demo.png 70
<!-- 需要压缩目录 -->
cst compress "./demo" 70 newfiles    压缩./demo目录，每张图片压缩率70, 完成的图片放置到newfiles文件夹
cst compress //压缩本目录的所有文件，并且其他配置按照默认来


cst replaceColor --targetColor [string] --newColor [string] --range [5] [target] [output] 
