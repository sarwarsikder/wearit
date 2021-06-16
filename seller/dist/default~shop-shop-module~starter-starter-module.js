(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shop-shop-module~starter-starter-module"],{

/***/ "6ANv":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shop_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop.routing */ "tQo3");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.service */ "mwRl");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _shop_update_shop_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop-update/shop-update.component */ "bnl7");
/* harmony import */ var _shop_update_shop_bank_info_shop_bank_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop-update/shop-bank-info/shop-bank-info.component */ "iK5N");
/* harmony import */ var _shop_update_shop_basic_info_shop_basic_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop-update/shop-basic-info/shop-basic-info.component */ "cyZS");
/* harmony import */ var _shop_update_shop_business_info_shop_business_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shop-update/shop-business-info/shop-business-info.component */ "j3PX");
/* harmony import */ var _shop_update_shop_social_info_shop_social_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop-update/shop-social-info/shop-social-info.component */ "KAqu");
/* harmony import */ var _shop_update_shop_shipping_info_shop_shipping_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop-update/shop-shipping-info/shop-shipping-info.component */ "O4d7");
/* harmony import */ var _shop_update_shop_notification_info_shop_notification_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shop-update/shop-notification-info/shop-notification-info.component */ "YYyk");
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/location.service */ "y+iE");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media/media.module */ "vbE1");
/* harmony import */ var _review_review_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../review/review.module */ "3wRx");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/utils.module */ "XPsC");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //our custom module
                _shop_routing__WEBPACK_IMPORTED_MODULE_4__["ShopRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_15__["MediaModule"],
                _review_review_module__WEBPACK_IMPORTED_MODULE_16__["ReviewModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_17__["UtilsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"],
            ],
            declarations: [
                _shop_update_shop_update_component__WEBPACK_IMPORTED_MODULE_7__["ShopUpdateComponent"],
                _shop_update_shop_bank_info_shop_bank_info_component__WEBPACK_IMPORTED_MODULE_8__["ShopBankInfoComponent"],
                _shop_update_shop_basic_info_shop_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["ShopBasicInfoComponent"],
                _shop_update_shop_business_info_shop_business_info_component__WEBPACK_IMPORTED_MODULE_10__["ShopBusinessInfoComponent"],
                _shop_update_shop_social_info_shop_social_info_component__WEBPACK_IMPORTED_MODULE_11__["ShopSocialInfoComponent"],
                _shop_update_shop_shipping_info_shop_shipping_info_component__WEBPACK_IMPORTED_MODULE_12__["ShopShippingInfoComponent"],
                _shop_update_shop_notification_info_shop_notification_info_component__WEBPACK_IMPORTED_MODULE_13__["ShopNotificationInfoComponent"]
            ],
            providers: [_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"], _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_services_location_service__WEBPACK_IMPORTED_MODULE_14__["LocationService"]],
            exports: [
                _shop_update_shop_bank_info_shop_bank_info_component__WEBPACK_IMPORTED_MODULE_8__["ShopBankInfoComponent"],
                _shop_update_shop_basic_info_shop_basic_info_component__WEBPACK_IMPORTED_MODULE_9__["ShopBasicInfoComponent"],
                _shop_update_shop_business_info_shop_business_info_component__WEBPACK_IMPORTED_MODULE_10__["ShopBusinessInfoComponent"],
                _shop_update_shop_social_info_shop_social_info_component__WEBPACK_IMPORTED_MODULE_11__["ShopSocialInfoComponent"],
                _shop_update_shop_shipping_info_shop_shipping_info_component__WEBPACK_IMPORTED_MODULE_12__["ShopShippingInfoComponent"],
                _shop_update_shop_notification_info_shop_notification_info_component__WEBPACK_IMPORTED_MODULE_13__["ShopNotificationInfoComponent"]
            ]
        })
    ], ShopModule);
    return ShopModule;
}());



/***/ }),

