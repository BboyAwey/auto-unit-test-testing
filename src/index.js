function isNum (num) {
  return typeof num === 'number'
}
function isString (str) {
  return typeof str === 'string'
}
function binary (decimalismNum) {
  // 十进制转二进制
  let tempNum = Number(decimalismNum)
  let res = []
  while(tempNum >= 1) {
    let remainder = tempNum % 2
    res.unshift(remainder)
    tempNum = parseInt(tempNum / 2)
  }
  return String(res.join(''))
}
function decimalism (binaryNum) {
  // 二进制转十进制
  let tempStr = String(binaryNum)
  let res = 0
  tempStr.split('').forEach((e, i) => {
    res += e * window.Math.pow(2, tempStr.length-i-1)
  })
  return res
}
export default {
  isNum,
  isString,
  binary,
  decimalism,
}