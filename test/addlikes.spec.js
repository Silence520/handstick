var addlikes = require('../addlikes.js');
var expect = require('chai').expect;
 describe('点赞测试测试',function() {

	it('第一次点击应该等于1',function() {
		expect(addlikes(0)).to.be.equal(1);
	});

	it('第十次点击应该等于10',function() {
		expect(addlikes(9)).to.be.equal(10);
	});

	// it('第十一次点击应该等于1',function() {
	// 	expect(addlikes(10)).to.be.equal(1);
	// });
	
	it('如果参数不为number类型这返回0',function() {
		expect(addlikes('1')).to.be.equal('error');
		expect(addlikes('hello')).to.be.equal('error');
	});
});