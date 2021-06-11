(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-coupon-module"],{

/***/ "8XXq":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon/components/form/form.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card col-md-6\" style=\"padding: 0px;\">\r\n  <div class=\"card-body\">\r\n    <form (submit)=\"submit(frm)\" #frm=\"ngForm\" *ngIf=\"coupon\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"tab-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Name (*)</label>\r\n                  <input type=\"text\" name=\"couponName\" #couponName=\"ngModel\" class=\"form-control\" placeholder=\"Enter name\"\r\n                    [(ngModel)]=\"coupon.name\" required />\r\n                  <div *ngIf=\"couponName.errors && (couponName.dirty || couponName.touched || isSubmitted)\">\r\n                    <p [hidden]=\"!couponName.errors.required\" class=\"required-text\">\r\n                      Please enter coupon name!\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Code (*)</label>\r\n                  <input type=\"text\" name=\"couponCode\" #couponCode=\"ngModel\" class=\"form-control\" required placeholder=\"Enter code\"\r\n                    [(ngModel)]=\"coupon.code\" />\r\n                  <div *ngIf=\"couponCode.errors && (couponCode.dirty || couponCode.touched || isSubmitted)\">\r\n                    <p [hidden]=\"!couponCode.errors.required\" class=\"required-text\">\r\n                      Please enter coupon code!\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Discount Percentage (*)</label>\r\n                  <input type=\"number\" name=\"discountPercentage\" min=\"1\" max=\"100\" #discountPercentage=\"ngModel\" class=\"form-control\"\r\n                    required [(ngModel)]=\"coupon.discountPercentage\" />\r\n                  <div *ngIf=\"discountPercentage.errors && (discountPercentage.dirty || discountPercentage.touched || isSubmitted)\">\r\n                    <p [hidden]=\"!discountPercentage.errors.required\" class=\"required-text\">\r\n                      Please enter discount percentage!\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Limit (*)</label>\r\n                  <input type=\"number\" name=\"limit\" min=\"0\" #limit=\"ngModel\" class=\"form-control\" required [(ngModel)]=\"coupon.limit\" />\r\n                  <small class=\"text-muted\">If enter 0, it means Unlimited</small>\r\n                  <div *ngIf=\"limit.errors && (limit.dirty || limit.touched || isSubmitted)\">\r\n                    <p [hidden]=\"!limit.errors.required\" class=\"required-text\">\r\n                      Please enter coupon limit!\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Expired time (*)</label>\r\n                  <div class=\"input-group input-date\">\r\n                    <input class=\"form-control br-l\" placeholder=\"yyyy-mm-dd\" name=\"expiredTime\" [(ngModel)]=\"date\"\r\n                      ngbDatepicker #expiredTime=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-outline-secondary fa fa-calendar br-r\" (click)=\"expiredTime.toggle()\" type=\"button\"></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col col-md-12\">\r\n          <div class=\"form-group\">\r\n            <hr />\r\n            <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n");

/***/ }),

/***/ "HpTL":
/*!****************************************************************!*\
  !*** ./src/app/coupon/components/listing/listing.component.ts ***!
  \****************************************************************/
