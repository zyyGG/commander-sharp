let target = {
  png: {
    compress: true, //压缩
    rotate: true, //旋转
  },
  jpg: {
    compress: true,
    rotate: true,
  }
}
function getConfigType(str) {
  // 展示可处理列表
  try {
    if (str === undefined) {
      console.table(target)
    } else {
      console.table(target[str])
    }
  } catch (e) {
    console.error(e)
  }
}

module.exports = getConfigType