/***/ "8qv+":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-basic-info/shop-basic-info.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" ngNativeValidate method=\"post\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Shop Name (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter shop name\" [(ngModel)]=\"shop.name\" required name=\"name\" #name=\"ngModel\" />\r\n        <div *ngIf=\"name.errors && (name.dirty || name.touched || isSubmitted)\">\r\n          <p [hidden]=\"!name.errors.required\" class=\"required-text\">\r\n            Please enter shop!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Shop Alias</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter shop alias\" [(ngModel)]=\"shop.alias\" name=\"alias\" #name=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter address\" [(ngModel)]=\"shop.address\" name=\"address\" #address=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <div class=\"ng-autocomplete\">\r\n          <ng-autocomplete\r\n            [data]=\"malls\"\r\n            [searchKeyword]=\"keyword\"\r\n            placeholder=\"Enter the Mall Name\"\r\n            (selected)='selectEvent($event)'\r\n            (inputFocused)='onFocused($event)'\r\n            historyIdentifier=\"malls\"\r\n            name=\"mall\"\r\n            [(ngModel)]= mallFilterSelected.mall\r\n            [itemTemplate]=\"itemTemplate\"\r\n            [notFoundTemplate]=\"notFoundTemplate\">\r\n          </ng-autocomplete>\r\n        \r\n          <ng-template #itemTemplate let-item>\r\n            <a [innerHTML]=\"item.title\"></a>\r\n          </ng-template>\r\n        \r\n          <ng-template #notFoundTemplate let-notFound>\r\n              <div [innerHTML]=\"notFound\"></div>\r\n            </ng-template>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>City</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter city\" [(ngModel)]=\"shop.city\" name=\"city\" #city=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>State</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter state\" [(ngModel)]=\"shop.state\" name=\"state\" #state=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Country</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter country\" [(ngModel)]=\"shop.country\" name=\"country\" #country=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Zip code</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter zip code\" [(ngModel)]=\"shop.zipcode\" name=\"zipcode\" #zipcode=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Email (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"user@example.com\" [(ngModel)]=\"shop.email\" name=\"email\" required #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\r\n      <div *ngIf=\"email.errors && (email.dirty || email.touched || isSubmitted)\">\r\n        <p [hidden]=\"!email.errors.required\" class=\"required-text\">\r\n          Email is required.\r\n        </p>\r\n        <p [hidden]=\"!email.errors.pattern\" class=\"required-text\">\r\n          Please enter a valid email address.\r\n        </p>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Phone number</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter phone number\" [(ngModel)]=\"shop.phoneNumber\" name=\"phoneNumber\" #phoneNumber=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Return Address</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter return address\" [(ngModel)]=\"shop.returnAddress\" name=\"returnAddress\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Header Text</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" [(ngModel)]=\"shop.headerText\" name=\"text\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Announcement</label>\r\n        <textarea type=\"text\" class=\"form-control\" placeholder=\"fuzzy fuzzy ...\" [(ngModel)]=\"shop.announcement\" name=\"announcement\" cols=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Google anyalytics code</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Google anyalytics code\" [(ngModel)]=\"shop.gaCode\" name=\"gaCode\" #gaCode=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Logo <media-select (onSelect)=\"selectLogo($event)\"></media-select></label><br />\r\n        <img [src]=\"shop?.logo?.thumbUrl\" class=\"avatar\" width=\"150\" *ngIf=\"shop?.logo\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Verification Issue <media-select (onSelect)=\"selectVerificationIssue($event)\"></media-select></label><br />\r\n        <a href=\"{{shop?.verificationIssue?.fileUrl}}\" download target=\"_blank\">{{shop?.verificationIssue?.name}}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Banner <media-select (onSelect)=\"selectBanner($event)\"></media-select></label><br />\r\n        <img [src]=\"shop?.banner?.thumbUrl\" class=\"avatar\" width=\"150\" *ngIf=\"shop?.banner\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "KAqu":
/*!*********************************************************************************!*\
  !*** ./src/app/shop/shop-update/shop-social-info/shop-social-info.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ShopSocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSocialInfoComponent", function() { return ShopSocialInfoComponent; });
/* harmony import */ var _raw_loader_shop_social_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-social-info.html */ "KtRB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop.service */ "mwRl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopSocialInfoComponent = /** @class */ (function () {
    // TODO - add option to query user from server by user id
    function ShopSocialInfoComponent(toasty, shopService) {
        this.toasty = toasty;
        this.shopService = shopService;
        this.isSubmitted = false;
    }
    ShopSocialInfoComponent.prototype.ngOnInit = function () {
        // TODO - add event emitter listen the change
    };
    ShopSocialInfoComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_4__["pick"](this.shop, ['socials']);
        this.shopService.update(this.shop.id, data).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) { return _this.toasty.error(err.data.data.message); });
    };
    ShopSocialInfoComponent.ctorParameters = function () { return [
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
    ]; };
    ShopSocialInfoComponent.propDecorators = {
        shop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ShopSocialInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-social-info',
            template: _raw_loader_shop_social_info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
    ], ShopSocialInfoComponent);
    return ShopSocialInfoComponent;
}());



