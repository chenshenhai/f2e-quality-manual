const chai = require('chai');
const expect = chai.expect;

// 测试套件/组
describe('test: index2', ( ) => {
  
  // 测试用例
  it('demo', (done) => {
    expect('1').to.be.an('string')
    done();
  })
})