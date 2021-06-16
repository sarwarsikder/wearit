(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "+NgO":
/*!*****************************************************************!*\
  !*** ./src/app/payment/components/payment/payment.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _raw_loader_payment_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./payment.html */ "qZBn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/payment.service */ "RL86");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-stripe */ "VFot");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(systemService, paymentService, toasty, stripeService, fb, activeModal) {
        var _this = this;
        this.systemService = systemService;
        this.paymentService = paymentService;
        this.toasty = toasty;
        this.stripeService = stripeService;
        this.fb = fb;
        this.activeModal = activeModal;
        this.userInfo = {};
        this.isSubmitted = false;
        this.cardHolderName = '';
        this.cardOptions = {};
        // optional parameters
        this.elementsOptions = {
            locale: 'en'
        };
        this.stripeToken = null;
        this.systemService.configs().then(function (res) { return _this.paymentGateway = res.paymentGatewayConfig; });
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.stripeService.setKey(window.appConfig.stripeKey);
        this.stripeTest = this.fb.group({
            cardName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    PaymentComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (frm.invalid) {
            return this.toasty.error('Please submit valid form');
        }
        if (!this.userInfo.paymentMethod) {
            return this.toasty.error('Please select Payment Method!');
        }
        if (this.userInfo.paymentMethod === 'stripe') {
            var name_1 = this.stripeTest.get('cardName').value;
            if (!name_1) {
                return this.toasty.error('Please enter card holder name!');
            }
            this.stripeService
                .createToken(this.card.getCard(), { name: name_1 })
                .subscribe(function (result) {
                if (result.token) {
                    // Use the token to create a charge or a customer
                    // https://stripe.com/docs/charges
                    _this.stripeToken = result.token.id;
                    _this.doPost();
                }
                else if (result.error) {
                    // Error creating the token
                    _this.toasty.error('Something went wrong, please try again!');
                }
            });
        }
        else {
            this.doPost();
        }
    };
    PaymentComponent.prototype.doPost = function () {
        var _this = this;
        if (this.userInfo.paymentMethod === 'paypal') {
            this.paymentService.request({
                gateway: 'paypal',
                service: 'shop-featured',
                itemId: this.packageID
            })
                .then(function (transactionResp) {
                window.location.href = transactionResp.data.redirectUrl;
            })
                .catch(function (err) {
                _this.activeModal.close();
                _this.toasty.error('Something went wrong, please try again!');
            });
        }
        else if (this.userInfo.paymentMethod === 'stripe') {
            this.paymentService.request({
                gateway: 'stripe',
                service: 'shop-featured',
                itemId: this.packageID,
                stripeToken: this.stripeToken
            })
                .then(function (res) {
                _this.activeModal.close();
                window.location.href = '/payments/success';
            })
                .catch(function (err) {
                _this.activeModal.close();
                _this.toasty.error('Something went wrong, please try again!');
            });
        }
        else {
            this.activeModal.close();
            window.location.href = '/payments/success';
        }
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["SystemService"] },
        { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"] },
        { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_6__["StripeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
    ]; };
    PaymentComponent.propDecorators = {
        packageID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        packageName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        packagePrice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        packageDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ngx_stripe__WEBPACK_IMPORTED_MODULE_6__["StripeCardComponent"],] }]
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: _raw_loader_payment_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_7__["SystemService"], _services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_6__["StripeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "15oJ":
/*!*************************************************************************!*\
  !*** ./src/app/payment/components/payment-history/history.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryComponent", function() { return PaymentHistoryComponent; });
/* harmony import */ var _raw_loader_history_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./history.html */ "AsQo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_package_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/package.service */ "OJ8B");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
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





var PaymentHistoryComponent = /** @class */ (function () {
    function PaymentHistoryComponent(packageService, toasty, utilService) {
        this.packageService = packageService;
        this.toasty = toasty;
        this.utilService = utilService;
        this.isLoading = false;
        this.packages = [];
        this.total = 0;
        this.take = 10;
        this.page = 1;
    }
    PaymentHistoryComponent.prototype.ngOnInit = function () {
        this.query();
    };
    PaymentHistoryComponent.prototype.query = function () {
        var _this = this;
        this.utilService.setLoading(true);
        this.isLoading = true;
        var params = {
            take: this.take,
            page: this.page,
            type: 'shop_featured'
        };
        this.packageService.invoices(params).then(function (resp) {
            _this.packages = resp.data.items;
            _this.total = resp.data.count;
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        }).catch(function () {
            _this.toasty.error('Something went wrong, please try again!');
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        });
    };
    PaymentHistoryComponent.ctorParameters = function () { return [
        { type: _services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    PaymentHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'payment-history',
            template: _raw_loader_history_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], PaymentHistoryComponent);
    return PaymentHistoryComponent;
}());



/***/ }),

/***/ "50v/":
/*!*********************************************************************************!*\
  !*** ./src/app/payment/components/payment-success/payment-success.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var _raw_loader_payment_success_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./payment-success.html */ "j1N3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentSuccessComponent = /** @class */ (function () {
    function PaymentSuccessComponent() {
    }
    PaymentSuccessComponent.ctorParameters = function () { return []; };
    PaymentSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: _raw_loader_payment_success_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentSuccessComponent);
    return PaymentSuccessComponent;
}());