/***/ }),

/***/ "KtRB":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-social-info/shop-social-info.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" ngNativeValidate method=\"post\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Facebook</label>\r\n        <!-- <img src=\"assets/images/icon/trust.png\" width=\"17px\" *ngIf=\"shop.socialConnected.facebook\"> -->\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter facebook profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.facebook\" name=\"facebook\" #facebook=\"ngModel\" />\r\n        <div *ngIf=\"facebook.errors && (facebook.dirty || facebook.touched || isSubmitted)\">\r\n          <p [hidden]=\"!facebook.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Twitter</label>\r\n        <!-- <img src=\"assets/images/icon/trust.png\" width=\"17px\" *ngIf=\"shop.socialConnected.twitter\"> -->\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter twitter profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.twitter\" name=\"twitter\" #twitter=\"ngModel\" />\r\n        <div *ngIf=\"twitter.errors && (twitter.dirty || twitter.touched || isSubmitted)\">\r\n          <p [hidden]=\"!twitter.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Google</label>\r\n        <!-- <img src=\"assets/images/icon/trust.png\" width=\"17px\" *ngIf=\"shop.socialConnected.google\"> -->\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter google profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.google\" name=\"google\" #google=\"ngModel\" />\r\n        <div *ngIf=\"google.errors && (google.dirty || google.touched || isSubmitted)\">\r\n          <p [hidden]=\"!google.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Linkedin</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter linkedin profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.linkedin\" name=\"linkedin\" #linkedin=\"ngModel\" />\r\n        <div *ngIf=\"linkedin.errors && (linkedin.dirty || linkedin.touched || isSubmitted)\">\r\n          <p [hidden]=\"!linkedin.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Youtube</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter youtube profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.youtube\" name=\"youtube\" #youtube=\"ngModel\" />\r\n        <div *ngIf=\"youtube.errors && (youtube.dirty || youtube.touched || isSubmitted)\">\r\n          <p [hidden]=\"!youtube.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Instagram</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter instagram profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.instagram\" name=\"instagram\" #instagram=\"ngModel\" />\r\n        <div *ngIf=\"instagram.errors && (instagram.dirty || instagram.touched || isSubmitted)\">\r\n          <p [hidden]=\"!instagram.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Flickr</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter flickr profile url\" pattern=\"https?://.+\" [(ngModel)]=\"shop.socials.flickr\" name=\"flickr\" #flickr=\"ngModel\" />\r\n        <div *ngIf=\"flickr.errors && (flickr.dirty || flickr.touched || isSubmitted)\">\r\n          <p [hidden]=\"!flickr.errors.pattern\" style=\"color:red\">\r\n            Please enter valid url\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col col-md-12\">\r\n\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group button-socials\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n      </div>\r\n      <!-- <small class=\"text-muted\">If your account is successfully verified, we will confirm by the icon </small>\r\n      <img src=\"assets/images/icon/trust.png\" width=\"17px\"> -->\r\n    </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "O4d7":
/*!*************************************************************************************!*\
  !*** ./src/app/shop/shop-update/shop-shipping-info/shop-shipping-info.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShopShippingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopShippingInfoComponent", function() { return ShopShippingInfoComponent; });
/* harmony import */ var _raw_loader_shop_shipping_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-shipping-info.html */ "P1Q/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop.service */ "mwRl");
/* harmony import */ var _shared_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/location.service */ "y+iE");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopShippingInfoComponent = /** @class */ (function () {
    function ShopShippingInfoComponent(toasty, shopService, location) {
        this.toasty = toasty;
        this.shopService = shopService;
        this.location = location;
        this.isSubmitted = false;
        this.countries = [];
    }
    ShopShippingInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.countries().then(function (resp) { return _this.countries = resp.data; });
    };
    ShopShippingInfoComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_5__["pick"](this.shop, ['shippingSettings', 'storeWideShipping']);
        this.shopService.update(this.shop.id, data).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) { return _this.toasty.error(err.data.data.message); });
    };
    ShopShippingInfoComponent.ctorParameters = function () { return [
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
        { type: _shared_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }
    ]; };
    ShopShippingInfoComponent.propDecorators = {
        shop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ShopShippingInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-shipping-info',
            template: _raw_loader_shop_shipping_info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"], _shared_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
    ], ShopShippingInfoComponent);
    return ShopShippingInfoComponent;
}());



/***/ }),

