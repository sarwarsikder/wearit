(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "FBSC":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot/forgot.component */ "w6oH");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/resolver */ "XSqR");




var AuthRoutes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
                resolve: { appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_3__["ConfigResolver"] }
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"],
                resolve: { appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_3__["ConfigResolver"] }
            },
            {
                path: 'forgot',
                component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"],
                resolve: { appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_3__["ConfigResolver"] }
            }
        ]
    }
];


/***/ }),

/***/ "Kc/E":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-box card\">\r\n  <div class=\"text-center mar-20\">\r\n    <img [src]=\"logoUrl\" width=\"100px\">\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form class=\"form-horizontal form-material\" (submit)=\"forgot(frm)\" #frm=\"ngForm\">\r\n      <h3 class=\"box-title m-b-20\">Forgot password</h3>\r\n      <div class=\"form-group \">\r\n        <div class=\"col-xs-12\">\r\n          <input class=\"form-control\" placeholder=\"Email\" required type=\"text\" name=\"email\"\r\n            [(ngModel)]=\"email\"  pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\"\r\n            #em=\"ngModel\" />\r\n        </div>\r\n        <div *ngIf=\"em.errors && (em.dirty || em.touched || submitted)\">\r\n          <p [hidden]=\"!em.errors.required\" class=\"error\">\r\n            Email is required\r\n          </p>\r\n          <p [hidden]=\"!em.errors.pattern\" class=\"error\">\r\n            Email is invalid format\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group text-center m-t-20\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Submit</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-12 font-14\">\r\n          <span class=\"text-dark pull-right\">\r\n            <a routerLink=\"/auth/login\"> Login</a>\r\n\r\n            Or\r\n\r\n            <a routerLink=\"/auth/register\"> Register</a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.routing */ "FBSC");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot/forgot.component */ "w6oH");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../media/media.module */ "vbE1");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/utils.module */ "XPsC");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_10__["MediaModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_11__["UtilsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__["ForgotComponent"]
            ],
            exports: [],
            providers: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.html */ "eD7v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, route, toasty) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.toasty = toasty;
        this.keyword = 'title';
        this.malls = [];
        this.dialCode = '';
        this.shop = {
            email: '',
            password: ''
        };
        this.mallFilterSelected = {
            mall: ''
        };
        this.confirmPassword = '';
        this.submitted = false;
        this.logoUrl = route.snapshot.data['appConfig'] ? route.snapshot.data['appConfig'].siteLogo : '/assets/images/logo.jpg';
    }
    RegisterComponent.prototype.selectEvent = function (item) {
        //this.shop.mallId = item._id;
    };
    RegisterComponent.prototype.onChangeSearch = function (search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    RegisterComponent.prototype.onFocused = function (e) {
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isLoggedin()) {
            this.auth.getCurrentUser().then(function (user) {
                _this.currentUser = user;
            });
        }
        this.auth.getMall().then(function (mall) {
            _this.malls = mall.items;
        });
        // TODO - check if user login here or the link have access token
        // then we can query user and hide password field and show user info
        this.issueDocumentOptions = {
            url: window.appConfig.apiBaseUrl + '/shops/register/document',
            fileFieldName: 'file',
            hintText: 'Click or drag verificaiton document here',
            onFinish: function (resp) {
                _this.issueDocument = resp.data;
            }
        };
    };
    RegisterComponent.prototype.submit = function (form) {
        var _this = this;
        if (this.mallFilterSelected.mall != '') {
            this.shop.mallId = this.mallFilterSelected.mall._id;
        }
        else {
            delete this.shop["mallId"];
        }
        console.log(this.shop);
        this.submitted = true;
        if (form.invalid) {
            return;
        }
        if (this.shop.password !== this.confirmPassword) {
            return this.toasty.error('Password does not match.');
        }
        if (!this.issueDocument) {
            return this.toasty.error('Please upload document for verification.');
        }
        this.shop.phoneNumber = "" + this.dialCode + this.shop.phoneNumber;
        this.shop.verificationIssueId = this.issueDocument._id;
        this.auth.register(this.shop)
            .then(function (resp) {
            _this.toasty.success('Your account has been created. Wait admin to verify.');
            _this.router.navigate(['/auth/login']);
        })
            .catch(function (e) { return _this.toasty.error(e.data.data.message || 'Something went wrong, please try again'); }); // TODO - implement me
    };
    RegisterComponent.prototype.selectDial = function (event) {
        this.dialCode = event;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: _raw_loader_register_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, route, toasty) {
        this.router = router;
        this.route = route;
        this.toasty = toasty;
        this.credentials = {
            email: '',
            password: ''
        };
        this.logoUrl = route.snapshot.data['appConfig'] ? route.snapshot.data['appConfig'].siteLogo : '/assets/images/logo.jpg';
        this.Auth = auth;
        if (auth.isLoggedin()) {
            this.router.navigate(['/starter']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.Auth.login(this.credentials).then(function (resp) { return _this.router.navigate(['/starter']); })
            .catch(function (err) {
            if (err.data.data.message) {
                return _this.toasty.error(err.data.data.message);
            }
            return _this.toasty.error('Something went wrong, please try again!');
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "eD7v":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-box card register-box\">\r\n  <div class=\"text-center mar-20\">\r\n    <img [src]=\"logoUrl\" width=\"100px\">\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div *ngIf=\"currentUser && currentUser.isShop\">\r\n      <p class=\"text-center\">Hello {{currentUser?.name}}</p>\r\n      <p class=\"text-center\">\r\n        You have registered shop. Go to <a [routerLink]=\"['/starter']\">your dashboard</a>\r\n      </p>\r\n    </div>\r\n    <form class=\"form-horizontal form-material\" (submit)=\"submit(frm)\" #frm=\"ngForm\">\r\n      <h3 class=\"box-title m-b-20 text-center\">Register seller</h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Shop Name\" required type=\"text\" autocomplete=\"off\" name=\"name\"\r\n              [(ngModel)]=\"shop.name\" #name=\"ngModel\" />\r\n            <div *ngIf=\"name.errors && (name.dirty || name.touched || submitted)\">\r\n              <p [hidden]=\"!name.errors.required\" class=\"error\">\r\n                Name is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Email\" required type=\"email\" autocomplete=\"off\" name=\"email\"\r\n              pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,3}$\" [(ngModel)]=\"shop.email\" #email=\"ngModel\" />\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched ||\r\n              submitted)\">\r\n              <p [hidden]=\"!email.errors.required\" class=\"error\">\r\n                Email is required\r\n              </p>\r\n              <p [hidden]=\"!email.errors?.pattern\" class=\"error\">\r\n                Email is invalid email address.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Password\" required type=\"password\" autocomplete=\"off\" name=\"pw\"\r\n              [(ngModel)]=\"shop.password\" #password=\"ngModel\" />\r\n            <div *ngIf=\"password.errors && (password.dirty || password.touched || submitted)\">\r\n              <p [hidden]=\"!password.errors.required\" class=\"error\">\r\n                Password is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Confirm Password\" required type=\"password\" autocomplete=\"off\" name=\"confirmPwd\"\r\n              [(ngModel)]=\"confirmPassword\" #confirmPwd=\"ngModel\" />\r\n            <div *ngIf=\"confirmPwd.errors && (confirmPwd.dirty || confirmPwd.touched || submitted)\">\r\n              <p [hidden]=\"!confirmPwd.errors.required\" class=\"error\">\r\n                Confirm password is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <dial-code (selectCode)=\"selectDial($event)\"></dial-code>\r\n              <input class=\"form-control\" placeholder=\"Phone number\" required type=\"text\" pattern=\"[0-9]{9,11}\"\r\n                autocomplete=\"off\" name=\"Phone\" [(ngModel)]=\"shop.phoneNumber\" #phoneNumber=\"ngModel\" />\r\n              <div *ngIf=\"phoneNumber.errors && (phoneNumber.dirty ||\r\n                phoneNumber.touched || submitted)\">\r\n                <p [hidden]=\"!phoneNumber.errors.required\" class=\"error\">\r\n                  Phone number is required\r\n                </p>\r\n                <p [hidden]=\"!phoneNumber.errors.pattern\" class=\"error\">\r\n                  Phone must be 11 characters                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Shop address\" required type=\"text\" autocomplete=\"off\" name=\"address\"\r\n              [(ngModel)]=\"shop.address\" #address=\"ngModel\" />\r\n            <div *ngIf=\"address.errors && (address.dirty || address.touched || submitted)\">\r\n              <p [hidden]=\"!address.errors.required\" class=\"error\">\r\n                Address is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Zipcode\" required type=\"text\" autocomplete=\"off\" name=\"address\"\r\n              [(ngModel)]=\"shop.zipcode\" #zipcode=\"ngModel\" />\r\n            <div *ngIf=\"zipcode.errors && (zipcode.dirty || zipcode.touched || submitted)\">\r\n              <p [hidden]=\"!zipcode.errors.required\" class=\"error\">\r\n                Zipcode is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"City\" required type=\"text\" autocomplete=\"off\" name=\"city\"\r\n              [(ngModel)]=\"shop.city\" #city=\"ngModel\" />\r\n            <div *ngIf=\"city.errors && (city.dirty || city.touched || submitted)\">\r\n              <p [hidden]=\"!city.errors.required\" class=\"error\">\r\n                City is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"State\" required type=\"text\" autocomplete=\"off\" name=\"state\"\r\n              [(ngModel)]=\"shop.state\" #state=\"ngModel\" />\r\n            <div *ngIf=\"state.errors && (state.dirty || state.touched || submitted)\">\r\n              <p [hidden]=\"!state.errors.required\" class=\"error\">\r\n                State is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Country (*)\" required type=\"text\" autocomplete=\"off\" name=\"country\"\r\n              [(ngModel)]=\"shop.country\" #country=\"ngModel\" />\r\n            <div *ngIf=\"country.errors && (country.dirty || country.touched || submitted)\">\r\n              <p [hidden]=\"!country.errors.required\" class=\"error\">\r\n                Country is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Area\" required type=\"text\" autocomplete=\"off\" name=\"area\"\r\n              [(ngModel)]=\"shop.area\" #city=\"ngModel\" />\r\n            <!-- <div *ngIf=\"city.errors && (city.dirty || city.touched || submitted)\">\r\n              <p [hidden]=\"!city.errors.required\" class=\"error\">\r\n                City is required\r\n              </p>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <div class=\"ng-autocomplete\">\r\n              <ng-autocomplete\r\n                [data]=\"malls\"\r\n                [searchKeyword]=\"keyword\"\r\n                placeholder=\"Enter the Mall Name\"\r\n                (selected)='selectEvent($event)'\r\n                (inputChanged)='onChangeSearch($event)'\r\n                (inputFocused)='onFocused($event)'\r\n                historyIdentifier=\"malls\"\r\n                name=\"mall\"\r\n                [(ngModel)]= mallFilterSelected.mall\r\n                [itemTemplate]=\"itemTemplate\"\r\n                [notFoundTemplate]=\"notFoundTemplate\">\r\n              </ng-autocomplete>\r\n            \r\n              <ng-template #itemTemplate let-item>\r\n                <a [innerHTML]=\"item.title\"></a>\r\n              </ng-template>\r\n            \r\n              <ng-template #notFoundTemplate let-notFound>\r\n                <div [innerHTML]=\"notFound\"></div>\r\n              </ng-template>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <span *ngIf=\"issueDocument\">\r\n            <span>Document was uploaded</span> <br>\r\n            <img src=\"/assets/images/confirm-certificate.png\" alt=\"Uploaded document\" style=\"width: 50px\" />\r\n          </span>\r\n          <file-upload [options]=\"issueDocumentOptions\"></file-upload>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <button class=\"btn btn-info btn-lg ext-uppercase waves-effect waves-light\" type=\"submit\">Register</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-12 font-14\">\r\n          <a class=\"text-dark pull-right\" routerLink=\"/auth/login\"> Login?</a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "qlzE":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js ***!
  \******************************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







/**
 * @license Angular v7.2.16
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */



var BrowserXhr = /*#__PURE__*/function () {
  function BrowserXhr() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BrowserXhr);
  }
  /**
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BrowserXhr, [{
    key: "build",
    value: function build() {
      return (
        /** @type {?} */
        new XMLHttpRequest()
      );
    }
  }]);

  return BrowserXhr;
}();

