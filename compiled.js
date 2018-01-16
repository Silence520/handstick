'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Praisebutton = function () {
	function Praisebutton(num) {
		_classCallCheck(this, Praisebutton);

		this.num = num;
	}

	_createClass(Praisebutton, [{
		key: 'add',
		value: function add() {
			return this.num + 1;
		}
	}]);

	return Praisebutton;
}();

var Thumb = function (_Praisebutton) {
	_inherits(Thumb, _Praisebutton);

	function Thumb(num) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));
	}

	_createClass(Thumb, [{
		key: 'dianzan',
		value: function dianzan() {
			var newnum = this.add();
			console.log('小手点赞' + newnum);
			return newnum;
		}
	}]);

	return Thumb;
}(Praisebutton);

module.exports = addzan = function addzan(num) {
	return new Thumb(num).dianzan();
};