/***/ "P1Q/":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-shipping-info/shop-shipping-info.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" novalidate>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Default Price (*)</label>\r\n        <input type=\"number\" name=\"defaultPrice\" min=\"0\" step=\"0.1\" class=\"form-control\" [(ngModel)]=\"shop.shippingSettings.defaultPrice\"\r\n          required #defaultPrice=\"ngModel\" />\r\n        <div *ngIf=\"defaultPrice.errors && (defaultPrice.dirty || defaultPrice.touched || isSubmitted)\">\r\n          <p [hidden]=\"!defaultPrice.errors.required\" class=\"required-text\">\r\n            Default price is required!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Price For Each Product Quantity (*)</label>\r\n        <input type=\"number\" name=\"perQuantityPrice\" min=\"0\" step=\"0.1\" class=\"form-control\" [(ngModel)]=\"shop.shippingSettings.perQuantityPrice\"\r\n          required #perQuantityPrice=\"ngModel\" />\r\n        <div *ngIf=\"perQuantityPrice.errors && (perQuantityPrice.dirty || perQuantityPrice.touched || isSubmitted)\">\r\n          <p [hidden]=\"!perQuantityPrice.errors.required\" class=\"required-text\">\r\n            Price for each product quantity is required!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Ship From (*)</label>\r\n        <select [(ngModel)]=\"shop.shippingSettings.shipFrom\" class=\"form-control\" name=\"shipFrom\" required #shipFrom=\"ngModel\">\r\n          <option *ngFor=\"let item of countries\" [ngValue]=\"item.isoCode\">{{item.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"shipFrom.errors && (shipFrom.dirty || shipFrom.touched || isSubmitted)\">\r\n          <p [hidden]=\"!shipFrom.errors.required\" class=\"required-text\">\r\n            This field is required!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Processing Time In Day (*)</label>\r\n        <select class=\"form-control\" name=\"processingTime\" [(ngModel)]=\"shop.shippingSettings.processingTime\" required\r\n          #processingTime=\"ngModel\">\r\n          <option value=\"one2Three\">One to three working days</option>\r\n          <option value=\"Four2Five\">Four to five working days</option>\r\n          <option value=\"Five2Eight\">Five to eight working days</option>\r\n          <option value=\"other\">Other</option>\r\n        </select>\r\n        <div *ngIf=\"processingTime.errors && (processingTime.dirty || processingTime.touched || isSubmitted)\">\r\n          <p [hidden]=\"!processingTime.errors.required\" class=\"required-text\">\r\n            Processing time in day is required!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Shipping Policy (*)</label>\r\n        <textarea name=\"shippingPolicy\" rows=\"3\" class=\"form-control\" placeholder=\"Enter Shipping Policy\" [(ngModel)]=\"shop.shippingSettings.shippingPolicy\"\r\n          #shippingPolicy=\"ngModel\" required></textarea>\r\n        <div *ngIf=\"shippingPolicy.errors && (shippingPolicy.dirty || shippingPolicy.touched || isSubmitted)\">\r\n          <p [hidden]=\"!shippingPolicy.errors.required\" class=\"required-text\">\r\n            Shipping Policy is required!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Refund Policy (*)</label>\r\n        <textarea name=\"refundPolicy\" rows=\"3\" class=\"form-control\" placeholder=\"Enter Refund Policy\" [(ngModel)]=\"shop.shippingSettings.refundPolicy\"\r\n          #refundPolicy=\"ngModel\" required></textarea>\r\n        <div *ngIf=\"refundPolicy.errors && (refundPolicy.dirty || refundPolicy.touched || isSubmitted)\">\r\n          <p [hidden]=\"!refundPolicy.errors.required\" class=\"required-text\">\r\n            Refund policy is required!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label><input type=\"checkbox\" name=\"storeWideShipping\" [(ngModel)]=\"shop.storeWideShipping\" #storeWideShipping=\"ngModel\" />\r\n          Store Wide Shipping</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "TFvw":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-notification-info/shop-notification-info.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" ngNativeValidate method=\"post\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label><input type=\"checkbox\" name=\"lowInventory\" [(ngModel)]=\"shop.notifications.lowInventory\" #lowInventory=\"ngModel\"/> Low Inventory</label>\r\n      </div>\r\n    </div><div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Announcement</label>\r\n        <textarea class=\"form-control\" placeholder=\"Enter announcement\" [(ngModel)]=\"shop.announcement\" name=\"announcement\"\r\n        #announcement=\"ngModel\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "YYyk":
/*!*********************************************************************************************!*\
  !*** ./src/app/shop/shop-update/shop-notification-info/shop-notification-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ShopNotificationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopNotificationInfoComponent", function() { return ShopNotificationInfoComponent; });
/* harmony import */ var _raw_loader_shop_notification_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-notification-info.html */ "TFvw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop.service */ "mwRl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopNotificationInfoComponent = /** @class */ (function () {
    // TODO - add option to query user from server by user id
    function ShopNotificationInfoComponent(toasty, shopService) {
        this.toasty = toasty;
        this.shopService = shopService;
        this.isSubmitted = false;
    }
    ShopNotificationInfoComponent.prototype.ngOnInit = function () {
        // TODO - add event emitter listen the change
    };
    ShopNotificationInfoComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_4__["pick"](this.shop, ['notifications', 'announcement']);
        this.shopService.update(this.shop.id, data).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) { return _this.toasty.error(err.data.data.message); });
    };
    ShopNotificationInfoComponent.ctorParameters = function () { return [
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
    ]; };
    ShopNotificationInfoComponent.propDecorators = {
        shop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ShopNotificationInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-notification-info',
            template: _raw_loader_shop_notification_info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
    ], ShopNotificationInfoComponent);
    return ShopNotificationInfoComponent;
}());



