webpackHotUpdate(6,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Dialog__ = __webpack_require__("./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle__ = __webpack_require__("./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogContent__ = __webpack_require__("./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_DialogContentText__ = __webpack_require__("./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_DialogContentText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_DialogContentText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_DialogActions__ = __webpack_require__("./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_DialogActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_DialogActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_link__);
var _jsxFileName = "/Users/mattialorenzutti/Projects/dada-web/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable jsx-a11y/anchor-is-valid */











var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: 20
    }
  };
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var open = this.state.open;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Dialog___default.a, {
        open: open,
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_DialogTitle___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Super Secret Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_DialogContent___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_DialogContentText___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "1-2-3-4-5")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_DialogActions___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Button___default.a, {
        color: "primary",
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "OK"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
        variant: "display1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Material-UI"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
        variant: "subheading",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "example project"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Go to the about page"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Button___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Super Secret Password"));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__["withStyles"])(styles)(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.c5c2b5d29bc2e9ef4179.hot-update.js.map