BrowserXhr.ɵfac = function BrowserXhr_Factory(t) {
  return new (t || BrowserXhr)();
};

BrowserXhr.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: BrowserXhr,
  factory: BrowserXhr.ɵfac
});
/** @nocollapse */

BrowserXhr.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BrowserXhr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @enum {number} */


var RequestMethod = {
  Get: 0,
  Post: 1,
  Put: 2,
  Delete: 3,
  Options: 4,
  Head: 5,
  Patch: 6
};
RequestMethod[RequestMethod.Get] = 'Get';
RequestMethod[RequestMethod.Post] = 'Post';
RequestMethod[RequestMethod.Put] = 'Put';
RequestMethod[RequestMethod.Delete] = 'Delete';
RequestMethod[RequestMethod.Options] = 'Options';
RequestMethod[RequestMethod.Head] = 'Head';
RequestMethod[RequestMethod.Patch] = 'Patch';
/** @enum {number} */

var ReadyState = {
  Unsent: 0,
  Open: 1,
  HeadersReceived: 2,
  Loading: 3,
  Done: 4,
  Cancelled: 5
};
ReadyState[ReadyState.Unsent] = 'Unsent';
ReadyState[ReadyState.Open] = 'Open';
ReadyState[ReadyState.HeadersReceived] = 'HeadersReceived';
ReadyState[ReadyState.Loading] = 'Loading';
ReadyState[ReadyState.Done] = 'Done';
ReadyState[ReadyState.Cancelled] = 'Cancelled';
/** @enum {number} */

var ResponseType = {
  Basic: 0,
  Cors: 1,
  Default: 2,
  Error: 3,
  Opaque: 4
};
ResponseType[ResponseType.Basic] = 'Basic';
ResponseType[ResponseType.Cors] = 'Cors';
ResponseType[ResponseType.Default] = 'Default';
ResponseType[ResponseType.Error] = 'Error';
ResponseType[ResponseType.Opaque] = 'Opaque';
/** @enum {number} */

var ContentType = {
  NONE: 0,
  JSON: 1,
  FORM: 2,
  FORM_DATA: 3,
  TEXT: 4,
  BLOB: 5,
  ARRAY_BUFFER: 6
};
ContentType[ContentType.NONE] = 'NONE';
ContentType[ContentType.JSON] = 'JSON';
ContentType[ContentType.FORM] = 'FORM';
ContentType[ContentType.FORM_DATA] = 'FORM_DATA';
ContentType[ContentType.TEXT] = 'TEXT';
ContentType[ContentType.BLOB] = 'BLOB';
ContentType[ContentType.ARRAY_BUFFER] = 'ARRAY_BUFFER';
/** @enum {number} */

var ResponseContentType = {
  Text: 0,
  Json: 1,
  ArrayBuffer: 2,
  Blob: 3
};
ResponseContentType[ResponseContentType.Text] = 'Text';
ResponseContentType[ResponseContentType.Json] = 'Json';
ResponseContentType[ResponseContentType.ArrayBuffer] = 'ArrayBuffer';
ResponseContentType[ResponseContentType.Blob] = 'Blob';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */

var Headers = /*#__PURE__*/function () {
  // TODO(vicb): any -> string|string[]

  /**
   * @param {?=} headers
   */
  function Headers(headers) {
    var _this = this;

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Headers);

    /**
     * \@internal header names are lower case
     */
    this._headers = new Map();
    /**
     * \@internal map lower case names to actual names
     */

    this._normalizedNames = new Map();

    if (!headers) {
      return;
    }

    if (headers instanceof Headers) {
      headers.forEach(function (values, name) {
        values.forEach(function (value) {
          return _this.append(name, value);
        });
      });
      return;
    }

    Object.keys(headers).forEach(function (name) {
      /** @type {?} */
      var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];

      _this.delete(name);

      values.forEach(function (value) {
        return _this.append(name, value);
      });
    });
  }
  /**
   * Returns a new Headers instance from the given DOMString of Response Headers
   * @param {?} headersString
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Headers, [{
    key: "append",
    value:
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function append(name, value) {
      /** @type {?} */
      var values = this.getAll(name);

      if (values === null) {
        this.set(name, value);
      } else {
        values.push(value);
      }
    }
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */

  }, {
    key: "delete",
    value: function _delete(name) {
      /** @type {?} */
      var lcName = name.toLowerCase();

      this._normalizedNames.delete(lcName);

      this._headers.delete(lcName);
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "forEach",
    value: function forEach(fn) {
      var _this2 = this;

      this._headers.forEach(function (values, lcName) {
        return fn(values, _this2._normalizedNames.get(lcName), _this2._headers);
      });
    }
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */

  }, {
    key: "get",
    value: function get(name) {
      /** @type {?} */
      var values = this.getAll(name);

      if (values === null) {
        return null;
      }

      return values.length > 0 ? values[0] : null;
    }
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */

  }, {
    key: "has",
    value: function has(name) {
      return this._headers.has(name.toLowerCase());
    }
    /**
     * Returns the names of the headers
     * @return {?}
     */

  }, {
    key: "keys",
    value: function keys() {
      return Array.from(this._normalizedNames.values());
    }
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      if (Array.isArray(value)) {
        if (value.length) {
          this._headers.set(name.toLowerCase(), [value.join(',')]);
        }
      } else {
        this._headers.set(name.toLowerCase(), [value]);
      }

      this.mayBeSetNormalizedName(name);
    }
    /**
     * Returns values of all headers.
     * @return {?}
     */

  }, {
    key: "values",
    value: function values() {
      return Array.from(this._headers.values());
    }
    /**
     * Returns string of all headers.
     * @return {?}
     */
    // TODO(vicb): returns {[name: string]: string[]}

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this3 = this;

      /** @type {?} */
      var serialized = {};

      this._headers.forEach(function (values, name) {
        /** @type {?} */
        var split = [];
        values.forEach(function (v) {
          return split.push.apply(split, Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(v.split(',')));
        });
        serialized[
        /** @type {?} */
        _this3._normalizedNames.get(name)] = split;
      });

      return serialized;
    }
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */

  }, {
    key: "getAll",
    value: function getAll(name) {
      return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    }
    /**
     * This method is not implemented.
     * @return {?}
     */

  }, {
    key: "entries",
    value: function entries() {
      throw new Error('"entries" method is not implemented on Headers class');
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */

  }, {
    key: "mayBeSetNormalizedName",
    value: function mayBeSetNormalizedName(name) {
      /** @type {?} */
      var lcName = name.toLowerCase();

      if (!this._normalizedNames.has(lcName)) {
        this._normalizedNames.set(lcName, name);
      }
    }
  }], [{
    key: "fromResponseHeaderString",
    value: function fromResponseHeaderString(headersString) {
      /** @type {?} */
      var headers = new Headers();
      headersString.split('\n').forEach(function (line) {
        /** @type {?} */
        var index = line.indexOf(':');

        if (index > 0) {
          /** @type {?} */
          var name = line.slice(0, index);
          /** @type {?} */

          var value = line.slice(index + 1).trim();
          headers.set(name, value);
        }
      });
      return headers;
    }
  }]);

  return Headers;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * \@usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var ResponseOptions = /*#__PURE__*/function () {
  /**
   * @param {?=} opts
   */
  function ResponseOptions() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ResponseOptions);

    var body = opts.body,
        status = opts.status,
        headers = opts.headers,
        statusText = opts.statusText,
        type = opts.type,
        url = opts.url;
    this.body = body != null ? body : null;
    this.status = status != null ? status : null;
    this.headers = headers != null ? headers : null;
    this.statusText = statusText != null ? statusText : null;
    this.type = type != null ? type : null;
    this.url = url != null ? url : null;
  }
  /**
   * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
   * override
   * existing values. This method will not change the values of the instance on which it is being
   * called.
   *
   * This may be useful when sharing a base `ResponseOptions` object inside tests,
   * where certain properties may change from test to test.
   *
   * \@usageNotes
   * ### Example
   *
   * ```typescript
   * import {ResponseOptions, Response} from '\@angular/http';
   *
   * var options = new ResponseOptions({
   *   body: {name: 'Jeff'}
   * });
   * var res = new Response(options.merge({
   *   url: 'https://google.com'
   * }));
   * console.log('options.url:', options.url); // null
   * console.log('res.json():', res.json()); // Object {name: "Jeff"}
   * console.log('res.url:', res.url); // https://google.com
   * ```
   * @param {?=} options
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ResponseOptions, [{
    key: "merge",
    value: function merge(options) {
      return new ResponseOptions({
        body: options && options.body != null ? options.body : this.body,
        status: options && options.status != null ? options.status : this.status,
        headers: options && options.headers != null ? options.headers : this.headers,
        statusText: options && options.statusText != null ? options.statusText : this.statusText,
        type: options && options.type != null ? options.type : this.type,
        url: options && options.url != null ? options.url : this.url
      });
    }
  }]);

  return ResponseOptions;
}();
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * \@usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var BaseResponseOptions = /*#__PURE__*/function (_ResponseOptions) {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(BaseResponseOptions, _ResponseOptions);

  var _super = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseResponseOptions);

  function BaseResponseOptions() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseResponseOptions);

    return _super.call(this, {
      status: 200,
      statusText: 'Ok',
      type: ResponseType.Default,
      headers: new Headers()
    });
  }

  return BaseResponseOptions;
}(ResponseOptions);

BaseResponseOptions.ɵfac = function BaseResponseOptions_Factory(t) {
  return new (t || BaseResponseOptions)();
};

BaseResponseOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: BaseResponseOptions,
  factory: BaseResponseOptions.ɵfac
});
/** @nocollapse */

BaseResponseOptions.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BaseResponseOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 * @abstract
 */


var ConnectionBackend = function ConnectionBackend() {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ConnectionBackend);
};
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 * @abstract
 */


var Connection = function Connection() {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Connection);
};
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 * @abstract
 */


var XSRFStrategy = function XSRFStrategy() {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, XSRFStrategy);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} method
 * @return {?}
 */


function normalizeMethodName(method) {
  if (typeof method !== 'string') return method;

  switch (method.toUpperCase()) {
    case 'GET':
      return RequestMethod.Get;

    case 'POST':
      return RequestMethod.Post;

    case 'PUT':
      return RequestMethod.Put;

    case 'DELETE':
      return RequestMethod.Delete;

    case 'OPTIONS':
      return RequestMethod.Options;

    case 'HEAD':
      return RequestMethod.Head;

    case 'PATCH':
      return RequestMethod.Patch;
  }

  throw new Error("Invalid request method. The method \"".concat(method, "\" is not supported."));
}
/** @type {?} */


var isSuccess = function isSuccess(status) {
  return status >= 200 && status < 300;
};
/**
 * @param {?} xhr
 * @return {?}
 */


function getResponseURL(xhr) {
  if ('responseURL' in xhr) {
    return xhr.responseURL;
  }

  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }

  return null;
}
/**
 * @param {?} input
 * @return {?}
 */