/***/ }),

/***/ "bnl7":
/*!***********************************************************!*\
  !*** ./src/app/shop/shop-update/shop-update.component.ts ***!
  \***********************************************************/
/*! exports provided: ShopUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopUpdateComponent", function() { return ShopUpdateComponent; });
/* harmony import */ var _raw_loader_shop_update_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-update.html */ "mhoO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop.service */ "mwRl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopUpdateComponent = /** @class */ (function () {
    function ShopUpdateComponent(router, shopService, toasty, route, authService) {
        this.router = router;
        this.shopService = shopService;
        this.toasty = toasty;
        this.route = route;
        this.authService = authService;
        this.isSubmitted = false;
        this.shop = {};
        this.tab = 'basic';
        this.twitterConnectLink = '';
        this.socialConnected = {};
    }
    ShopUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopService.me().then(function (resp) {
            _this.shop = resp.data;
            _this.socialConnected = resp.data.socialConnected;
        });
        var redirectUrl = window.location.href;
        var accessToken = this.authService.getAccessToken();
        this.twitterConnectLink = window.appConfig.apiBaseUrl + "/connect/twitter?access_token=" + accessToken + "&redirectUrl=" + redirectUrl;
    };
    ShopUpdateComponent.prototype.changeTab = function (tab) {
        this.tab = tab;
    };
    ShopUpdateComponent.prototype.onConnected = function (data) {
        this.socialConnected[data.platform] = data.success;
    };
    ShopUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    ShopUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-update',
            template: _raw_loader_shop_update_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ShopUpdateComponent);
    return ShopUpdateComponent;
}());



/***/ }),

/***/ "cyZS":
/*!*******************************************************************************!*\
  !*** ./src/app/shop/shop-update/shop-basic-info/shop-basic-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShopBasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBasicInfoComponent", function() { return ShopBasicInfoComponent; });
/* harmony import */ var _raw_loader_shop_basic_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-basic-info.html */ "8qv+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop.service */ "mwRl");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopBasicInfoComponent = /** @class */ (function () {
    function ShopBasicInfoComponent(auth, toasty, shopService) {
        this.auth = auth;
        this.toasty = toasty;
        this.shopService = shopService;
        this.isSubmitted = false;
        this.keyword = 'title';
        this.malls = [];
        this.mallFilterSelected = {
            mall: ''
        };
    }
    ShopBasicInfoComponent.prototype.selectEvent = function (item) {
        //this.shop.mallId = item._id;
    };
    ShopBasicInfoComponent.prototype.onChangeSearch = function (search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    ShopBasicInfoComponent.prototype.onFocused = function (e) {
    };
    ShopBasicInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getMall().then(function (mall) {
            _this.malls = mall.items;
            if (_this.shop["mallInfo"] != undefined) {
                _this.mallFilterSelected.mall = _this.shop.mallInfo;
            }
        });
    };
    ShopBasicInfoComponent.prototype.submit = function (frm) {
        var _this = this;
        if (this.mallFilterSelected.mall != '') {
            this.shop.mallId = this.mallFilterSelected.mall._id;
        }
        else {
            this.shop.mallId = '56cb91bdc3464f14678934ca'; //dummy
        }
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_5__["pick"](this.shop, ['name', 'alias', 'address', 'city', 'state', 'country', 'zipcode', 'email',
            'phoneNumber', 'logoId', 'verificationIssueId', 'bannerId', 'mallId', 'headerText', 'gaCode', 'announcement', 'returnAddress']);
        this.shopService.update(this.shop.id, data).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) {
            return _this.toasty.error(err.data.data.message || err.data.data.details[0].message);
        });
    };
    ShopBasicInfoComponent.prototype.selectLogo = function (data) {
        this.shop.logoId = data._id;
        this.shop.logo = data;
    };
    ShopBasicInfoComponent.prototype.selectVerificationIssue = function (data) {
        this.shop.verificationIssueId = data._id;
        this.shop.verificationIssue = data;
    };
    ShopBasicInfoComponent.prototype.selectBanner = function (data) {
        this.shop.bannerId = data._id;
        this.shop.banner = data;
    };
    ShopBasicInfoComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
    ]; };
    ShopBasicInfoComponent.propDecorators = {
        shop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ShopBasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-basic-info',
            template: _raw_loader_shop_basic_info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
    ], ShopBasicInfoComponent);
    return ShopBasicInfoComponent;
}());



