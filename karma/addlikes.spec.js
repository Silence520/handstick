// var addlikes = require('../addlikes.js');
// import {addlikes} from '../addlikes.js';



// describe("A suite of basic functions", function () {
// 	    it("第二次点击等于2", function () {
// 	    	console.log(addlikes(1))
// 	        expect(addlikes(1)).toEqual(2);
// 	           // expect(isNum(1)).toBe
// 	    });
// });




describe('index.js: ', function() {
  it('isNum() should work fine.', function() {
	    expect(isNum(1)).toBe(true)
	    expect(isNum('1')).toBe(false)
  })
})