function stringToArrayBuffer(input) {
  /** @type {?} */
  var view = new Uint16Array(input.length);

  for (var i = 0, strLen = input.length; i < strLen; i++) {
    view[i] = input.charCodeAt(i);
  }

  return view.buffer;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @param {?=} rawParams
 * @return {?}
 */


function paramParser() {
  var rawParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  /** @type {?} */
  var map = new Map();

  if (rawParams.length > 0) {
    /** @type {?} */
    var params = rawParams.split('&');
    params.forEach(function (param) {
      /** @type {?} */
      var eqIdx = param.indexOf('=');

      var _ref = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)],
          _ref2 = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];
      /** @type {?} */


      var list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }

  return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 *
 */


var QueryEncoder = /*#__PURE__*/function () {
  function QueryEncoder() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QueryEncoder);
  }

  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QueryEncoder, [{
    key: "encodeKey",
    value:
    /**
     * @param {?} key
     * @return {?}
     */
    function encodeKey(key) {
      return standardEncoding(key);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "encodeValue",
    value: function encodeValue(value) {
      return standardEncoding(value);
    }
  }]);

  return QueryEncoder;
}();
/**
 * @param {?} v
 * @return {?}
 */


function standardEncoding(v) {
  return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var URLSearchParams = /*#__PURE__*/function () {
  /**
   * @param {?=} rawParams
   * @param {?=} queryEncoder
   */
  function URLSearchParams() {
    var rawParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var queryEncoder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new QueryEncoder();

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, URLSearchParams);

    this.rawParams = rawParams;
    this.queryEncoder = queryEncoder;
    this.paramsMap = paramParser(rawParams);
  }
  /**
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(URLSearchParams, [{
    key: "clone",
    value: function clone() {
      /** @type {?} */
      var clone = new URLSearchParams('', this.queryEncoder);
      clone.appendAll(this);
      return clone;
    }
    /**
     * @param {?} param
     * @return {?}
     */

  }, {
    key: "has",
    value: function has(param) {
      return this.paramsMap.has(param);
    }
    /**
     * @param {?} param
     * @return {?}
     */

  }, {
    key: "get",
    value: function get(param) {
      /** @type {?} */
      var storedParam = this.paramsMap.get(param);
      return Array.isArray(storedParam) ? storedParam[0] : null;
    }
    /**
     * @param {?} param
     * @return {?}
     */

  }, {
    key: "getAll",
    value: function getAll(param) {
      return this.paramsMap.get(param) || [];
    }
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "set",
    value: function set(param, val) {
      if (val === void 0 || val === null) {
        this.delete(param);
        return;
      }
      /** @type {?} */


      var list = this.paramsMap.get(param) || [];
      list.length = 0;
      list.push(val);
      this.paramsMap.set(param, list);
    } // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better

    /**
     * @param {?} searchParams
     * @return {?}
     */

  }, {
    key: "setAll",
    value: function setAll(searchParams) {
      var _this4 = this;

      searchParams.paramsMap.forEach(function (value, param) {
        /** @type {?} */
        var list = _this4.paramsMap.get(param) || [];
        list.length = 0;
        list.push(value[0]);

        _this4.paramsMap.set(param, list);
      });
    }
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "append",
    value: function append(param, val) {
      if (val === void 0 || val === null) return;
      /** @type {?} */

      var list = this.paramsMap.get(param) || [];
      list.push(val);
      this.paramsMap.set(param, list);
    } // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better

    /**
     * @param {?} searchParams
     * @return {?}
     */

  }, {
    key: "appendAll",
    value: function appendAll(searchParams) {
      var _this5 = this;

      searchParams.paramsMap.forEach(function (value, param) {
        /** @type {?} */
        var list = _this5.paramsMap.get(param) || [];

        for (var i = 0; i < value.length; ++i) {
          list.push(value[i]);
        }

        _this5.paramsMap.set(param, list);
      });
    } // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better

    /**
     * @param {?} searchParams
     * @return {?}
     */

  }, {
    key: "replaceAll",
    value: function replaceAll(searchParams) {
      var _this6 = this;

      searchParams.paramsMap.forEach(function (value, param) {
        /** @type {?} */
        var list = _this6.paramsMap.get(param) || [];
        list.length = 0;

        for (var i = 0; i < value.length; ++i) {
          list.push(value[i]);
        }

        _this6.paramsMap.set(param, list);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "toString",
    value: function toString() {
      var _this7 = this;

      /** @type {?} */
      var paramsList = [];
      this.paramsMap.forEach(function (values, k) {
        values.forEach(function (v) {
          return paramsList.push(_this7.queryEncoder.encodeKey(k) + '=' + _this7.queryEncoder.encodeValue(v));
        });
      });
      return paramsList.join('&');
    }
    /**
     * @param {?} param
     * @return {?}
     */

  }, {
    key: "delete",
    value: function _delete(param) {
      this.paramsMap.delete(param);
    }
  }]);

  return URLSearchParams;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */


var Body = /*#__PURE__*/function () {
  function Body() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Body);
  }

  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Body, [{
    key: "json",
    value:
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    function json() {
      if (typeof this._body === 'string') {
        return JSON.parse(
        /** @type {?} */
        this._body);
      }

      if (this._body instanceof ArrayBuffer) {
        return JSON.parse(this.text());
      }

      return this._body;
    }
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */

  }, {
    key: "text",
    value: function text() {
      var encodingHint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'legacy';

      if (this._body instanceof URLSearchParams) {
        return this._body.toString();
      }

      if (this._body instanceof ArrayBuffer) {
        switch (encodingHint) {
          case 'legacy':
            return String.fromCharCode.apply(null, new Uint16Array(
            /** @type {?} */
            this._body));

          case 'iso-8859':
            return String.fromCharCode.apply(null, new Uint8Array(
            /** @type {?} */
            this._body));

          default:
            throw new Error("Invalid value for encodingHint: ".concat(encodingHint));
        }
      }

      if (this._body == null) {
        return '';
      }

      if (typeof this._body === 'object') {
        return JSON.stringify(this._body, null, 2);
      }

      return this._body.toString();
    }
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */

  }, {
    key: "arrayBuffer",
    value: function arrayBuffer() {
      if (this._body instanceof ArrayBuffer) {
        return (
          /** @type {?} */
          this._body
        );
      }

      return stringToArrayBuffer(this.text());
    }
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */

  }, {
    key: "blob",
    value: function blob() {
      if (this._body instanceof Blob) {
        return (
          /** @type {?} */
          this._body
        );
      }

      if (this._body instanceof ArrayBuffer) {
        return new Blob([this._body]);
      }

      throw new Error('The request body isn\'t either a blob or an array buffer');
    }
  }]);

  return Body;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var Response = /*#__PURE__*/function (_Body) {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(Response, _Body);

  var _super2 = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(Response);

  /**
   * @param {?} responseOptions
   */
  function Response(responseOptions) {
    var _this8;

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Response);

    _this8 = _super2.call(this);
    _this8._body = responseOptions.body;
    _this8.status =
    /** @type {?} */
    responseOptions.status;
    _this8.ok = _this8.status >= 200 && _this8.status <= 299;
    _this8.statusText = responseOptions.statusText;
    _this8.headers = responseOptions.headers;
    _this8.type =
    /** @type {?} */
    responseOptions.type;
    _this8.url =
    /** @type {?} */
    responseOptions.url;
    return _this8;
  }
  /**
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Response, [{
    key: "toString",
    value: function toString() {
      return "Response with status: ".concat(this.status, " ").concat(this.statusText, " for URL: ").concat(this.url);
    }
  }]);

  return Response;
}(Body);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var _nextRequestId = 0;
/** @type {?} */

var JSONP_HOME = '__ng_jsonp__';
/** @type {?} */

var _jsonpConnections = null;
/**
 * @return {?}
 */

function _getJsonpConnections() {
  /** @type {?} */
  var w = typeof window == 'object' ? window : {};

  if (_jsonpConnections === null) {
    _jsonpConnections = w[JSONP_HOME] = {};
  }

  return _jsonpConnections;
} // Make sure not to evaluate this in a non-browser environment!


