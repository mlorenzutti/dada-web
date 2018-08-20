module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_actions_wishlistActions__ = __webpack_require__("./redux/actions/wishlistActions.js");
var _jsxFileName = "/Users/mattialorenzutti/Projects/dada-web/components/product.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Product =
/*#__PURE__*/
function (_Component) {
  _inherits(Product, _Component);

  function Product() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Product);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Product.__proto__ || Object.getPrototypeOf(Product)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "_isInWishlist", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(product) {
        var result = _this.props.wishlistStore.products.find(function (item) {
          return item.id == product.id;
        });

        return result != undefined;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_renderWishlistButton", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(product) {
        var isInWishlist = _this._isInWishlist(product);

        if (isInWishlist) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            onClick: function onClick() {
              return _this.props.removeFromWishlist(_this.props.userStore.user.uid, product);
            },
            className: "btn btn-primary ml-2 d-inline-block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
            className: "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }, "favorite"));
        } else {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            onClick: function onClick() {
              return _this.props.addToWishlist(_this.props.userStore.user.uid, product);
            },
            className: "btn btn-primary ml-2 d-inline-block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
            className: "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, "favorite_border"));
        }
      }
    }), _temp));
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card card--product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card__button text-nowrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: product.post.amazon_link,
        target: "_blank",
        className: "btn btn-primary d-inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Buy on Amazon"), this._renderWishlistButton(product)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card__price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, product.post.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card__image",
        style: {
          backgroundImage: "url(".concat(product.post.image, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card__brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "by ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, product.post.brand)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "card__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, product.post.name));
    }
  }]);

  return Product;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
  return {
    userStore: state.userReducer,
    wishlistStore: state.wishlistReducer
  };
}, {
  addToWishlist: __WEBPACK_IMPORTED_MODULE_2__redux_actions_wishlistActions__["b" /* addToWishlist */],
  removeFromWishlist: __WEBPACK_IMPORTED_MODULE_2__redux_actions_wishlistActions__["d" /* removeFromWishlist */]
})(Product));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_actions_productsActions__ = __webpack_require__("./redux/actions/productsActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions_userActions__ = __webpack_require__("./redux/actions/userActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions_wishlistActions__ = __webpack_require__("./redux/actions/wishlistActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_style_scss__ = __webpack_require__("./style/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_product__ = __webpack_require__("./components/product.js");
var _jsxFileName = "/Users/mattialorenzutti/Projects/dada-web/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      backgroundSize: 'contain',
      paddingTop: '70%' // 16:9

    }
  };
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchProducts();
      this.props.fetchUser();

      if (this.props.userStore.user != null) {
        this.props.fetchWishlist(this.props.userStore.user.uid);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.userStore.user == null && this.props.userStore.user != null) {
        this.props.fetchWishlist(this.props.userStore.user.uid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bg-light py-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col py-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Handcrafted products from ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Amazon"), " selected for you"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.props.productsStore.products.map(function (item, key) {
        if (key % 13 === 0) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "col-sm-12 mt-4 mb-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "bg-white",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "col-sm-6",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            style: {
              height: 300,
              backgroundImage: "url(https://cdn.mos.cms.futurecdn.net/yGg9PE8Dv2WgpDTtYCAMa-970-80.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "col-sm-6 pt-4 px-4 d-flex flex-column justify-content-between",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, "Best Mirrorless Cameras 2018")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }, "Our expert guide will help you choose the best mirrorless camera for you"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            href: "#",
            className: "btn btn-primary btn-sm",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, "Read more")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "d-flex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "card-mini bg-white p-3 mr-3 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            src: "https://images-na.ssl-images-amazon.com/images/I/81SmMdtAzAL._AC_UL140_SR140,140_.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }, "Sony")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
            "class": "d-inline-block text-truncate w-100",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }, "a7R III 42.4MP Full-Frame Mirrorless Interchangeable-Lens Camera")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "card-mini bg-white p-3 mr-3 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            src: "https://images-na.ssl-images-amazon.com/images/I/81SmMdtAzAL._AC_UL140_SR140,140_.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, "Sony")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
            "class": "d-inline-block text-truncate w-100",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }, "a7R III 42.4MP Full-Frame Mirrorless Interchangeable-Lens Camera")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "card-mini bg-white p-3 mr-3 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            src: "https://images-na.ssl-images-amazon.com/images/I/81SmMdtAzAL._AC_UL140_SR140,140_.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, "Sony")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
            "class": "d-inline-block text-truncate w-100",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }, "a7R III 42.4MP Full-Frame Mirrorless Interchangeable-Lens Camera")))))));
        } else {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "col-sm-4",
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_product__["a" /* default */], {
            product: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          }));
        }
      })))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
  return {
    productsStore: state.productsReducer,
    userStore: state.userReducer
  };
}, {
  fetchProducts: __WEBPACK_IMPORTED_MODULE_2__redux_actions_productsActions__["b" /* fetchProducts */],
  fetchUser: __WEBPACK_IMPORTED_MODULE_3__redux_actions_userActions__["b" /* fetchUser */],
  fetchWishlist: __WEBPACK_IMPORTED_MODULE_4__redux_actions_wishlistActions__["c" /* fetchWishlist */]
})(Index));