/*! exports provided: CouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsComponent", function() { return CouponsComponent; });
/* harmony import */ var _raw_loader_listing_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./listing.html */ "YvR2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/coupon.service */ "jFTd");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CouponsComponent = /** @class */ (function () {
    function CouponsComponent(router, couponService, toasty, utilService) {
        this.router = router;
        this.couponService = couponService;
        this.toasty = toasty;
        this.utilService = utilService;
        this.isLoading = false;
        this.coupons = [];
        this.page = 1;
        this.take = 10;
        this.total = 0;
        this.searchText = '';
        this.sortOption = {
            sortBy: 'createdAt',
            sortType: 'desc'
        };
    }
    CouponsComponent.prototype.ngOnInit = function () {
        this.query();
    };
    CouponsComponent.prototype.query = function () {
        var _this = this;
        this.utilService.setLoading(true);
        this.isLoading = true;
        var params = {
            page: this.page,
            take: this.take,
            sort: "" + this.sortOption.sortBy,
            sortType: "" + this.sortOption.sortType,
            q: this.searchText,
        };
        this.couponService.find(params).then(function (res) {
            _this.coupons = res.data.items;
            _this.total = res.data.count;
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        }).catch(function (err) {
            _this.toasty.error(err.data.message || 'Something went wrong, please try again!');
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        });
    };
    CouponsComponent.prototype.sortBy = function (field, type) {
        this.sortOption.sortBy = field;
        this.sortOption.sortType = type;
        this.query();
    };
    CouponsComponent.prototype.keyPress = function (event) {
        if (event.charCode === 13) {
            this.query();
        }
    };
    CouponsComponent.prototype.remove = function (itemId, index) {
        var _this = this;
        if (window.confirm('Are you sure want to delete this item?')) {
            this.couponService.remove(itemId)
                .then(function () {
                _this.toasty.success('Item has been deleted!');
                _this.coupons.splice(index, 1);
            })
                .catch(function (err) { return _this.toasty.error(err.data.message || 'Something went wrong, please try again!'); });
        }
    };
    CouponsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    CouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coupon-listing',
            template: _raw_loader_listing_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], CouponsComponent);
    return CouponsComponent;
}());



/***/ }),

/***/ "V6eh":
/*!*****************************************!*\
  !*** ./src/app/coupon/coupon.module.ts ***!
  \*****************************************/
/*! exports provided: CouponModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponModule", function() { return CouponModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sortablejs */ "PQoX");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-froala-wysiwyg */ "Yn6Y");
/* harmony import */ var _coupon_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupon.routing */ "lYXc");
/* harmony import */ var _components_form_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form/create.component */ "lSS8");
/* harmony import */ var _components_form_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form/update.component */ "lj7x");
/* harmony import */ var _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/listing/listing.component */ "HpTL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/coupon.service */ "jFTd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CouponModule = /** @class */ (function () {
    function CouponModule() {
    }
    CouponModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__["SortablejsModule"],
                //our custom module
                _coupon_routing__WEBPACK_IMPORTED_MODULE_6__["CouponRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["FroalaViewModule"].forRoot()
            ],
            declarations: [
                _components_form_create_component__WEBPACK_IMPORTED_MODULE_7__["CouponCreateComponent"],
                _components_form_update_component__WEBPACK_IMPORTED_MODULE_8__["CouponUpdateComponent"],
                _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_9__["CouponsComponent"]
            ],
            providers: [
                _services_coupon_service__WEBPACK_IMPORTED_MODULE_10__["CouponService"]
            ]
        })
    ], CouponModule);
    return CouponModule;
}());



/***/ }),