var BrowserJsonp = /*#__PURE__*/function () {
  function BrowserJsonp() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BrowserJsonp);
  }

  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BrowserJsonp, [{
    key: "build",
    value: // Construct a <script> element with the specified URL

    /**
     * @param {?} url
     * @return {?}
     */
    function build(url) {
      /** @type {?} */
      var node = document.createElement('script');
      node.src = url;
      return node;
    }
    /**
     * @return {?}
     */

  }, {
    key: "nextRequestID",
    value: function nextRequestID() {
      return "__req".concat(_nextRequestId++);
    }
    /**
     * @param {?} id
     * @return {?}
     */

  }, {
    key: "requestCallback",
    value: function requestCallback(id) {
      return "".concat(JSONP_HOME, ".").concat(id, ".finished");
    }
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */

  }, {
    key: "exposeConnection",
    value: function exposeConnection(id, connection) {
      /** @type {?} */
      var connections = _getJsonpConnections();

      connections[id] = connection;
    }
    /**
     * @param {?} id
     * @return {?}
     */

  }, {
    key: "removeConnection",
    value: function removeConnection(id) {
      /** @type {?} */
      var connections = _getJsonpConnections();

      connections[id] = null;
    } // Attach the <script> element to the DOM

    /**
     * @param {?} node
     * @return {?}
     */

  }, {
    key: "send",
    value: function send(node) {
      document.body.appendChild(
      /** @type {?} */
      node);
    } // Remove <script> element from the DOM

    /**
     * @param {?} node
     * @return {?}
     */

  }, {
    key: "cleanup",
    value: function cleanup(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(
        /** @type {?} */
        node);
      }
    }
  }]);

  return BrowserJsonp;
}();

BrowserJsonp.ɵfac = function BrowserJsonp_Factory(t) {
  return new (t || BrowserJsonp)();
};

BrowserJsonp.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: BrowserJsonp,
  factory: BrowserJsonp.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BrowserJsonp, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
/** @type {?} */

var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */

var JSONPConnection = /*#__PURE__*/function () {
  /**
   * \@internal
   * @param {?} req
   * @param {?} _dom
   * @param {?=} baseResponseOptions
   */
  function JSONPConnection(req, _dom, baseResponseOptions) {
    var _this9 = this;

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, JSONPConnection);

    this._dom = _dom;
    this.baseResponseOptions = baseResponseOptions;
    this._finished = false;

    if (req.method !== RequestMethod.Get) {
      throw new TypeError(JSONP_ERR_WRONG_METHOD);
    }

    this.request = req;
    this.response = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (responseObserver) {
      _this9.readyState = ReadyState.Loading;
      /** @type {?} */

      var id = _this9._id = _dom.nextRequestID();

      _dom.exposeConnection(id, _this9); // Workaround Dart
      // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);

      /** @type {?} */


      var callback = _dom.requestCallback(_this9._id);
      /** @type {?} */


      var url = req.url;

      if (url.indexOf('=JSONP_CALLBACK&') > -1) {
        url = url.replace('=JSONP_CALLBACK&', "=".concat(callback, "&"));
      } else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
        url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + "=".concat(callback);
      }
      /** @type {?} */


      var script = _this9._script = _dom.build(url);
      /** @type {?} */


      var onLoad = function onLoad(event) {
        if (_this9.readyState === ReadyState.Cancelled) return;
        _this9.readyState = ReadyState.Done;

        _dom.cleanup(script);

        if (!_this9._finished) {
          /** @type {?} */
          var _responseOptions = new ResponseOptions({
            body: JSONP_ERR_NO_CALLBACK,
            type: ResponseType.Error,
            url: url
          });

          if (baseResponseOptions) {
            _responseOptions = baseResponseOptions.merge(_responseOptions);
          }

          responseObserver.error(new Response(_responseOptions));
          return;
        }
        /** @type {?} */


        var responseOptions = new ResponseOptions({
          body: _this9._responseData,
          url: url
        });

        if (_this9.baseResponseOptions) {
          responseOptions = _this9.baseResponseOptions.merge(responseOptions);
        }

        responseObserver.next(new Response(responseOptions));
        responseObserver.complete();
      };
      /** @type {?} */


      var onError = function onError(error) {
        if (_this9.readyState === ReadyState.Cancelled) return;
        _this9.readyState = ReadyState.Done;

        _dom.cleanup(script);
        /** @type {?} */


        var responseOptions = new ResponseOptions({
          body: error.message,
          type: ResponseType.Error
        });

        if (baseResponseOptions) {
          responseOptions = baseResponseOptions.merge(responseOptions);
        }

        responseObserver.error(new Response(responseOptions));
      };

      script.addEventListener('load', onLoad);
      script.addEventListener('error', onError);

      _dom.send(script);

      return function () {
        _this9.readyState = ReadyState.Cancelled;
        script.removeEventListener('load', onLoad);
        script.removeEventListener('error', onError);

        _this9._dom.cleanup(script);
      };
    });
  }
  /**
   * Callback called when the JSONP request completes, to notify the application
   * of the new data.
   * @param {?=} data
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(JSONPConnection, [{
    key: "finished",
    value: function finished(data) {
      // Don't leak connections
      this._finished = true;

      this._dom.removeConnection(this._id);

      if (this.readyState === ReadyState.Cancelled) return;
      this._responseData = data;
    }
  }]);

  return JSONPConnection;
}();
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var JSONPBackend = /*#__PURE__*/function (_ConnectionBackend) {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(JSONPBackend, _ConnectionBackend);

  var _super3 = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(JSONPBackend);

  /**
   * \@internal
   * @param {?} _browserJSONP
   * @param {?} _baseResponseOptions
   */
  function JSONPBackend(_browserJSONP, _baseResponseOptions) {
    var _this10;

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, JSONPBackend);

    _this10 = _super3.call(this);
    _this10._browserJSONP = _browserJSONP;
    _this10._baseResponseOptions = _baseResponseOptions;
    return _this10;
  }
  /**
   * @param {?} request
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(JSONPBackend, [{
    key: "createConnection",
    value: function createConnection(request) {
      return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    }
  }]);

  return JSONPBackend;
}(ConnectionBackend);

JSONPBackend.ɵfac = function JSONPBackend_Factory(t) {
  return new (t || JSONPBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](BrowserJsonp), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ResponseOptions));
};

JSONPBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: JSONPBackend,
  factory: JSONPBackend.ɵfac
});
/** @nocollapse */

