var app =
webpackJsonp_name_([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Pappw = __webpack_require__(172);
	
	var _Pappw2 = _interopRequireDefault(_Pappw);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function panel() {
		_reactDom2.default.render(_react2.default.createElement(_Pappw2.default, null), document.getElementById('container'));
	}
	
	document.addEventListener('DOMContentLoaded', panel());

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Init = __webpack_require__(173);
	
	var _Init2 = _interopRequireDefault(_Init);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Home from './Home';
	
	
	var Papp = function (_React$Component) {
		_inherits(Papp, _React$Component);
	
		function Papp(props) {
			_classCallCheck(this, Papp);
	
			var _this = _possibleConstructorReturn(this, (Papp.__proto__ || Object.getPrototypeOf(Papp)).call(this, props));
	
			_this.state = { init: true };
			return _this;
		}
	
		_createClass(Papp, [{
			key: 'setStore',
			value: function setStore(store) {
				this.setState(store);
			}
		}, {
			key: 'showThing',
			value: function showThing(newState) {
				var mergedState = Object.assign(this.state, newState);
				this.setState(mergedState);
			}
		}, {
			key: 'render',
			value: function render() {
				if (this.state.init) {
					return _react2.default.createElement(_Init2.default, null);
				}
			}
		}]);
	
		return Papp;
	}(_react2.default.Component);
	
	exports.default = Papp;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Init = function (_React$Component) {
		_inherits(Init, _React$Component);
	
		function Init() {
			_classCallCheck(this, Init);
	
			return _possibleConstructorReturn(this, (Init.__proto__ || Object.getPrototypeOf(Init)).apply(this, arguments));
		}
	
		_createClass(Init, [{
			key: "render",
			value: function render() {
				var projectName = ["Photorealistic_Drum", "Tesla_Model_S", "Ford_GT_2017", "Piano_Concept", "Black_Sabr_Branding", "VolksWagen_Scirocco", "VolksWagen_Beetle", "Seat_Ibiza_Contest_Prototype", "Logo_Showreel", "Blitzkrieg_Breakfast_Steam_Profiles", "Videogame_Assets"];
	
				var img = void 0;
				return _react2.default.createElement(
					"div",
					null,
					projectName.map(function (proj) {
						return _react2.default.createElement(
							"div",
							{ className: "card", key: proj },
							_react2.default.createElement(
								"div",
								{ className: "card-image" },
								_react2.default.createElement("img", { src: "img/" + decodeURIComponent(proj) + "/Cover.png", alt: proj }),
								_react2.default.createElement(
									"span",
									{ className: "card-title" },
									proj
								)
							)
						);
					})
				);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				/*
	   let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	   let circle = document.querySelectorAll('#home_circle')[0];
	   circle.childNodes[0].className = "animated fadeIn";
	   */
			}
		}]);
	
		return Init;
	}(_react2.default.Component);
	
	exports.default = Init;

/***/ }

});
//# sourceMappingURL=app.bundle.js.map