/***/ }),

/***/ "iK5N":
/*!*****************************************************************************!*\
  !*** ./src/app/shop/shop-update/shop-bank-info/shop-bank-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShopBankInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBankInfoComponent", function() { return ShopBankInfoComponent; });
/* harmony import */ var _raw_loader_shop_bank_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-bank-info.html */ "j4mn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop.service */ "mwRl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopBankInfoComponent = /** @class */ (function () {
    function ShopBankInfoComponent(toasty, shopService) {
        this.toasty = toasty;
        this.shopService = shopService;
        this.isSubmitted = false;
    }
    ShopBankInfoComponent.prototype.ngOnInit = function () {
    };
    ShopBankInfoComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_4__["pick"](this.shop, ['bankInfo']);
        this.shopService.update(this.shop.id, data).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) { return _this.toasty.error(err.data.data.message); });
    };
    ShopBankInfoComponent.ctorParameters = function () { return [
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
    ]; };
    ShopBankInfoComponent.propDecorators = {
        shop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ShopBankInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-bank-info',
            template: _raw_loader_shop_bank_info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
    ], ShopBankInfoComponent);
    return ShopBankInfoComponent;
}());



/***/ }),

/***/ "j3PX":
/*!*************************************************************************************!*\
  !*** ./src/app/shop/shop-update/shop-business-info/shop-business-info.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShopBusinessInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBusinessInfoComponent", function() { return ShopBusinessInfoComponent; });
/* harmony import */ var _raw_loader_shop_business_info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shop-business-info.html */ "lSoH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shop.service */ "mwRl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopBusinessInfoComponent = /** @class */ (function () {
    // TODO - add option to query user from server by user id
    function ShopBusinessInfoComponent(toasty, shopService) {
        this.toasty = toasty;
        this.shopService = shopService;
        this.isSubmitted = false;
    }
    ShopBusinessInfoComponent.prototype.ngOnInit = function () {
        // TODO - add event emitter listen the change
    };
    ShopBusinessInfoComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_4__["pick"](this.shop, ['businessInfo']);
        this.shopService.update(this.shop.id, data).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) { return _this.toasty.error(err.data.data.message); });
    };
    ShopBusinessInfoComponent.ctorParameters = function () { return [
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
    ]; };
    ShopBusinessInfoComponent.propDecorators = {
        shop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ShopBusinessInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shop-business-info',
            template: _raw_loader_shop_business_info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
    ], ShopBusinessInfoComponent);
    return ShopBusinessInfoComponent;
}());



/***/ }),