JSONPBackend.ctorParameters = function () {
  return [{
    type: BrowserJsonp
  }, {
    type: ResponseOptions
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](JSONPBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: BrowserJsonp
    }, {
      type: ResponseOptions
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */

var XHRConnection = /*#__PURE__*/function () {
  /**
   * @param {?} req
   * @param {?} browserXHR
   * @param {?=} baseResponseOptions
   */
  function XHRConnection(req, browserXHR, baseResponseOptions) {
    var _this11 = this;

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, XHRConnection);

    this.request = req;
    this.response = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (responseObserver) {
      /** @type {?} */
      var _xhr = browserXHR.build();

      _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);

      if (req.withCredentials != null) {
        _xhr.withCredentials = req.withCredentials;
      } // load event handler

      /** @type {?} */


      var onLoad = function onLoad() {
        // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)

        /** @type {?} */
        var status = _xhr.status === 1223 ? 204 : _xhr.status;
        /** @type {?} */

        var body = null; // HTTP 204 means no content

        if (status !== 204) {
          // responseText is the old-school way of retrieving response (supported by IE8 & 9)
          // response/responseType properties were introduced in ResourceLoader Level2 spec
          // (supported by IE10)
          body = typeof _xhr.response === 'undefined' ? _xhr.responseText : _xhr.response; // Implicitly strip a potential XSSI prefix.

          if (typeof body === 'string') {
            body = body.replace(XSSI_PREFIX, '');
          }
        } // fix status code when it is 0 (0 status is undocumented).
        // Occurs when accessing file resources or on Android 4.1 stock browser
        // while retrieving files from application cache.


        if (status === 0) {
          status = body ? 200 : 0;
        }
        /** @type {?} */


        var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders()); // IE 9 does not provide the way to get URL of response

        /** @type {?} */

        var url = getResponseURL(_xhr) || req.url;
        /** @type {?} */

        var statusText = _xhr.statusText || 'OK';
        /** @type {?} */

        var responseOptions = new ResponseOptions({
          body: body,
          status: status,
          headers: headers,
          statusText: statusText,
          url: url
        });

        if (baseResponseOptions != null) {
          responseOptions = baseResponseOptions.merge(responseOptions);
        }
        /** @type {?} */


        var response = new Response(responseOptions);
        response.ok = isSuccess(status);

        if (response.ok) {
          responseObserver.next(response); // TODO(gdi2290): defer complete if array buffer until done

          responseObserver.complete();
          return;
        }

        responseObserver.error(response);
      }; // error event handler

      /** @type {?} */


      var onError = function onError(err) {
        /** @type {?} */
        var responseOptions = new ResponseOptions({
          body: err,
          type: ResponseType.Error,
          status: _xhr.status,
          statusText: _xhr.statusText
        });

        if (baseResponseOptions != null) {
          responseOptions = baseResponseOptions.merge(responseOptions);
        }

        responseObserver.error(new Response(responseOptions));
      };

      _this11.setDetectedContentType(req, _xhr);

      if (req.headers == null) {
        req.headers = new Headers();
      }

      if (!req.headers.has('Accept')) {
        req.headers.append('Accept', 'application/json, text/plain, */*');
      }

      req.headers.forEach(function (values, name) {
        return _xhr.setRequestHeader(
        /** @type {?} */
        name, values.join(','));
      }); // Select the correct buffer type to store the response

      if (req.responseType != null && _xhr.responseType != null) {
        switch (req.responseType) {
          case ResponseContentType.ArrayBuffer:
            _xhr.responseType = 'arraybuffer';
            break;

          case ResponseContentType.Json:
            _xhr.responseType = 'json';
            break;

          case ResponseContentType.Text:
            _xhr.responseType = 'text';
            break;

          case ResponseContentType.Blob:
            _xhr.responseType = 'blob';
            break;

          default:
            throw new Error('The selected responseType is not supported');
        }
      }

      _xhr.addEventListener('load', onLoad);

      _xhr.addEventListener('error', onError);

      _xhr.send(_this11.request.getBody());

      return function () {
        _xhr.removeEventListener('load', onLoad);

        _xhr.removeEventListener('error', onError);

        _xhr.abort();
      };
    });
  }
  /**
   * @param {?} req
   * @param {?} _xhr
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(XHRConnection, [{
    key: "setDetectedContentType",
    value: function setDetectedContentType(req
    /** TODO Request */
    , _xhr
    /** XMLHttpRequest */
    ) {
      // Skip if a custom Content-Type header is provided
      if (req.headers != null && req.headers.get('Content-Type') != null) {
        return;
      } // Set the detected content type


      switch (req.contentType) {
        case ContentType.NONE:
          break;

        case ContentType.JSON:
          _xhr.setRequestHeader('content-type', 'application/json');

          break;

        case ContentType.FORM:
          _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');

          break;

        case ContentType.TEXT:
          _xhr.setRequestHeader('content-type', 'text/plain');

          break;

        case ContentType.BLOB:
          /** @type {?} */
          var blob = req.blob();

          if (blob.type) {
            _xhr.setRequestHeader('content-type', blob.type);
          }

          break;
      }
    }
  }]);

  return XHRConnection;
}();
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var CookieXSRFStrategy = /*#__PURE__*/function () {
  /**
   * @param {?=} _cookieName
   * @param {?=} _headerName
   */
  function CookieXSRFStrategy() {
    var _cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'XSRF-TOKEN';

    var _headerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'X-XSRF-TOKEN';

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CookieXSRFStrategy);

    this._cookieName = _cookieName;
    this._headerName = _headerName;
  }
  /**
   * @param {?} req
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CookieXSRFStrategy, [{
    key: "configureRequest",
    value: function configureRequest(req) {
      /** @type {?} */
      var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])().getCookie(this._cookieName);

      if (xsrfToken) {
        req.headers.set(this._headerName, xsrfToken);
      }
    }
  }]);

  return CookieXSRFStrategy;
}();
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var XHRBackend = /*#__PURE__*/function () {
  /**
   * @param {?} _browserXHR
   * @param {?} _baseResponseOptions
   * @param {?} _xsrfStrategy
   */
  function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, XHRBackend);

    this._browserXHR = _browserXHR;
    this._baseResponseOptions = _baseResponseOptions;
    this._xsrfStrategy = _xsrfStrategy;
  }
  /**
   * @param {?} request
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(XHRBackend, [{
    key: "createConnection",
    value: function createConnection(request) {
      this._xsrfStrategy.configureRequest(request);

      return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    }
  }]);

  return XHRBackend;
}();

XHRBackend.ɵfac = function XHRBackend_Factory(t) {
  return new (t || XHRBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](BrowserXhr), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ResponseOptions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](XSRFStrategy));
};

XHRBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: XHRBackend,
  factory: XHRBackend.ɵfac
});
/** @nocollapse */

XHRBackend.ctorParameters = function () {
  return [{
    type: BrowserXhr
  }, {
    type: ResponseOptions
  }, {
    type: XSRFStrategy
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](XHRBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: BrowserXhr
    }, {
      type: ResponseOptions
    }, {
      type: XSRFStrategy
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var RequestOptions = /*#__PURE__*/function () {
  // TODO(Dzmitry): remove search when this.search is removed

  /**
   * @param {?=} opts
   */
  function RequestOptions() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, RequestOptions);

    var method = opts.method,
        headers = opts.headers,
        body = opts.body,
        url = opts.url,
        search = opts.search,
        params = opts.params,
        withCredentials = opts.withCredentials,
        responseType = opts.responseType;
    this.method = method != null ? normalizeMethodName(method) : null;
    this.headers = headers != null ? headers : null;
    this.body = body != null ? body : null;
    this.url = url != null ? url : null;
    this.params = this._mergeSearchParams(params || search);
    this.withCredentials = withCredentials != null ? withCredentials : null;
    this.responseType = responseType != null ? responseType : null;
  }
  /**
   * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
   * existing values. This method will not change the values of the instance on which it is being
   * called.
   *
   * Note that `headers` and `search` will override existing values completely if present in
   * the `options` object. If these values should be merged, it should be done prior to calling
   * `merge` on the `RequestOptions` instance.
   *
   * ```typescript
   * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
   *
   * const options = new RequestOptions({
   *   method: RequestMethod.Post
   * });
   * const req = new Request(options.merge({
   *   url: 'https://google.com'
   * }));
   * console.log('req.method:', RequestMethod[req.method]); // Post
   * console.log('options.url:', options.url); // null
   * console.log('req.url:', req.url); // https://google.com
   * ```
   * @param {?=} options
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestOptions, [{
    key: "search",
    get:
    /**
     * @deprecated from 4.0.0. Use params instead.
     * @return {?}
     */
    function get() {
      return this.params;
    }
    /**
     * @deprecated from 4.0.0. Use params instead.
     * @param {?} params
     * @return {?}
     */
    ,
    set: function set(params) {
      this.params = params;
    }
  }, {
    key: "merge",
    value: function merge(options) {
      return new RequestOptions({
        method: options && options.method != null ? options.method : this.method,
        headers: options && options.headers != null ? options.headers : new Headers(this.headers),
        body: options && options.body != null ? options.body : this.body,
        url: options && options.url != null ? options.url : this.url,
        params: options && this._mergeSearchParams(options.params || options.search),
        withCredentials: options && options.withCredentials != null ? options.withCredentials : this.withCredentials,
        responseType: options && options.responseType != null ? options.responseType : this.responseType
      });
    }
    /**
     * @private
     * @param {?=} params
     * @return {?}
     */

  }, {
    key: "_mergeSearchParams",
    value: function _mergeSearchParams(params) {
      if (!params) return this.params;

      if (params instanceof URLSearchParams) {
        return params.clone();
      }

      if (typeof params === 'string') {
        return new URLSearchParams(params);
      }

      return this._parseParams(params);
    }
    /**
     * @private
     * @param {?=} objParams
     * @return {?}
     */

  }, {
    key: "_parseParams",
    value: function _parseParams() {
      var _this12 = this;

      var objParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /** @type {?} */
      var params = new URLSearchParams();
      Object.keys(objParams).forEach(function (key) {
        /** @type {?} */
        var value = objParams[key];

        if (Array.isArray(value)) {
          value.forEach(function (item) {
            return _this12._appendParam(key, item, params);
          });
        } else {
          _this12._appendParam(key, value, params);
        }
      });
      return params;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */

  }, {
    key: "_appendParam",
    value: function _appendParam(key, value, params) {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }

      params.append(key, value);
    }
  }]);

  return RequestOptions;
}();
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var BaseRequestOptions = /*#__PURE__*/function (_RequestOptions) {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(BaseRequestOptions, _RequestOptions);

  var _super4 = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseRequestOptions);

  function BaseRequestOptions() {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseRequestOptions);

    return _super4.call(this, {
      method: RequestMethod.Get,
      headers: new Headers()
    });
  }

  return BaseRequestOptions;
}(RequestOptions);

