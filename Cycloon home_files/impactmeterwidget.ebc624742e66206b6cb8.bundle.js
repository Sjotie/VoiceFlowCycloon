(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impactmeterwidget"],{

/***/ "./assets/js/main/modules/impactmeterwidget/index.js":
/*!***********************************************************!*\
  !*** ./assets/js/main/modules/impactmeterwidget/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImpactmeterWidget; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/module */ "./assets/js/main/core/module/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ImpactmeterWidget = /*#__PURE__*/function (_Core) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ImpactmeterWidget, _Core);
  var _super = _createSuper(ImpactmeterWidget);
  function ImpactmeterWidget() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImpactmeterWidget);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImpactmeterWidget, [{
    key: "init",
    value: function init() {
      var _this = this;
      var initDeliveryService = 'pakketten';
      if (this.$el.data('deliveryservice')) {
        initDeliveryService = this.$el.data('deliveryservice');
      }
      if (this.$el.data('impactmeterpath')) {
        this.impactmeterPath = this.$el.data('impactmeterpath');
      } else {
        this.impactmeterPath = 'https://cycloon.eu/impactmeter';
      }
      this.$activeTab = this.$el.find("[data-tabid='".concat(initDeliveryService, "']"));
      this.$activeTab.addClass('impactmeter-widget-panel__tab--active');
      this.$activeForm = this.$el.find("[data-formid='".concat(initDeliveryService, "']"));
      this.$activeForm.addClass('impactmeter-widget-panel__content--active');
      this.$el.find('.impactmeter-widget-panel__tab').on('click', function (e) {
        var tabID = $(e.target).data('tabid');
        _this.$activeForm = _this.$el.find("[data-formid='".concat(tabID, "']"));
        _this.$el.find('.impactmeter-widget-panel__tab').removeClass('impactmeter-widget-panel__tab--active');
        $(e.target).addClass('impactmeter-widget-panel__tab--active');
        _this.$el.find('.impactmeter-widget-panel__content').removeClass('impactmeter-widget-panel__content--active');
        _this.$activeForm.addClass('impactmeter-widget-panel__content--active');
      });
      this.$el.find('.impactmeter-widget-panel__form .btn').on('click', function (e) {
        e.preventDefault();
        var packages = 0;
        var post = 0;
        var hasPackages = false;
        var hasPost = false;
        var packagesInput = $(e.target).parent().find('#pakketten_input').val();
        var postInput = $(e.target).parent().find('#post_input').val();
        if (packagesInput) {
          hasPackages = true;
          packages = packagesInput;
        }
        if (postInput) {
          hasPost = true;
          post = postInput;
        }
        var impactInputdata = {
          packages: packages,
          post: post,
          hasPackages: hasPackages,
          hasPost: hasPost
        };
        localStorage.setItem('impactdata', JSON.stringify(impactInputdata));
        if (hasPackages !== false || hasPost !== false) {
          // Prevent setItem if input is empty, so user will be redirected to first step
          sessionStorage.setItem('impactdata', JSON.stringify(impactInputdata));
        }
        window.location.href = _this.impactmeterPath;
      });
    }
  }]);
  return ImpactmeterWidget;
}(_core_module__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=impactmeterwidget.ebc624742e66206b6cb8.bundle.js.map