/***/ "YvR2":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon/components/listing/listing.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" *ngIf=\"!isLoading\">\r\n  <div class=\"card-body table-responsive\">\r\n    <table class=\"table table-custom\">\r\n      <thead>\r\n        <tr>\r\n          <th>\r\n            <a (click)=\"sortBy('name', 'desc')\">Name&nbsp;</a>\r\n            <span *ngIf=\"sortOption.sortBy=='name'\">\r\n              <a (click)=\"sortBy('name', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('name', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('code', 'desc')\">Code&nbsp;</a>\r\n            <span *ngIf=\"sortOption.sortBy=='code'\">\r\n              <a (click)=\"sortBy('code', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('code', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('discountPercentage', 'desc')\">Discount Percentage&nbsp;</a>\r\n            <span *ngIf=\"sortOption.sortBy=='discountPercentage'\">\r\n              <a (click)=\"sortBy('discountPercentage', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('discountPercentage', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('limit', 'desc')\">Limit&nbsp;</a>\r\n            <span *ngIf=\"sortOption.sortBy=='limit'\">\r\n              <a (click)=\"sortBy('limit', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('limit', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('expiredTime', 'desc')\">Expired Time&nbsp;</a>\r\n            <span *ngIf=\"sortOption.sortBy=='expiredTime'\">\r\n              <a (click)=\"sortBy('expiredTime', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('expiredTime', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('createdAt', 'desc')\">Created At&nbsp;</a>\r\n            <span *ngIf=\"sortOption.sortBy=='createdAt'\">\r\n              <a (click)=\"sortBy('createdAt', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('createdAt', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>Action</th>\r\n        </tr>\r\n        <tr>\r\n          <th colspan=\"7\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"search...\" (keypress)=\"keyPress($event)\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary fa fa-search\" (click)=\"query()\" type=\"button\"></button>\r\n              </div>\r\n            </div>\r\n          </th>\r\n          \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"!total\">\r\n          <td colspan=\"7\">\r\n            <p class=\"text-center text-danger\">There is no items yet..</p>\r\n          </td>\r\n        </tr>\r\n        <tr *ngFor=\"let item of coupons, let i = index\">\r\n          <td>\r\n            <a [routerLink]=\"['/coupons/update', item._id ]\">\r\n              {{item?.name}}\r\n            </a>\r\n          </td>\r\n          <td><span class=\"badge badge-warning\">{{item?.code}}</span></td>\r\n          <td>{{item?.discountPercentage}}%</td>\r\n          <td *ngIf=\"item.limit !== 0\">{{item?.limit}}</td>\r\n          <td *ngIf=\"item.limit === 0\">\r\n            <span class=\"badge badge-danger\">Unlimited</span>\r\n          </td>\r\n          <td>{{item.expiredTime |date:'short'}}</td>\r\n          <td>\r\n            <span>{{item.createdAt | date:'short'}}</span>\r\n          </td>\r\n          <td class=\"text-right\">\r\n            <a class=\"btn btn-sm btn-danger\" [routerLink]=\"['/coupons/update', item._id ]\"><i class=\"fa fa-pencil\"></i></a>&nbsp;\r\n            <a class=\"btn btn-sm btn-danger\" (click)=\"remove(item?._id, i)\" style=\"color: #fff;\"><i class=\"fa fa-trash\"></i></a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"display-inline\" [hidden]=\"total < take\">\r\n      <div class=\"pull-right\">\r\n        <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [maxSize]=\"5\" [pageSize]=\"take\" (pageChange)=\"query()\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "jFTd":
/*!***************************************************!*\
  !*** ./src/app/coupon/services/coupon.service.ts ***!
  \***************************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
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



var CouponService = /** @class */ (function () {
    function CouponService(restangular) {
        this.restangular = restangular;
    }
    CouponService.prototype.find = function (params) {
        return this.restangular.one('coupons').get(params).toPromise();
    };
    CouponService.prototype.create = function (data) {
        return this.restangular.all('coupons').post(data).toPromise();
    };
    CouponService.prototype.remove = function (id) {
        return this.restangular.one('coupons', id).customDELETE().toPromise();
    };
    CouponService.prototype.findOne = function (id) {
        return this.restangular.one('coupons', id).get().toPromise();
    };
    CouponService.prototype.update = function (id, data) {
        return this.restangular.one('coupons', id).customPUT(data).toPromise();
    };
    CouponService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    CouponService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], CouponService);
    return CouponService;
}());



/***/ }),

/***/ "lSS8":
/*!************************************************************!*\
  !*** ./src/app/coupon/components/form/create.component.ts ***!
  \************************************************************/
/*! exports provided: CouponCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponCreateComponent", function() { return CouponCreateComponent; });
/* harmony import */ var _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./form.html */ "8XXq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/coupon.service */ "jFTd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponCreateComponent = /** @class */ (function () {
    function CouponCreateComponent(router, couponService, toasty) {
        this.router = router;
        this.couponService = couponService;
        this.toasty = toasty;
        this.isSubmitted = false;
        this.coupon = {
            name: '',
            code: '',
            discountPercentage: 0,
            limit: 0
        };
    }
    CouponCreateComponent.prototype.ngOnInit = function () {
    };
    CouponCreateComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (frm.invalid) {
            return this.toasty.error('Form is invalid, please try again.');
        }
        if (this.coupon.discountPercentage < 0 || this.coupon.discountPercentage > 100) {
            return this.toasty.error('Discount percentage ranges from 0 to 100');
        }
        if (this.coupon.limit < 0) {
            return this.toasty.error('Limit can not enter negative');
        }
        if (this.date) {
            this.coupon.expiredTime = new Date(this.date.year, this.date.month - 1, this.date.day).toUTCString();
        }
        else
            return this.toasty.error('Please select experied time!');
        this.couponService.create(this.coupon)
            .then(function () {
            _this.toasty.success('Coupon has been created');
            _this.router.navigate(['/coupons/list']);
        }, function (err) { return _this.toasty.error(err.data.data.message || 'Something went wrong!'); });
    };
    CouponCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] }
    ]; };
    CouponCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coupon-create',
            template: _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"]])
    ], CouponCreateComponent);
    return CouponCreateComponent;
}());