BaseRequestOptions.ɵfac = function BaseRequestOptions_Factory(t) {
  return new (t || BaseRequestOptions)();
};

BaseRequestOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: BaseRequestOptions,
  factory: BaseRequestOptions.ɵfac
});
/** @nocollapse */

BaseRequestOptions.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BaseRequestOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(jeffbcross): properly implement body accessors

/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var Request = /*#__PURE__*/function (_Body2) {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(Request, _Body2);

  var _super5 = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(Request);

  /**
   * @param {?} requestOptions
   */
  function Request(requestOptions) {
    var _this13;

    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Request);

    _this13 = _super5.call(this); // TODO: assert that url is present

    /** @type {?} */

    var url = requestOptions.url;
    _this13.url =
    /** @type {?} */
    requestOptions.url;
    /** @type {?} */

    var paramsArg = requestOptions.params || requestOptions.search;

    if (paramsArg) {
      /** @type {?} */
      var params;

      if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
        params = urlEncodeParams(paramsArg).toString();
      } else {
        params = paramsArg.toString();
      }

      if (params.length > 0) {
        /** @type {?} */
        var prefix = '?';

        if (_this13.url.indexOf('?') != -1) {
          prefix = _this13.url[_this13.url.length - 1] == '&' ? '' : '&';
        } // TODO: just delete search-query-looking string in url?


        _this13.url = url + prefix + params;
      }
    }

    _this13._body = requestOptions.body;
    _this13.method = normalizeMethodName(
    /** @type {?} */
    requestOptions.method); // TODO(jeffbcross): implement behavior
    // Defaults to 'omit', consistent with browser

    _this13.headers = new Headers(requestOptions.headers);
    _this13.contentType = _this13.detectContentType();
    _this13.withCredentials =
    /** @type {?} */
    requestOptions.withCredentials;
    _this13.responseType =
    /** @type {?} */
    requestOptions.responseType;
    return _this13;
  }
  /**
   * Returns the content type enum based on header options.
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Request, [{
    key: "detectContentType",
    value: function detectContentType() {
      switch (this.headers.get('content-type')) {
        case 'application/json':
          return ContentType.JSON;

        case 'application/x-www-form-urlencoded':
          return ContentType.FORM;

        case 'multipart/form-data':
          return ContentType.FORM_DATA;

        case 'text/plain':
        case 'text/html':
          return ContentType.TEXT;

        case 'application/octet-stream':
          return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;

        default:
          return this.detectContentTypeFromBody();
      }
    }
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */

  }, {
    key: "detectContentTypeFromBody",
    value: function detectContentTypeFromBody() {
      if (this._body == null) {
        return ContentType.NONE;
      } else if (this._body instanceof URLSearchParams) {
        return ContentType.FORM;
      } else if (this._body instanceof FormData) {
        return ContentType.FORM_DATA;
      } else if (this._body instanceof Blob$1) {
        return ContentType.BLOB;
      } else if (this._body instanceof ArrayBuffer$1) {
        return ContentType.ARRAY_BUFFER;
      } else if (this._body && typeof this._body === 'object') {
        return ContentType.JSON;
      } else {
        return ContentType.TEXT;
      }
    }
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */

  }, {
    key: "getBody",
    value: function getBody() {
      switch (this.contentType) {
        case ContentType.JSON:
          return this.text();

        case ContentType.FORM:
          return this.text();

        case ContentType.FORM_DATA:
          return this._body;

        case ContentType.TEXT:
          return this.text();

        case ContentType.BLOB:
          return this.blob();

        case ContentType.ARRAY_BUFFER:
          return this.arrayBuffer();

        default:
          return null;
      }
    }
  }]);

  return Request;
}(Body);
/**
 * @param {?} params
 * @return {?}
 */


function urlEncodeParams(params) {
  /** @type {?} */
  var searchParams = new URLSearchParams();
  Object.keys(params).forEach(function (key) {
    /** @type {?} */
    var value = params[key];

    if (value && Array.isArray(value)) {
      value.forEach(function (element) {
        return searchParams.append(key, element.toString());
      });
    } else {
      searchParams.append(key, value.toString());
    }
  });
  return searchParams;
}
/** @type {?} */


var noop = function noop() {};
/** @type {?} */


var w = typeof window == 'object' ? window : noop;
/** @type {?} */

var FormData =
/** @type {?} */
w['FormData'] || noop;
/** @type {?} */

var Blob$1 =
/** @type {?} */
w['Blob'] || noop;
/** @type {?} */

var ArrayBuffer$1 =
/** @type {?} */
w['ArrayBuffer'] || noop;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */

function httpRequest(backend, request) {
  return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */


function mergeOptions(defaultOpts, providedOpts, method, url) {
  /** @type {?} */
  var newOptions = defaultOpts;

  if (providedOpts) {
    // Hack so Dart can used named parameters
    return (
      /** @type {?} */
      newOptions.merge(new RequestOptions({
        method: providedOpts.method || method,
        url: providedOpts.url || url,
        search: providedOpts.search,
        params: providedOpts.params,
        headers: providedOpts.headers,
        body: providedOpts.body,
        withCredentials: providedOpts.withCredentials,
        responseType: providedOpts.responseType
      }))
    );
  }

  return (
    /** @type {?} */
    newOptions.merge(new RequestOptions({
      method: method,
      url: url
    }))
  );
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * \@usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var Http = /*#__PURE__*/function () {
  /**
   * @param {?} _backend
   * @param {?} _defaultOptions
   */
  function Http(_backend, _defaultOptions) {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Http);

    this._backend = _backend;
    this._defaultOptions = _defaultOptions;
  }
  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {\@link BaseRequestOptions} before performing the request.
   * @param {?} url
   * @param {?=} options
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Http, [{
    key: "request",
    value: function request(url, options) {
      /** @type {?} */
      var responseObservable;

      if (typeof url === 'string') {
        responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get,
        /** @type {?} */
        url)));
      } else if (url instanceof Request) {
        responseObservable = httpRequest(this._backend, url);
      } else {
        throw new Error('First argument must be a url string or Request instance.');
      }

      return responseObservable;
    }
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "get",
    value: function get(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    }
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "post",
    value: function post(url, body, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({
        body: body
      })), options, RequestMethod.Post, url)));
    }
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "put",
    value: function put(url, body, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({
        body: body
      })), options, RequestMethod.Put, url)));
    }
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "delete",
    value: function _delete(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    }
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "patch",
    value: function patch(url, body, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({
        body: body
      })), options, RequestMethod.Patch, url)));
    }
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "head",
    value: function head(url, options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    }
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "options",
    value: function options(url, _options) {
      return this.request(new Request(mergeOptions(this._defaultOptions, _options, RequestMethod.Options, url)));
    }
  }]);

  return Http;
}();

