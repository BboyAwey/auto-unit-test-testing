describe('index.js', function () {

  var Constructor = function (actualRes) {
    this.actualRes = actualRes
  }
  Constructor.prototype.toBe = function (expectRes) {
    var res = this.actualRes === expectRes? 'passed':'failed'
    console.log(res)
  }

  var expect = function (actualRes) {
    return new Constructor(actualRes)
  }
  
  expect(isNum(1)).toBe(true)
  expect(isNum('1')).toBe(false)
})