/***/ }),

/***/ "AsQo":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/payment-history/history.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" *ngIf=\"!isLoading\">\r\n    <div class=\"card-body table-responsive\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>\r\n              Package name\r\n            </th>\r\n            <th>\r\n              Payment Gateway\r\n            </th>\r\n            <th>\r\n              Price\r\n            </th>\r\n            <th>\r\n              Transaction Id\r\n            </th>\r\n            <th>\r\n              Created At\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"!total\">\r\n            <td colspan=\"5\">\r\n              <p class=\"text-center text-danger\">There is no items yet..</p>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let item of packages, let i = index\">\r\n            <td>{{item?.products[0]?.description}}</td>\r\n            <td class=\"no-wrap\">\r\n              <span class=\"label label-primary\" *ngIf=\"item.paymentGateway === 'paypal'\">Paypal</span>\r\n              <span class=\"label label-warning\" *ngIf=\"item.paymentGateway === 'mygateglobal'\">Credit Card</span>\r\n            </td>\r\n            <td class=\"no-wrap\"><span class=\"label label-danger\">{{item?.price | currency}}</span></td>\r\n            <td>{{item?.transactionId}}</td>\r\n            <td>\r\n              <span>{{item.createdAt | date:'short'}}</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"display-inline\" [hidden]=\"total < take\">\r\n      <div class=\"pull-right\">\r\n        <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [maxSize]=\"5\" [pageSize]=\"take\" (pageChange)=\"query()\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "Caic":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/payment-upgrade/upgrade.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-body\">\r\n  <div class=\"container\">\r\n    <div class=\"row text-center mb-4\">\r\n      <div class=\"col-md-12\" *ngIf=\"!total && !isLoading\">\r\n        <p class=\"text-center text-danger\">There is no items yet..</p>\r\n      </div>\r\n      <div class=\"col-md-4\" *ngFor=\"let item of packages\">\r\n        <div class=\"card mb-4 shadow-sm\">\r\n          <div class=\"card-header\">\r\n            <h4 class=\"my-0 font-weight-normal\">{{item?.name}}</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h1 class=\"card-title pricing-card-title\">{{item?.price | currency}}\r\n              <small class=\"text-muted\">/ {{item.numDays}}\r\n                <span *ngIf=\"item.numDays > 1\"> days</span>\r\n                <span *ngIf=\"item.numDays < 2\"> day</span>\r\n              </small>\r\n            </h1>\r\n            <div class=\"des-hover\">\r\n              {{item?.description | slice:0:100}}{{item?.description.length > 100 ? '...' : ''}}\r\n              <span>{{item?.description}}</span>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" (click)=\"payment(item)\">Buy Package</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Chf1":
/*!********************************************!*\
  !*** ./src/app/payment/payment.routing.ts ***!
  \********************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_payment_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/payment-upgrade/upgrade.component */ "JaoX");
/* harmony import */ var _components_payment_history_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/payment-history/history.component */ "15oJ");
/* harmony import */ var _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/payment-success/payment-success.component */ "50v/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'history',
        component: _components_payment_history_history_component__WEBPACK_IMPORTED_MODULE_3__["PaymentHistoryComponent"],
        data: {
            title: 'Payments History',
            urls: [{ title: 'Payment', url: '/payments/history' }, { title: 'Payments History' }]
        }
    },
    {
        path: 'upgrade',
        component: _components_payment_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_2__["PaymentUpgradeComponent"],
        data: {
            title: 'Upgrade Featured Account',
            urls: [{ title: 'Payment', url: '/payments/history' }, { title: 'Upgrade Featured Account' }]
        }
    },
    {
        path: 'success',
        component: _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_4__["PaymentSuccessComponent"]
    }
];
var PaymentRoutingModule = /** @class */ (function () {
    function PaymentRoutingModule() {
    }
    PaymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PaymentRoutingModule);
    return PaymentRoutingModule;
}());