Http.ɵfac = function Http_Factory(t) {
  return new (t || Http)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ConnectionBackend), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](RequestOptions));
};

Http.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: Http,
  factory: Http.ɵfac
});
/** @nocollapse */

Http.ctorParameters = function () {
  return [{
    type: ConnectionBackend
  }, {
    type: RequestOptions
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Http, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: ConnectionBackend
    }, {
      type: RequestOptions
    }];
  }, null);
})();
/**
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var Jsonp = /*#__PURE__*/function (_Http) {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(Jsonp, _Http);

  var _super6 = Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(Jsonp);

  /**
   * @param {?} backend
   * @param {?} defaultOptions
   */
  function Jsonp(backend, defaultOptions) {
    Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Jsonp);

    return _super6.call(this, backend, defaultOptions);
  }
  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {\@link BaseRequestOptions} before performing the request.
   *
   * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
   * supported by all current browsers. Because JSONP creates a `<script>` element with
   * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
   * source could expose your application to XSS risks. Data exposed by JSONP may also be
   * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
   * future security issues (e.g. content sniffing).  For more detail, see the
   * [Security Guide](http://g.co/ng/security).
   * @param {?} url
   * @param {?=} options
   * @return {?}
   */


  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Jsonp, [{
    key: "request",
    value: function request(url, options) {
      /** @type {?} */
      var responseObservable;

      if (typeof url === 'string') {
        url = new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get,
        /** @type {?} */
        url));
      }

      if (url instanceof Request) {
        if (url.method !== RequestMethod.Get) {
          throw new Error('JSONP requests must use GET request method.');
        }

        responseObservable = httpRequest(this._backend, url);
      } else {
        throw new Error('First argument must be a url string or Request instance.');
      }

      return responseObservable;
    }
  }]);

  return Jsonp;
}(Http);

Jsonp.ɵfac = function Jsonp_Factory(t) {
  return new (t || Jsonp)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ConnectionBackend), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](RequestOptions));
};

Jsonp.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: Jsonp,
  factory: Jsonp.ɵfac
});
/** @nocollapse */

Jsonp.ctorParameters = function () {
  return [{
    type: ConnectionBackend
  }, {
    type: RequestOptions
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](Jsonp, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: ConnectionBackend
    }, {
      type: RequestOptions
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function _createDefaultCookieXSRFStrategy() {
  return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */


function httpFactory(xhrBackend, requestOptions) {
  return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */


function jsonpFactory(jsonpBackend, requestOptions) {
  return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 */


var HttpModule = function HttpModule() {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HttpModule);
};

HttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: HttpModule
});
HttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function HttpModule_Factory(t) {
    return new (t || HttpModule)();
  },
  providers: [// TODO(pascal): use factory type annotations once supported in DI
  // issue: https://github.com/angular/angular/issues/3183
  {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }, BrowserXhr, {
    provide: RequestOptions,
    useClass: BaseRequestOptions
  }, {
    provide: ResponseOptions,
    useClass: BaseResponseOptions
  }, XHRBackend, {
    provide: XSRFStrategy,
    useFactory: _createDefaultCookieXSRFStrategy
  }]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      providers: [// TODO(pascal): use factory type annotations once supported in DI
      // issue: https://github.com/angular/angular/issues/3183
      {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
      }, BrowserXhr, {
        provide: RequestOptions,
        useClass: BaseRequestOptions
      }, {
        provide: ResponseOptions,
        useClass: BaseResponseOptions
      }, XHRBackend, {
        provide: XSRFStrategy,
        useFactory: _createDefaultCookieXSRFStrategy
      }]
    }]
  }], null, null);
})();
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/api/common/http/HttpClient#jsonp
 * \@publicApi
 */


var JsonpModule = function JsonpModule() {
  Object(C_Users_arpit_Videos_Newfolder_wearit_backend_seller_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, JsonpModule);
};

JsonpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: JsonpModule
});
JsonpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function JsonpModule_Factory(t) {
    return new (t || JsonpModule)();
  },
  providers: [// TODO(pascal): use factory type annotations once supported in DI
  // issue: https://github.com/angular/angular/issues/3183
  {
    provide: Jsonp,
    useFactory: jsonpFactory,
    deps: [JSONPBackend, RequestOptions]
  }, BrowserJsonp, {
    provide: RequestOptions,
    useClass: BaseRequestOptions
  }, {
    provide: ResponseOptions,
    useClass: BaseResponseOptions
  }, JSONPBackend]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](JsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      providers: [// TODO(pascal): use factory type annotations once supported in DI
      // issue: https://github.com/angular/angular/issues/3183
      {
        provide: Jsonp,
        useFactory: jsonpFactory,
        deps: [JSONPBackend, RequestOptions]
      }, BrowserJsonp, {
        provide: RequestOptions,
        useClass: BaseRequestOptions
      }, {
        provide: ResponseOptions,
        useClass: BaseResponseOptions
      }, JSONPBackend]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @deprecated see https://angular.io/guide/http
 * \@publicApi
 * @type {?}
 */


var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["Version"]('7.2.16');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "w6oH":
/*!*************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.ts ***!
  \*************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _raw_loader_forgot_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./forgot.html */ "Kc/E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
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





var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(auth, router, route, toasty) {
        this.router = router;
        this.route = route;
        this.toasty = toasty;
        this.email = '';
        this.submitted = false;
        this.logoUrl = route.snapshot.data['appConfig'] ? route.snapshot.data['appConfig'].siteLogo : '/assets/images/logo.jpg';
        this.Auth = auth;
    }
    ForgotComponent.prototype.forgot = function (frm) {
        var _this = this;
        this.submitted = true;
        this.Auth.forgot(this.email).then(function (resp) {
            _this.toasty.success('New password has been sent, please check your email inbox.');
            _this.email = '';
            _this.submitted = false;
            frm.reset();
        })
            .catch(function (err) { return _this.toasty.error(err.data.data.message); });
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] }
    ]; };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: _raw_loader_forgot_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-box card\">\r\n  <div class=\"text-center mar-20\" style=\"background: #ec3f3f;margin: 0px;padding: 25px;\">\r\n    <img [src]=\"logoUrl\" width=\"80px\" style=\"padding: 15px;\">\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form class=\"form-horizontal form-material\" >\r\n      <h3 class=\"box-title m-b-20\">Sign In</h3>\r\n      <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n              <input class=\"form-control\" placeholder=\"Email\" required type=\"email\" autocomplete=\"off\" name=\"email\"\r\n              pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,3}$\" [(ngModel)]=\"credentials.email\" #email=\"ngModel\" />\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n              <p [hidden]=\"!email.errors.required\" class=\"error\">\r\n                Email is required\r\n              </p>\r\n              <p [hidden]=\"!email.errors.pattern\" class=\"error\">\r\n                Email is invalid email address.\r\n              </p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <div class=\"col-xs-12\">\r\n          <input class=\"form-control\" placeholder=\"Password\" required type=\"password\" autocomplete=\"off\" name=\"pw\" [(ngModel)]=\"credentials.password\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group text-center m-t-20\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\" (click)=\"login()\">Log In</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-12 font-14\">\r\n          <span class=\"text-dark pull-right\">\r\n            <a routerLink=\"/auth/forgot\"> Forgot password?</a>\r\n            Or\r\n            <a routerLink=\"/auth/register\"> Register?</a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map