/***/ }),

/***/ "lYXc":
/*!******************************************!*\
  !*** ./src/app/coupon/coupon.routing.ts ***!
  \******************************************/
/*! exports provided: CouponRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponRoutingModule", function() { return CouponRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_form_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form/create.component */ "lSS8");
/* harmony import */ var _components_form_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/update.component */ "lj7x");
/* harmony import */ var _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/listing/listing.component */ "HpTL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'list',
        component: _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["CouponsComponent"],
        data: {
            title: 'Coupon manager',
            urls: [{ title: 'Coupons', url: '/coupons/list' }]
        }
    },
    {
        path: 'create',
        component: _components_form_create_component__WEBPACK_IMPORTED_MODULE_2__["CouponCreateComponent"],
        data: {
            title: 'Coupon manager',
            urls: [{ title: 'Coupons', url: '/coupons/list' }, { title: 'Create', url: '/coupons/create' }]
        }
    },
    {
        path: 'update/:id',
        component: _components_form_update_component__WEBPACK_IMPORTED_MODULE_3__["CouponUpdateComponent"],
        data: {
            title: 'Coupon manager',
            urls: [{ title: 'Coupons', url: '/coupons/list' }, { title: 'Update', url: '/coupons/update' }]
        }
    }
];
var CouponRoutingModule = /** @class */ (function () {
    function CouponRoutingModule() {
    }
    CouponRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponRoutingModule);
    return CouponRoutingModule;
}());



/***/ }),

/***/ "lj7x":
/*!************************************************************!*\
  !*** ./src/app/coupon/components/form/update.component.ts ***!
  \************************************************************/
/*! exports provided: CouponUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponUpdateComponent", function() { return CouponUpdateComponent; });
/* harmony import */ var _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./form.html */ "8XXq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/coupon.service */ "jFTd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponUpdateComponent = /** @class */ (function () {
    function CouponUpdateComponent(router, couponService, route, toasty) {
        this.router = router;
        this.couponService = couponService;
        this.route = route;
        this.toasty = toasty;
        this.isSubmitted = false;
        this.date = {
            year: '',
            month: '',
            day: ''
        };
    }
    CouponUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.couponService.findOne(id).then(function (resp) {
            _this.coupon = resp.data;
            _this.date.year = Number(resp.data.expiredTime.substr(0, 4));
            _this.date.month = Number(resp.data.expiredTime.substr(5, 2));
            _this.date.day = Number(resp.data.expiredTime.substr(8, 2)) + 1;
        });
    };
    CouponUpdateComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (frm.$invalid) {
            this.toasty.error('Invalid form, please try again.');
        }
        if (this.coupon.discountPercentage < 0 || this.coupon.discountPercentage > 100) {
            return this.toasty.error('Discount percentage ranges from 0 to 100');
        }
        if (this.coupon.limit < 0) {
            return this.toasty.error('Limit can not enter negative');
        }
        if (this.date) {
            this.coupon.expiredTime = new Date(this.date.year, this.date.month - 1, this.date.day).toUTCString();
        }
        else
            return this.toasty.error('Please select experied time!');
        var param = {
            name: this.coupon.name,
            code: this.coupon.code,
            discountPercentage: this.coupon.discountPercentage,
            limit: this.coupon.limit,
            expiredTime: this.coupon.expiredTime
        };
        this.couponService.update(this.coupon._id, param).then(function (resp) {
            _this.toasty.success('Updated successfully.');
        });
    };
    CouponUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] }
    ]; };
    CouponUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coupon-update',
            template: _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"]])
    ], CouponUpdateComponent);
    return CouponUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-coupon-module.js.map