/***/ }),

/***/ "JaoX":
/*!*************************************************************************!*\
  !*** ./src/app/payment/components/payment-upgrade/upgrade.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentUpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentUpgradeComponent", function() { return PaymentUpgradeComponent; });
/* harmony import */ var _raw_loader_upgrade_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upgrade.html */ "Caic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_package_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/package.service */ "OJ8B");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../payment/payment.component */ "+NgO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PaymentUpgradeComponent = /** @class */ (function () {
    function PaymentUpgradeComponent(modalService, router, packageService, toasty, utilService) {
        this.modalService = modalService;
        this.router = router;
        this.packageService = packageService;
        this.toasty = toasty;
        this.utilService = utilService;
        this.isLoading = false;
        this.packages = [];
        this.page = 1;
        this.take = 10;
        this.total = 0;
        this.searchText = '';
        this.sortOption = {
            sortBy: 'ordering',
            sortType: 'desc'
        };
    }
    PaymentUpgradeComponent.prototype.ngOnInit = function () {
        this.query();
    };
    PaymentUpgradeComponent.prototype.query = function () {
        var _this = this;
        this.utilService.setLoading(true);
        this.isLoading = true;
        var params = {
            page: this.page,
            take: this.take,
            sort: "" + this.sortOption.sortBy,
            sortType: "" + this.sortOption.sortType,
            q: this.searchText
        };
        this.packageService.search(params).then(function (resp) {
            _this.packages = resp.data.items;
            _this.total = resp.data.count;
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        }).catch(function () {
            _this.toasty.error('Something went wrong, please try again!');
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        });
    };
    PaymentUpgradeComponent.prototype.keyPress = function (event) {
        if (event.charCode === 13) {
            this.query();
        }
    };
    PaymentUpgradeComponent.prototype.sortBy = function (field, type) {
        this.sortOption.sortBy = field;
        this.sortOption.sortType = type;
        this.query();
    };
    PaymentUpgradeComponent.prototype.payment = function (item) {
        if (item.status === 'refunded') {
            return this.toasty.error('This order has been refunded.');
        }
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"], ngbModalOptions);
        modalRef.componentInstance.packageID = item._id;
        modalRef.componentInstance.packageName = item.name;
        modalRef.componentInstance.packagePrice = item.price;
        modalRef.componentInstance.packageDuration = item.numDays;
    };
    PaymentUpgradeComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    PaymentUpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'packages-upgrade',
            template: _raw_loader_upgrade_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], PaymentUpgradeComponent);
    return PaymentUpgradeComponent;
}());



/***/ }),

/***/ "NSaA":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _payment_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment.routing */ "Chf1");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-stripe */ "VFot");
/* harmony import */ var _components_payment_history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/payment-history/history.component */ "15oJ");
/* harmony import */ var _components_payment_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/payment-upgrade/upgrade.component */ "JaoX");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/payment/payment.component */ "+NgO");
/* harmony import */ var _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/payment-success/payment-success.component */ "50v/");
/* harmony import */ var _services_package_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/package.service */ "OJ8B");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/payment.service */ "RL86");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _payment_routing__WEBPACK_IMPORTED_MODULE_4__["PaymentRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_5__["NgxStripeModule"].forRoot()
            ],
            declarations: [
                _components_payment_history_history_component__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryComponent"],
                _components_payment_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__["PaymentUpgradeComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__["PaymentSuccessComponent"]
            ],
            providers: [
                _services_package_service__WEBPACK_IMPORTED_MODULE_10__["PackageService"],
                _services_payment_service__WEBPACK_IMPORTED_MODULE_11__["PaymentService"]
            ],
            exports: [],
            entryComponents: [_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"]]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ }),

/***/ "OJ8B":
/*!*****************************************************!*\
  !*** ./src/app/payment/services/package.service.ts ***!
  \*****************************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
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



var PackageService = /** @class */ (function () {
    function PackageService(restangular) {
        this.restangular = restangular;
    }
    PackageService.prototype.search = function (params) {
        return this.restangular.one('packages/featured').get(params).toPromise();
    };
    PackageService.prototype.findOne = function (id) {
        return this.restangular.one('packages/featured', id).get().toPromise();
    };
    PackageService.prototype.invoices = function (params) {
        return this.restangular.one('payment/invoices').get(params).toPromise();
    };
    PackageService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    PackageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], PackageService);
    return PackageService;
}());



