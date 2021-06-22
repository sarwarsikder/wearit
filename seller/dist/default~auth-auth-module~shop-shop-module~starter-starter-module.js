(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module~shop-shop-module~starter-starter-module"],{

/***/ "bH2/":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js ***!
  \***********************************************************************************************/
/*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function() { return AutocompleteLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function() { return AutocompleteLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var _c0 = ["searchInput"];
var _c1 = ["filteredListElement"];
var _c2 = ["historyListElement"];

function AutocompleteComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r11.remove($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function AutocompleteComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function AutocompleteComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.heading);
  }
}

function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

var _c3 = function _c3(a0) {
  return {
    $implicit: a0
  };
};

function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r18.select(item_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var idx_r14 = ctx_r21.index;
    var item_r13 = ctx_r21.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
  }
}

function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r23.select(item_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var idx_r14 = ctx_r26.index;
    var item_r13 = ctx_r26.$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
  }
}

function AutocompleteComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r13 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isTypeString(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.isTypeString(item_r13));
  }
}

function AutocompleteComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r27.resetHistoryList($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
  }
}

function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r34.select(item_r29);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var idx_r30 = ctx_r37.index;
    var item_r29 = ctx_r37.$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c3, item_r29));
  }
}

function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r39.select(item_r29);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var idx_r30 = ctx_r42.index;
    var item_r29 = ctx_r42.$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c3, item_r29));
  }
}

function AutocompleteComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      var idx_r30 = ctx.index;
      var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r43.removeHistoryItem(idx_r30, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r29 = ctx.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.isTypeString(item_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.isTypeString(item_r29));
  }
}

function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
  }
}

function AutocompleteComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r46.handleOverlay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

var _c4 = function _c4(a0) {
  return {
    "active": a0
  };
};

var _c5 = function _c5(a0, a1) {
  return {
    "is-hidden": a0,
    "is-visible": a1
  };
};

var AutocompleteLibComponent = /*#__PURE__*/function () {
  function AutocompleteLibComponent() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteLibComponent);
  }
  /**
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AutocompleteLibComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AutocompleteLibComponent;
}();

AutocompleteLibComponent.ɵfac = function AutocompleteLibComponent_Factory(t) {
  return new (t || AutocompleteLibComponent)();
};

AutocompleteLibComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AutocompleteLibComponent,
  selectors: [["ng-autocomplete-lib"]],
  decls: 2,
  vars: 0,
  template: function AutocompleteLibComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " autocomplete-lib works! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
/** @nocollapse */

AutocompleteLibComponent.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutocompleteLibComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'ng-autocomplete-lib',
      template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Keyboard events
 * @type {?}
 */


var isArrowUp =
/**
* @param {?} keyCode
* @return {?}
*/
function isArrowUp(keyCode) {
  return keyCode === 38;
};

var ɵ0 = isArrowUp;
/** @type {?} */

var isArrowDown =
/**
* @param {?} keyCode
* @return {?}
*/
function isArrowDown(keyCode) {
  return keyCode === 40;
};

var ɵ1 = isArrowDown;
/** @type {?} */

var isArrowUpDown =
/**
* @param {?} keyCode
* @return {?}
*/
function isArrowUpDown(keyCode) {
  return isArrowUp(keyCode) || isArrowDown(keyCode);
};

var ɵ2 = isArrowUpDown;
/** @type {?} */

var isEnter =
/**
* @param {?} keyCode
* @return {?}
*/
function isEnter(keyCode) {
  return keyCode === 13;
};

var ɵ3 = isEnter;
/** @type {?} */

var isBackspace =
/**
* @param {?} keyCode
* @return {?}
*/
function isBackspace(keyCode) {
  return keyCode === 8;
};

var ɵ4 = isBackspace;
/** @type {?} */

var isDelete =
/**
* @param {?} keyCode
* @return {?}
*/
function isDelete(keyCode) {
  return keyCode === 46;
};

var ɵ5 = isDelete;
/** @type {?} */

var isESC =
/**
* @param {?} keyCode
* @return {?}
*/
function isESC(keyCode) {
  return keyCode === 27;
};

var ɵ6 = isESC;
/** @type {?} */

