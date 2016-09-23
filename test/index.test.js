import Index from '../src/index'
console.log('开始测试')
describe('index.js的测试', function () {
  it('1应该是数字', function() {
      // expect(isNum(1)).to.be.true
      Index.isNum(1).should.equal(true)
  })
  it('"1" 应该是字符', function() {
      // expect(isString('1')).to.be.true
      Index.isString('1').should.equal(true)
  })
})
describe('二进制和十进制互转测试', function () {
  it('1101010转换为十进制应该是106', function() {
    Index.decimalism('1101010').should.equal(106)
  })
  it('106转换为二进制应该是1101010', function() {
    Index.binary(106).should.equal('1101010')
  })
})