/***/ "j4mn":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-bank-info/shop-bank-info.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" ngNativeValidate method=\"post\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Bank Name (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter bank name\" [(ngModel)]=\"shop.bankInfo.bankName\" required name=\"bankName\" #bankName=\"ngModel\"/>\r\n        <div *ngIf=\"bankName.errors && (bankName.dirty || bankName.touched || isSubmitted)\">\r\n            <p [hidden]=\"!bankName.errors.required\" class=\"required-text\">\r\n              Please enter bank name!\r\n            </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Bank ID (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter bank ID\" [(ngModel)]=\"shop.bankInfo.bankId\" required name=\"bankId\" #bankId=\"ngModel\"/>\r\n        <div *ngIf=\"bankId.errors && (bankId.dirty || bankId.touched || isSubmitted)\">\r\n          <p [hidden]=\"!bankId.errors.required\" class=\"required-text\">\r\n            Please enter bank ID!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Bank Branch Name (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter bank branch name\" [(ngModel)]=\"shop.bankInfo.bankBranchName\" required name=\"bankBranchName\" #bankBranchName=\"ngModel\"/>\r\n        <div *ngIf=\"bankBranchName.errors && (bankBranchName.dirty || bankBranchName.touched || isSubmitted)\">\r\n          <p [hidden]=\"!bankBranchName.errors.required\" class=\"required-text\">\r\n            Please enter bank branch name!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Bank Branch ID (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter bank branch ID\" [(ngModel)]=\"shop.bankInfo.bankBranchId\" required name=\"bankBranchId\" #bankBranchId=\"ngModel\"/>\r\n        <div *ngIf=\"bankBranchId.errors && (bankBranchId.dirty || bankBranchId.touched || isSubmitted)\">\r\n          <p [hidden]=\"!bankBranchId.errors.required\" class=\"required-text\">\r\n            Please enter bank branch ID!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Account Name (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter account name\" [(ngModel)]=\"shop.bankInfo.accountName\" required name=\"accountName\" #accountName=\"ngModel\"/>\r\n        <div *ngIf=\"accountName.errors && (accountName.dirty || accountName.touched || isSubmitted)\">\r\n          <p [hidden]=\"!accountName.errors.required\" class=\"required-text\">\r\n            Please enter account name!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Account Number (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter account number\" [minlength]=\"11\" [maxlength]=\"30\" [(ngModel)]=\"shop.bankInfo.accountNumber\" pattern=\"[a-zA-Z0-9]+\" required name=\"accountNumber\" #accountNumber=\"ngModel\"/>\r\n        <div *ngIf=\"accountNumber.errors && (accountNumber.dirty || accountNumber.touched || isSubmitted)\">\r\n          <p [hidden]=\"!accountNumber.errors.required\" class=\"required-text\">\r\n            Please enter account number!\r\n          </p>\r\n          <p [hidden]=\"!accountNumber.errors.pattern\" class=\"required-text\">\r\n              Account Number is alphanumeric characters\r\n            </p>\r\n            <p [hidden]=\"!accountNumber.errors.minlength\" class=\"error\" translate>\r\n              Account Number must be at least 11 characters\r\n            </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Swift Code (*)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter swift code\" [minlength]=\"8\" [maxlength]=\"11\" [(ngModel)]=\"shop.bankInfo.swiftCode\" pattern=\"[a-zA-Z0-9]+\" required name=\"swiftCode\" #swiftCode=\"ngModel\"/>\r\n        <div *ngIf=\"swiftCode.errors && (swiftCode.dirty || swiftCode.touched || isSubmitted)\">\r\n            <p [hidden]=\"!swiftCode.errors.required\" class=\"required-text\">\r\n              Please enter swift code!\r\n            </p>\r\n            <p [hidden]=\"!swiftCode.errors.pattern\" class=\"required-text\">\r\n              Swift Code is alphanumeric characters\r\n            </p>\r\n            <p [hidden]=\"!swiftCode.errors.minlength\" class=\"error\" translate>\r\n              Swift Code must be 8 or 11 characters\r\n            </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "lSoH":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-business-info/shop-business-info.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" ngNativeValidate method=\"post\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Business Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter business name\" [(ngModel)]=\"shop.businessInfo.name\" name=\"name\" #name=\"ngModel\"/>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Identifier</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter identifier\" [(ngModel)]=\"shop.businessInfo.identifier\" name=\"identifier\" #identifier=\"ngModel\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter address\" [(ngModel)]=\"shop.businessInfo.address\" name=\"address\" #identifier=\"ngModel\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "mhoO":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop-update/shop-update.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"nav flex-column nav-pills\">\r\n          <a class=\"nav-link active\" [ngClass]=\"{active: tab == 'basic'}\" (click)=\"changeTab('basic')\">Basic Info</a>\r\n\r\n          <a class=\"nav-link\" [ngClass]=\"{active: tab == 'business'}\" (click)=\"changeTab('business')\">Business Info</a>\r\n\r\n          <a class=\"nav-link\" [ngClass]=\"{active: tab == 'social'}\" (click)=\"changeTab('social')\">Social Info</a>\r\n\r\n          <a class=\"nav-link\" [ngClass]=\"{active: tab == 'shipping'}\" (click)=\"changeTab('shipping')\">Shipping Info</a>\r\n\r\n          <a class=\"nav-link\" [ngClass]=\"{active: tab == 'notification'}\" (click)=\"changeTab('notification')\">Notification Info</a>\r\n\r\n          <a class=\"nav-link\" [ngClass]=\"{active: tab == 'bank'}\" (click)=\"changeTab('bank')\">Bank Info</a>\r\n\r\n          <a class=\"nav-link\" [ngClass]=\"{active: tab == 'review'}\" (click)=\"changeTab('review')\">Reviews From User</a>\r\n        </div>\r\n\r\n        <hr />\r\n\r\n        <h3>Verify your social account</h3>\r\n        <p>\r\n          <strong>Facebook: </strong> {{socialConnected?.facebook ? 'Verified' : 'Not verified'}} <br />\r\n          <strong>Google: </strong> {{socialConnected?.google ? 'Verified' : 'Not verified'}} <br />\r\n          <strong>Twitter: </strong> {{socialConnected?.twitter ? 'Verified' : 'Not verified'}}\r\n        </p>\r\n        <hr />\r\n        <div class=\"form-group text-center socials-box social-box-new\">\r\n          <div class=\"social-login facebook\">\r\n            <facebook-login (onConnected)=\"onConnected($event)\"></facebook-login>\r\n          </div>\r\n          <div class=\"social-login google\">\r\n            <google-login (onConnected)=\"onConnected($event)\"></google-login>\r\n          </div>\r\n          <p class=\"text-center\">\r\n            <a [href]=\"twitterConnectLink\" class=\"btn btn-info\"><i class=\"fa fa-twitter\"></i> Twitter</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"tab-content\">\r\n          <div class=\"shop-tab-block show active\" *ngIf=\"tab === 'basic'\">\r\n            <shop-basic-info [shop]=\"shop\"></shop-basic-info>\r\n          </div>\r\n          <div class=\"shop-tab-block\" *ngIf=\"tab === 'business'\">\r\n            <shop-business-info [shop]=\"shop\"></shop-business-info>\r\n          </div>\r\n          <div class=\"shop-tab-block\" *ngIf=\"tab === 'social'\">\r\n            <shop-social-info [shop]=\"shop\"></shop-social-info>\r\n          </div>\r\n          <div class=\"shop-tab-block\" *ngIf=\"tab === 'shipping'\">\r\n            <shop-shipping-info [shop]=\"shop\"></shop-shipping-info>\r\n          </div>\r\n          <div class=\"shop-tab-block\" *ngIf=\"tab === 'notification'\">\r\n            <shop-notification-info [shop]=\"shop\"></shop-notification-info>\r\n          </div>\r\n          <div class=\"shop-tab-block\" *ngIf=\"tab === 'bank'\">\r\n            <shop-bank-info [shop]=\"shop\"></shop-bank-info>\r\n          </div>\r\n          <div class=\"shop-tab-block\" *ngIf=\"tab === 'review'\">\r\n            <shop-review [shopId]=\"shop._id\" *ngIf=\"shop._id\"></shop-review>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "mwRl":
/*!**************************************!*\
  !*** ./src/app/shop/shop.service.ts ***!
  \**************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "sXYb");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "EUDy");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopService = /** @class */ (function () {
    function ShopService(restangular) {
        this.restangular = restangular;
    }
    ShopService.prototype.me = function () {
        return this.restangular.one('shops', 'me').get().toPromise();
    };
    ShopService.prototype.update = function (id, data) {
        return this.restangular.one('shops', id).customPUT(data).toPromise();
    };
    ShopService.prototype.findOne = function (id) {
        return this.restangular.one('shops', id).get().toPromise();
    };
    ShopService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    ShopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], ShopService);
    return ShopService;
}());



/***/ }),

/***/ "tQo3":
/*!**************************************!*\
  !*** ./src/app/shop/shop.routing.ts ***!
  \**************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_update_shop_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-update/shop-update.component */ "bnl7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'update', component: _shop_update_shop_update_component__WEBPACK_IMPORTED_MODULE_2__["ShopUpdateComponent"],
        data: {
            title: 'Shop Update',
            urls: [{ title: 'Profile Update' }]
        }
    }
];
var ShopRoutingModule = /** @class */ (function () {
    function ShopRoutingModule() {
    }
    ShopRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShopRoutingModule);
    return ShopRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~shop-shop-module~starter-starter-module.js.map