var isTab =
/**
* @param {?} keyCode
* @return {?}
*/
function isTab(keyCode) {
  return keyCode === 9;
};

var ɵ7 = isTab;

var AutocompleteComponent = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   * @param {?} renderer
   */
  function AutocompleteComponent(elementRef, renderer) {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteComponent);

    this.renderer = renderer;
    this.query = ''; // search query
    // search query

    this.filteredList = []; // list of items
    // list of items

    this.historyList = []; // list of history items
    // list of history items

    this.isHistoryListVisible = true;
    this.selectedIdx = -1;
    this.toHighlight = '';
    this.notFound = false;
    this.isFocused = false;
    this.isOpen = false;
    this.isScrollToEnd = false;
    this.overlay = false;
    this.manualOpen = undefined;
    this.manualClose = undefined; // @Inputs

    /**
     * Data of items list.
     * It can be array of strings or array of objects.
     */

    this.data = []; // keyword to filter the list

    this.placeholder = '';
    this.heading = '';
    /**
     * Heading text of history list.
     * If it is null then history heading is hidden.
     */

    this.historyHeading = 'Recently selected';
    this.historyListMaxNumber = 15; // maximum number of items in the history list.
    // maximum number of items in the history list.

    this.notFoundText = 'Not found'; // set custom text when filter returns empty result
    // input disable/enable

    /**
     * The minimum number of characters the user must type before a search is performed.
     */

    this.minQueryLength = 1;
    /**
     * Focus first item in the list
     */

    this.focusFirst = false; // @Output events

    /**
     * Event that is emitted whenever an item from the list is selected.
     */

    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Event that is emitted whenever an input is changed.
     */

    this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Event that is emitted whenever an input is focused.
     */

    this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Event that is emitted whenever an input is cleared.
     */

    this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Event that is emitted when the autocomplete panel is opened.
     */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Event that is emitted when the autocomplete panel is closed.
     */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Event that is emitted when scrolled to the end of items.
     */

    this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * Propagates new value when model changes
     */

    this.propagateChange =
    /**
    * @return {?}
    */
    function () {};

    this.onTouched =
    /**
    * @return {?}
    */
    function () {};

    this.elementRef = elementRef;
  }
  /**
   * Writes a new value from the form model into the view,
   * Updates model
   * @param {?=} value
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AutocompleteComponent, [{
    key: "writeValue",
    value: function writeValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.query = value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
    }
    /**
     * Registers a handler that is called when something in the view has changed
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.propagateChange = fn;
    }
    /**
     * Registers a handler specifically for when a control receives a touch event
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Event that is called when the value of an input element is changed
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onChange",
    value: function onChange(event) {
      this.propagateChange(event.target.value);
    }
    /**
     * Event that is called when the control status changes to or from DISABLED
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.initEventStream();
      this.handleScroll();
    }
    /**
     * Set initial value
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setInitialValue",
    value: function setInitialValue(value) {
      if (this.initialValue) {
        this.select(value);
      }
    }
    /**
     * Update search results
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.setInitialValue(this.initialValue);

      if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
        this.handleItemsChange();

        if (!changes.data.firstChange && this.isFocused) {
          this.handleOpen();
        }
      }
    }
    /**
     * Items change
     * @return {?}
     */

  }, {
    key: "handleItemsChange",
    value: function handleItemsChange() {
      this.isScrollToEnd = false;

      if (!this.isOpen) {
        return;
      }

      this.filteredList = this.data;
      this.notFound = !this.filteredList || this.filteredList.length === 0; // Filter list when updating data and panel is open

      if (this.isOpen) {
        this.filterList();
      }
    }
    /**
     * Filter data
     * @return {?}
     */

  }, {
    key: "filterList",
    value: function filterList() {
      this.selectedIdx = -1;
      this.initSearchHistory();

      if (this.query != null && this.data) {
        this.toHighlight = this.query;
        this.filteredList = this.customFilter !== undefined ? this.customFilter(Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.data), this.query) : this.defaultFilterFunction(); // If [focusFirst]="true" automatically focus the first match

        if (this.filteredList.length > 0 && this.focusFirst) {
          this.selectedIdx = 0;
        }
      } else {
        this.notFound = false;
      }
    }
    /**
     * Default filter function, used unless customFilter is provided
     * @return {?}
     */

  }, {
    key: "defaultFilterFunction",
    value: function defaultFilterFunction() {
      var _this = this;

      return this.data.filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        if (typeof item === 'string') {
          // string logic, check equality of strings
          return item.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
        } else if (typeof item === 'object' && item instanceof Object) {
          // object logic, check property equality
          return item[_this.searchKeyword].toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
        }
      });
    }
    /**
     * Check if item is a string in the list.
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "isTypeString",
    value: function isTypeString(item) {
      return typeof item === 'string';
    }
    /**
     * Select item in the list.
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(item) {
      var _this2 = this;

      this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
      this.isOpen = true;
      this.overlay = false;
      this.selected.emit(item);
      this.propagateChange(item);

      if (this.initialValue) {
        // check if history already exists in localStorage and then update

        /** @type {?} */
        var history = window.localStorage.getItem("".concat(this.historyIdentifier));

        if (history) {
          /** @type {?} */
          var existingHistory = JSON.parse(localStorage["".concat(this.historyIdentifier)]);
          if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

          if (!existingHistory.some(
          /**
          * @param {?} existingItem
          * @return {?}
          */
          function (existingItem) {
            return !_this2.isTypeString(existingItem) ? existingItem[_this2.searchKeyword] == item[_this2.searchKeyword] : existingItem == item;
          })) {
            existingHistory.unshift(item);
            localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

            if (existingHistory.length >= this.historyListMaxNumber) {
              existingHistory.splice(existingHistory.length - 1, 1);
              localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory));
            }
          } else {
            // if selected item exists in existingHistory swap to top in array
            if (!this.isTypeString(item)) {
              // object logic

              /** @type {?} */
              var copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

              /** @type {?} */

              var selectedIndex = copiedExistingHistory.map(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                return el[_this2.searchKeyword];
              }).indexOf(item[this.searchKeyword]);
              copiedExistingHistory.splice(selectedIndex, 1);
              copiedExistingHistory.splice(0, 0, item);
              localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(copiedExistingHistory));
            } else {
              // string logic

              /** @type {?} */
              var _copiedExistingHistory = existingHistory.slice();

              _copiedExistingHistory.splice(_copiedExistingHistory.indexOf(item), 1);

              _copiedExistingHistory.splice(0, 0, item);

              localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(_copiedExistingHistory));
            }
          }
        } else {
          this.saveHistory(item);
        }
      } else {
        this.saveHistory(item);
      }

      this.handleClose();
    }
    /**
     * Document click
     * @param {?} e event
     * @return {?}
     */

  }, {
    key: "handleClick",
    value: function handleClick(e) {
      /** @type {?} */
      var clickedComponent = e.target;
      /** @type {?} */

      var inside = false;

      do {
        if (clickedComponent === this.elementRef.nativeElement) {
          inside = true;

          if (this.filteredList.length) {
            this.handleOpen();
          }
        }

        clickedComponent = clickedComponent.parentNode;
      } while (clickedComponent);

      if (!inside) {
        this.handleClose();
      }
    }
    /**
     * Handle body overlay
     * @return {?}
     */

  }, {
    key: "handleOverlay",
    value: function handleOverlay() {
      this.overlay = false;
    }
    /**
     * Scroll items
     * @return {?}
     */

  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var _this3 = this;

      this.renderer.listen(this.filteredListElement.nativeElement, 'scroll',
      /**
      * @return {?}
      */
      function () {
        _this3.scrollToEnd();
      });
    }
    /**
     * Define panel state
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "setPanelState",
    value: function setPanelState(event) {
      if (event) {
        event.stopPropagation();
      } // If controls are untouched


      if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
        this.isOpen = false;
        this.handleOpen();
      } // If one of the controls is untouched and other is deactivated


      if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
        this.isOpen = false;
        this.handleOpen();
      } // if controls are touched but both are deactivated


      if (this.manualOpen === false && this.manualClose === false) {
        this.isOpen = false;
        this.handleOpen();
      } // if open control is touched and activated


      if (this.manualOpen) {
        this.isOpen = false;
        this.handleOpen();
        this.manualOpen = false;
      } // if close control is touched and activated


      if (this.manualClose) {
        this.isOpen = true;
        this.handleClose();
        this.manualClose = false;
      }
    }
    /**
     * Manual controls
     * @return {?}
     */

  }, {
    key: "open",
    value: function open() {
      this.manualOpen = true;
      this.isOpen = false;
      this.handleOpen();
    }
    /**
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      this.manualClose = true;
      this.isOpen = true;
      this.handleClose();
    }
    /**
     * @return {?}
     */

  }, {
    key: "focus",
    value: function focus() {
      this.handleFocus(event);
    }
    /**
     * @return {?}
     */

  }, {
    key: "clear",
    value: function clear() {
      this.remove(event);
    }
    /**
     * Remove search query
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "remove",
    value: function remove(e) {
      e.stopPropagation();
      this.query = '';
      this.inputCleared.emit();
      this.propagateChange(this.query);
      this.setPanelState(e);

      if (this.data && !this.data.length) {
        this.notFound = false;
      }
    }
    /**
     * Initialize historyList search
     * @return {?}
     */

  }, {
    key: "initSearchHistory",
    value: function initSearchHistory() {
      this.isHistoryListVisible = false;

      if (this.historyIdentifier && !this.query) {
        /** @type {?} */
        var history = window.localStorage.getItem("".concat(this.historyIdentifier));

        if (history) {
          this.isHistoryListVisible = true;
          this.filteredList = [];
          this.historyList = history ? JSON.parse(history) : [];
        } else {
          this.isHistoryListVisible = false;
        }
      } else {
        this.isHistoryListVisible = false;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "handleOpen",
    value: function handleOpen() {
      if (this.isOpen || this.isOpen && !this.isLoading) {
        return;
      } // If data exists


      if (this.data && this.data.length) {
        this.isOpen = true;
        this.overlay = true;
        this.filterList();
        this.opened.emit();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "handleClose",
    value: function handleClose() {
      if (!this.isOpen) {
        this.isFocused = false;
        return;
      }

      this.isOpen = false;
      this.overlay = false;
      this.filteredList = [];
      this.selectedIdx = -1;
      this.notFound = false;
      this.isHistoryListVisible = false;
      this.isFocused = false;
      this.closed.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      this.searchInput.nativeElement.focus();

      if (this.isFocused) {
        return;
      }

      this.inputFocused.emit(e); // if data exists then open

      if (this.data && this.data.length) {
        this.setPanelState(event);
      }

      this.isFocused = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "scrollToEnd",
    value: function scrollToEnd() {
      if (this.isScrollToEnd) {
        return;
      }
      /** @type {?} */


      var scrollTop = this.filteredListElement.nativeElement.scrollTop;
      /** @type {?} */

      var scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
      /** @type {?} */

      var elementHeight = this.filteredListElement.nativeElement.clientHeight;
      /** @type {?} */

      var atBottom = scrollHeight === scrollTop + elementHeight;

      if (atBottom) {
        this.scrolledToEnd.emit();
        this.isScrollToEnd = true;
      }
    }
    /**
     * Initialize keyboard events
     * @return {?}
     */

  }, {
    key: "initEventStream",
    value: function initEventStream() {
      this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return e;
      }));
      this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return e;
      }));
      this.listenEventStream();
    }
    /**
     * Listen keyboard events
     * @return {?}
     */

  }, {
    key: "listenEventStream",
    value: function listenEventStream() {
      var _this4 = this;

      // key up event
      this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.debounceTime)).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        _this4.onKeyUp(e);
      }); // cursor up & down

      this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return isArrowUpDown(e.keyCode);
      })).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        e.preventDefault();

        _this4.onFocusItem(e);
      }); // enter keyup

      this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return isEnter(e.keyCode);
      })).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {//this.onHandleEnter();
      }); // enter keydown

      this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return isEnter(e.keyCode);
      })).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        _this4.onHandleEnter();
      }); // ESC

      this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return isESC(e.keyCode);
      }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100))).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        _this4.onEsc();
      }); // TAB

      this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return isTab(e.keyCode);
      })).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        _this4.onTab();
      }); // delete

      this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        return isBackspace(e.keyCode) || isDelete(e.keyCode);
      })).subscribe(
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        _this4.onDelete();
      });
    }
    /**
     * on keyup == when input changed
     * @param {?} e event
     * @return {?}
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      this.notFound = false; // search results are unknown while typing
      // if input is empty

      if (!this.query) {
        this.notFound = false;
        this.inputChanged.emit(e.target.value);
        this.inputCleared.emit();
        this.setPanelState(e);
      } // note that '' can be a valid query


      if (!this.query && this.query !== '') {
        return;
      } // if query >= to minQueryLength


      if (this.query.length >= this.minQueryLength) {
        this.inputChanged.emit(e.target.value);
        this.filterList(); // If no results found

        if (!this.filteredList.length && !this.isLoading) {
          this.notFoundText ? this.notFound = true : this.notFound = false;
        }

        if (this.data && !this.data.length) {
          this.isOpen = true;
        }
      }
    }
    /**
     * Keyboard arrow top and arrow bottom
     * @param {?} e event
     * @return {?}
     */

  }, {
    key: "onFocusItem",
    value: function onFocusItem(e) {
      // move arrow up and down on filteredList or historyList
      if (!this.historyList.length || !this.isHistoryListVisible) {
        // filteredList

        /** @type {?} */
        var totalNumItem = this.filteredList.length;

        if (e.key === 'ArrowDown') {
          /** @type {?} */
          var sum = this.selectedIdx;
          sum = this.selectedIdx === null ? 0 : sum + 1;
          this.selectedIdx = (totalNumItem + sum) % totalNumItem;
          this.scrollToFocusedItem(this.selectedIdx);
        } else if (e.key === 'ArrowUp') {
          if (this.selectedIdx == -1) {
            this.selectedIdx = 0;
          }

          this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
          this.scrollToFocusedItem(this.selectedIdx);
        }
      } else {
        // historyList

        /** @type {?} */
        var _totalNumItem = this.historyList.length;

        if (e.key === 'ArrowDown') {
          /** @type {?} */
          var _sum = this.selectedIdx;
          _sum = this.selectedIdx === null ? 0 : _sum + 1;
          this.selectedIdx = (_totalNumItem + _sum) % _totalNumItem;
          this.scrollToFocusedItem(this.selectedIdx);
        } else if (e.key === 'ArrowUp') {
          if (this.selectedIdx == -1) {
            this.selectedIdx = 0;
          }

          this.selectedIdx = (_totalNumItem + this.selectedIdx - 1) % _totalNumItem;
          this.scrollToFocusedItem(this.selectedIdx);
        }
      }
    }
    /**
     * Scroll to focused item
     * * \@param index
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "scrollToFocusedItem",
    value: function scrollToFocusedItem(index) {
      /** @type {?} */
      var listElement = null; // Define list element

      if (!this.historyList.length || !this.isHistoryListVisible) {
        // filteredList element
        listElement = this.filteredListElement.nativeElement;
      } else {
        // historyList element
        listElement = this.historyListElement.nativeElement;
      }
      /** @type {?} */


      var items = Array.prototype.slice.call(listElement.childNodes).filter(
      /**
      * @param {?} node
      * @return {?}
      */
      function (node) {
        if (node.nodeType === 1) {
          // if node is element
          return node.className.includes('item');
        } else {
          return false;
        }
      });

      if (!items.length) {
        return;
      }
      /** @type {?} */


      var listHeight = listElement.offsetHeight;
      /** @type {?} */

      var itemHeight = items[index].offsetHeight;
      /** @type {?} */

      var visibleTop = listElement.scrollTop;
      /** @type {?} */

      var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
      /** @type {?} */

      var targetPosition = items[index].offsetTop;

      if (targetPosition < visibleTop) {
        listElement.scrollTop = targetPosition;
      }

      if (targetPosition > visibleBottom) {
        listElement.scrollTop = targetPosition - listHeight + itemHeight;
      }
    }
    /**
     * Select item on enter click
     * @return {?}
     */

  }, {
    key: "onHandleEnter",
    value: function onHandleEnter() {
      // click enter to choose item from filteredList or historyList
      if (this.selectedIdx > -1) {
        if (!this.historyList.length || !this.isHistoryListVisible) {
          // filteredList
          this.query = !this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
          this.saveHistory(this.filteredList[this.selectedIdx]);
          this.select(this.filteredList[this.selectedIdx]);
        } else {
          // historyList
          this.query = !this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
          this.saveHistory(this.historyList[this.selectedIdx]);
          this.select(this.historyList[this.selectedIdx]);
        }
      }

      this.isHistoryListVisible = false;
      this.handleClose();
    }
    /**
     * Esc click
     * @return {?}
     */

  }, {
    key: "onEsc",
    value: function onEsc() {
      this.searchInput.nativeElement.blur();
      this.handleClose();
    }
    /**
     * Tab click
     * @return {?}
     */

  }, {
    key: "onTab",
    value: function onTab() {
      this.searchInput.nativeElement.blur();
      this.handleClose();
    }
    /**
     * Delete click
     * @return {?}
     */

  }, {
    key: "onDelete",
    value: function onDelete() {
      this.isOpen = true;
    }
    /**
     * Select item to save in localStorage
     * @param {?} selected
     * @return {?}
     */

  }, {
    key: "saveHistory",
    value: function saveHistory(selected) {
      var _this5 = this;

      if (this.historyIdentifier) {
        // check if selected item exists in historyList
        if (!this.historyList.some(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return !_this5.isTypeString(item) ? item[_this5.searchKeyword] == selected[_this5.searchKeyword] : item == selected;
        })) {
          this.saveHistoryToLocalStorage([selected].concat(Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.historyList))); // check if items don't exceed max allowed number

          if (this.historyList.length >= this.historyListMaxNumber) {
            this.historyList.splice(this.historyList.length - 1, 1);
            this.saveHistoryToLocalStorage([selected].concat(Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.historyList)));
          }
        } else {
          // if selected item exists in historyList swap to top in array
          if (!this.isTypeString(selected)) {
            // object logic

            /** @type {?} */
            var copiedHistoryList = this.historyList.slice(); // copy original historyList array

            /** @type {?} */

            var selectedIndex = copiedHistoryList.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item[_this5.searchKeyword];
            }).indexOf(selected[this.searchKeyword]);
            copiedHistoryList.splice(selectedIndex, 1);
            copiedHistoryList.splice(0, 0, selected);
            this.saveHistoryToLocalStorage(Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(copiedHistoryList));
          } else {
            // string logic

            /** @type {?} */
            var _copiedHistoryList = this.historyList.slice();

            _copiedHistoryList.splice(this.historyList.indexOf(selected), 1);

            _copiedHistoryList.splice(0, 0, selected);

            this.saveHistoryToLocalStorage(Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_copiedHistoryList));
          }
        }
      }
    }
    /**
     * Save item in localStorage
     * @param {?} selected
     * @return {?}
     */

  }, {
    key: "saveHistoryToLocalStorage",
    value: function saveHistoryToLocalStorage(selected) {
      window.localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(selected));
    }
    /**
     * Remove item from localStorage
     * @param {?} index
     * @param {?} e event
     * @return {?}
     */

  }, {
    key: "removeHistoryItem",
    value: function removeHistoryItem(index, e) {
      e.stopPropagation();
      this.historyList = this.historyList.filter(
      /**
      * @param {?} v
      * @param {?} i
      * @return {?}
      */
      function (v, i) {
        return i !== index;
      });
      this.saveHistoryToLocalStorage(this.historyList);

      if (this.historyList.length == 0) {
        window.localStorage.removeItem("".concat(this.historyIdentifier));
        this.filterList();
      }
    }
    /**
     * Reset localStorage
     * @param {?} e event
     * @return {?}
     */

  }, {
    key: "resetHistoryList",
    value: function resetHistoryList(e) {
      e.stopPropagation();
      this.historyList = [];
      window.localStorage.removeItem("".concat(this.historyIdentifier));
      this.filterList();
    }
  }]);

  return AutocompleteComponent;
}();

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]));
};

AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["ng-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
    }
  },
  hostAttrs: [1, "ng-autocomplete"],
  hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    data: "data",
    placeholder: "placeholder",
    heading: "heading",
    historyHeading: "historyHeading",
    historyListMaxNumber: "historyListMaxNumber",
    notFoundText: "notFoundText",
    minQueryLength: "minQueryLength",
    focusFirst: "focusFirst",
    disabled: "disabled",
    searchKeyword: "searchKeyword",
    initialValue: "initialValue",
    historyIdentifier: "historyIdentifier",
    isLoading: "isLoading",
    debounceTime: "debounceTime",
    customFilter: "customFilter",
    itemTemplate: "itemTemplate",
    notFoundTemplate: "notFoundTemplate"
  },
  outputs: {
    selected: "selected",
    inputChanged: "inputChanged",
    inputFocused: "inputFocused",
    inputCleared: "inputCleared",
    opened: "opened",
    closed: "closed",
    scrolledToEnd: "scrolledToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return AutocompleteComponent;
    }),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 18,
  vars: 22,
  consts: [[1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], [1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], [1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.query = $event;
      })("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
        return ctx.onChange($event);
      })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
        return ctx.handleFocus($event);
      })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) {
        return ctx.onTouched($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 12);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.historyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.overlay);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]];
  },
  pipes: function pipes() {
    return [HighlightPipe];
  },
  styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"],
  encapsulation: 2
});
/** @nocollapse */

AutocompleteComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }];
};

AutocompleteComponent.propDecorators = {
  searchInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['searchInput']
  }],
  filteredListElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['filteredListElement']
  }],
  historyListElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['historyListElement']
  }],
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  searchKeyword: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  heading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  initialValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  historyIdentifier: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  historyHeading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  historyListMaxNumber: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  notFoundText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  debounceTime: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  minQueryLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  focusFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  customFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  inputChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  inputFocused: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  inputCleared: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  opened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  closed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  scrolledToEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  itemTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  notFoundTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  customTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutocompleteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'ng-autocomplete',
      template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return AutocompleteComponent;
        }),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      host: {
        '(document:click)': 'handleClick($event)',
        'class': 'ng-autocomplete'
      },
      styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    heading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    historyHeading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    historyListMaxNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    minQueryLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    inputChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    inputFocused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    inputCleared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    scrolledToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['searchInput']
    }],
    filteredListElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['filteredListElement']
    }],
    historyListElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['historyListElement']
    }],
    searchKeyword: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    initialValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    historyIdentifier: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    customFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var HighlightPipe = /*#__PURE__*/function () {
  function HighlightPipe() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HighlightPipe);
  }

  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HighlightPipe, [{
    key: "transform",
    value:
    /**
     * @param {?} text
     * @param {?} search
     * @param {?=} searchKeyword
     * @return {?}
     */
    function transform(text, search, searchKeyword) {
      /** @type {?} */
      var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter(
      /**
      * @param {?} t
      * @return {?}
      */
      function (t) {
        return t.length > 0;
      }).join('|');
      /** @type {?} */

      var regex = new RegExp(pattern, 'gi');

      if (!search) {
        return text;
      }

      if (searchKeyword) {
        /** @type {?} */
        var name = text[searchKeyword].replace(regex,
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return "<b>".concat(match, "</b>");
        }); // copy original object

        /** @type {?} */

        var text2 = Object.assign({}, text); // set bold value into searchKeyword of copied object

        text2[searchKeyword] = name;
        return text2;
      } else {
        return search ? text.replace(regex,
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return "<b>".concat(match, "</b>");
        }) : text;
      }
    }
  }]);

  return HighlightPipe;
}();

HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
  return new (t || HighlightPipe)();
};

HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
  name: "highlight",
  type: HighlightPipe,
  pure: true
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HighlightPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"],
    args: [{
      name: 'highlight'
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var AutocompleteLibModule = function AutocompleteLibModule() {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteLibModule);
};

AutocompleteLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AutocompleteLibModule
});
AutocompleteLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function AutocompleteLibModule_Factory(t) {
    return new (t || AutocompleteLibModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AutocompleteLibModule, {
    declarations: function declarations() {
      return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]];
    },
    exports: function exports() {
      return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutocompleteLibModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
      exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-ng-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module~shop-shop-module~starter-starter-module.js.map