/***/ }),

/***/ "./redux/actions/productsActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchProducts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_db__ = __webpack_require__("./utils/db.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var FETCH_PRODUCTS = 'FETCH_PRODUCTS';
var fetchProducts = function fetchProducts() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var fb;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_db__["a" /* loadFirebase */])();

              case 2:
                fb = _context.sent;
                fb.firestore().collection('products').orderBy('added_on', 'desc').onSnapshot(function (snapshot) {
                  var newState = [];
                  snapshot.forEach(function (doc) {
                    newState.push({
                      id: doc.id,
                      post: doc.data()
                    });
                  });
                  dispatch({
                    type: FETCH_PRODUCTS,
                    payload: newState
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./redux/actions/userActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_db__ = __webpack_require__("./utils/db.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var FETCH_USER = 'FETCH_USER';
var fetchUser = function fetchUser() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var fb;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_db__["a" /* loadFirebase */])();

              case 2:
                fb = _context.sent;
                fb.auth().signInAnonymously().catch(function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode, errorMessage); // ...
                });
                fb.auth().onAuthStateChanged(function (user) {
                  if (user && user !== undefined) {
                    // User is signed in.
                    var userPayload = {
                      isAnonymous: user.isAnonymous,
                      uid: user.uid
                    };
                    dispatch({
                      type: FETCH_USER,
                      payload: userPayload
                    }); // ...
                  } else {} // User is signed out.
                    // ...
                    // ...

                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./redux/actions/wishlistActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_WISHLIST; });
/* unused harmony export ADD_PRODUCT */
/* unused harmony export REMOVE_PRODUCT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeFromWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addToWishlist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_db__ = __webpack_require__("./utils/db.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var FETCH_WISHLIST = 'FETCH_WISHLIST';
var ADD_PRODUCT = 'ADD_PRODUCT';
var REMOVE_PRODUCT = 'REMOVE_PRODUCT';
var fetchWishlist = function fetchWishlist(uid) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var fb;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_db__["a" /* loadFirebase */])();

              case 2:
                fb = _context.sent;
                console.log(uid);
                fb.firestore().collection('users').doc(uid).collection('wishlist').orderBy("saved_on", "desc").onSnapshot(function (snapshot) {
                  var newState = [];
                  snapshot.forEach(function (doc) {
                    newState.push({
                      id: doc.id,
                      post: doc.data()
                    });
                  });
                  dispatch({
                    type: FETCH_WISHLIST,
                    payload: newState
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var removeFromWishlist = function removeFromWishlist(uid, product) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var fb;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_db__["a" /* loadFirebase */])();

              case 2:
                fb = _context2.sent;
                fb.firestore().collection('users').doc(uid).collection('wishlist').doc(product.id).delete().then(function () {
                  console.log("Document successfully deleted!");
                  dispatch({
                    type: REMOVE_PRODUCT
                  });
                }).catch(function (error) {
                  console.error("Error deleting document: ", error);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var addToWishlist = function addToWishlist(uid, product) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        var fb, productPost;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_db__["a" /* loadFirebase */])();

              case 2:
                fb = _context3.sent;
                productPost = {
                  'image': product.post.image,
                  'brand': product.post.brand,
                  'amazon_link': product.post.amazon_link,
                  'name': product.post.name,
                  'price': product.post.price,
                  // replace with Firestore server timestamp when implemented in Flutter
                  'saved_on': Date.now()
                };
                fb.firestore().collection('users').doc(uid).collection('wishlist').doc(product.id).set(productPost).then(function () {
                  console.log("Document successfully written!");
                  dispatch({
                    type: ADD_PRODUCT
                  });
                }).catch(function (error) {
                  console.error("Error writing document: ", error);
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./style/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadFirebase;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__("@firebase/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firestore__ = __webpack_require__("@firebase/firestore");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_auth__ = __webpack_require__("@firebase/auth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__firebase_auth__);



var config = {
  apiKey: "AIzaSyDKM3Tjm7aGKUx86JrNXTVt7zcZ4-0R1Bk",
  authDomain: "dada-ism.firebaseapp.com",
  databaseURL: "https://dada-ism.firebaseio.com",
  projectId: "dada-ism",
  storageBucket: "dada-ism.appspot.com",
  messagingSenderId: "632379132030"
};
function loadFirebase() {
  try {
    __WEBPACK_IMPORTED_MODULE_0__firebase_app___default.a.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return __WEBPACK_IMPORTED_MODULE_0__firebase_app___default.a;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@firebase/app":
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/auth":
/***/ (function(module, exports) {

module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/firestore":
/***/ (function(module, exports) {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map