/***/ }),

/***/ "RL86":
/*!*****************************************************!*\
  !*** ./src/app/payment/services/payment.service.ts ***!
  \*****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
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



var PaymentService = /** @class */ (function () {
    function PaymentService(restangular) {
        this.restangular = restangular;
    }
    PaymentService.prototype.request = function (params) {
        return this.restangular.one('payment/transactions/request').customPOST(Object.assign(params, {
            redirectSuccessUrl: window.appConfig.paymentRedirectSuccessUrl,
            redirectCancelUrl: window.appConfig.paymentRedirectCancelUrl
        })).toPromise();
    };
    PaymentService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "j1N3":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/payment-success/payment-success.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"card card-body\">\r\n    <div class=\"text-center\">\r\n      <h1 class=\"display-3\" translate>Thank you!</h1>\r\n      <p class=\"lead\" translate>Your account has been upgrade successfully</p>\r\n      <hr>\r\n      <p class=\"lead\">\r\n        <a class=\"btn btn-primary btn-sm\" href=\"/payments/upgrade\" role=\"button\" translate>Continue upgrade</a>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <a class=\"btn btn-primary btn-sm\" href=\"/starter\" role=\"button\" translate>Go to Dashboard</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "qZBn":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/payment/payment.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <form #frm=\"ngForm\" (submit)=\"submit(frm)\">\r\n      <div class=\"row\" [hidden]=\"!paymentGateway.stripe.enable && !paymentGateway.paypal.enable\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label translate>Payment Method</label>\r\n            <p>\r\n              <label class=\"form-check-inline\" [hidden]=\"!paymentGateway.paypal.enable\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"mode\" [value]=\"'paypal'\" [(ngModel)]=\"userInfo.paymentMethod\">\r\n                <span translate>Paypal</span>\r\n              </label>\r\n              <br>\r\n              <label [hidden]=\"!paymentGateway.stripe.enable\" class=\"form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"mode\" [value]=\"'stripe'\" [(ngModel)]=\"userInfo.paymentMethod\">\r\n                <span translate>Credit Card</span>\r\n              </label>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\" *ngIf=\"userInfo.paymentMethod === 'stripe'\">\r\n          <div [formGroup]=\"stripeTest\">\r\n            <div class=\"form-group\">\r\n              <label translate>Card holder name</label>\r\n              <input type=\"text\" formControlName=\"cardName\" placeholder=\"Jane Doe\" class=\"form-control\" name=\"cardHolderName\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <ngx-stripe-card [options]=\"cardOptions\" [elementsOptions]=\"elementsOptions\"></ngx-stripe-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label translate>Summary</label>\r\n            <p>\r\n              <strong translate>Package: </strong>\r\n              <span *ngIf=\"packagePrice\">{{packageName}}</span>\r\n            </p>\r\n            <p>\r\n              <strong translate>Duration: </strong>\r\n              <span class=\"badge badge-warning\" *ngIf=\"packagePrice\">{{packageDuration}} Days</span>\r\n            </p>\r\n            <p>\r\n              <strong translate>Price: </strong>\r\n              <span class=\"badge badge-danger\" *ngIf=\"packagePrice\">{{packagePrice | currency}}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\" [hidden]=\"paymentGateway.stripe.enable || paymentGateway.paypal.enable\">\r\n          <div class=\"form-group text-center\">\r\n            <h1 class=\"display-3\">Sorry!</h1>\r\n            <p class=\"lead\">The current system does not have any payment gateways available.</p>\r\n            <p class=\"lead\">Please come back later!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <hr>\r\n          <p class=\"text-right\">\r\n            <button class=\"btn btn-warning\" (click)=\"activeModal.close('Cancel')\" translate>Cancel</button>\r\n            &nbsp;\r\n            <button [hidden]=\"!paymentGateway.stripe.enable && !paymentGateway.paypal.enable\" class=\"btn btn-warning\"\r\n              type=\"submit\" translate>Check Out</button>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map