(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "2+Jv":
/*!*************************************************************!*\
  !*** ./src/app/user/profile-card/profile-card.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _raw_loader_profile_card_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile-card.html */ "pxz7");
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


var ProfileCardComponent = /** @class */ (function () {
    // TODO - add option to query user from server by user id
    function ProfileCardComponent() {
    }
    ProfileCardComponent.prototype.ngOnInit = function () {
        // TODO - add event emitter listen the change
    };
    ProfileCardComponent.ctorParameters = function () { return []; };
    ProfileCardComponent.propDecorators = {
        user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ProfileCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-card',
            template: _raw_loader_profile_card_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileCardComponent);
    return ProfileCardComponent;
}());



/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routing */ "TrR4");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "2+Jv");
/* harmony import */ var _profile_complain_profile_complain_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-complain/profile-complain.component */ "avtZ");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "VGjC");
/* harmony import */ var _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile-update.component */ "uWLI");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/media.module */ "vbE1");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/utils.module */ "XPsC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                //our custom module
                _user_routing__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_9__["MediaModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_10__["UtilsModule"]
            ],
            declarations: [
                _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_8__["ProfileUpdateComponent"],
                _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardComponent"],
                _profile_complain_profile_complain_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComplainComponent"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
            exports: [
                _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardComponent"]
            ],
            entryComponents: [_profile_complain_profile_complain_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComplainComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "TrR4":
/*!**************************************!*\
  !*** ./src/app/user/user.routing.ts ***!
  \**************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile-update.component */ "uWLI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'profile/update', component: _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_2__["ProfileUpdateComponent"],
        data: {
            title: 'Profile update',
            urls: [{ title: 'Profile Update' }]
        }
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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



var UserService = /** @class */ (function () {
    function UserService(restangular) {
        this.restangular = restangular;
    }
    UserService.prototype.me = function () {
        return this.restangular.one('users', 'me').get().toPromise();
    };
    UserService.prototype.updateMe = function (data) {
        return this.restangular.all('users').customPUT(data).toPromise();
    };
    UserService.prototype.findOne = function (id) {
        return this.restangular.one('users', id).get().toPromise();
    };
    UserService.prototype.complain = function (params) {
        return this.restangular.one('complains').customPOST(params).toPromise();
    };
    UserService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "avtZ":
/*!*********************************************************************!*\
  !*** ./src/app/user/profile-complain/profile-complain.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileComplainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComplainComponent", function() { return ProfileComplainComponent; });
/* harmony import */ var _raw_loader_profile_complain_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile-complain.html */ "tYQD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "VGjC");
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





var ProfileComplainComponent = /** @class */ (function () {
    function ProfileComplainComponent(activeModal, userService, toasty) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.toasty = toasty;
        this.content = "";
    }
    ProfileComplainComponent.prototype.ngOnInit = function () {
    };
    ProfileComplainComponent.prototype.submit = function () {
        var _this = this;
        if (this.content === '') {
            return this.toasty.error('Please leave some text in the complain box');
        }
        this.userService.complain({ content: this.content }).then(function (res) {
            _this.toasty.success('Complain has been sent!');
        }).catch(function (err) {
            _this.toasty.error('Something went wrong, please check and try again!');
        });
        this.activeModal.close();
    };
    ProfileComplainComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"] }
    ]; };
    ProfileComplainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-complain',
            template: _raw_loader_profile_complain_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_4__["ToastyService"]])
    ], ProfileComplainComponent);
    return ProfileComplainComponent;
}());



/***/ }),

/***/ "pxz7":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile-card/profile-card.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"m-t-30 text-center\">\r\n      <img class=\"img-circle\" [src]=\"user.avatarUrl\" width=\"150\" *ngIf=\"user.avatarUrl\" />\r\n      <h4 class=\"card-title m-t-10\">{{user.name}}</h4>\r\n      <h6 class=\"card-subtitle\">seller</h6>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <hr>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <small class=\"text-muted\">Email address </small>\r\n    <h6>{{user.email}}</h6>\r\n    <small class=\"text-muted p-t-30 db\">Phone</small>\r\n    <h6>{{user.phoneNumber || 'N/A'}}</h6>\r\n    <small class=\"text-muted p-t-30 db\">Address</small>\r\n    <h6>{{user.address || 'N/A'}}</h6>\r\n    <div *ngIf=\"user.socialProfile\">\r\n      <small class=\"text-muted p-t-30 db\">Social Profile</small><br />\r\n      <button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-facebook\"></i></button>\r\n      <button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-twitter\"></i>\r\n      </button><button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-youtube\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <hr>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <small class=\"text-muted\">Created / joined at </small>\r\n    <h6>{{user.createdAt | date}}</h6>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "tYQD":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile-complain/profile-complain.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">\r\n      <label>Send Complain to Admin</label>\r\n    </h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h5>Complain (*):</h5>\r\n    <textarea rows=\"3\" cols=\"44\" [(ngModel)]=\"content\" placeholder=\"Leave some text here..\"></textarea>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">Send</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "uWLI":
/*!**********************************************************!*\
  !*** ./src/app/user/profile/profile-update.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./form.html */ "xNVZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _profile_complain_profile_complain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-complain/profile-complain.component */ "avtZ");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileUpdateComponent = /** @class */ (function () {
    function ProfileUpdateComponent(router, userService, toasty, route, modalService) {
        this.router = router;
        this.userService = userService;
        this.toasty = toasty;
        this.route = route;
        this.modalService = modalService;
        this.info = {};
        this.avatarUrl = '';
        this.isSubmitted = false;
        this.avatarOptions = {};
        this.user = {};
    }
    ProfileUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.avatarOptions = {
            url: window.appConfig.apiBaseUrl + '/users/avatar',
            fileFieldName: 'avatar',
            onFinish: function (resp) {
                _this.avatarUrl = resp.data.url;
                _this.user.avatarUrl = resp.data.url;
            }
        };
        this.userService.me().then(function (resp) {
            _this.user = resp.data;
            _this.info = lodash__WEBPACK_IMPORTED_MODULE_7__["pick"](resp.data, [
                'name', 'email', 'address', 'phoneNumber'
            ]);
            _this.avatarUrl = resp.data.avatarUrl;
        });
    };
    ProfileUpdateComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid) {
            return this.toasty.error('Something went wrong, please check and try again!');
        }
        this.userService.updateMe(this.info).then(function (resp) {
            _this.toasty.success('Updated successfuly!');
        }).catch(function (err) { return _this.toasty.error(err.data.data.message || err.data.data.email); });
    };
    ProfileUpdateComponent.prototype.complain = function () {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        this.modalService.open(_profile_complain_profile_complain_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComplainComponent"], ngbModalOptions);
    };
    ProfileUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    ProfileUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-update',
            template: _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());



/***/ }),

/***/ "xNVZ":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/form.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col col-md-3\">\r\n    <profile-card [user]=\"user\"></profile-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <form role=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\" ngNativeValidate method=\"post\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>First and last name (*)</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" [(ngModel)]=\"info.name\" required name=\"name\" #name=\"ngModel\" />\r\n                <div *ngIf=\"name.errors && (name.dirty || name.touched || isSubmitted)\">\r\n                  <p [hidden]=\"!name.errors.required\" class=\"required-text\">\r\n                    Please enter user first name and last name!\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>Email (*)</label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"user@example.com\" [(ngModel)]=\"info.email\" name=\"email\" required #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" disabled />\r\n                <div *ngIf=\"email.errors && (email.dirty || email.touched || isSubmitted)\">\r\n                  <p [hidden]=\"!email.errors.required\" class=\"required-text\">\r\n                    Email is required.\r\n                  </p>\r\n                  <p [hidden]=\"!email.errors.pattern\" class=\"required-text\">\r\n                    Please enter a valid email address.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>Phone number</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"info.phoneNumber\" name=\"phone\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>Address</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"info.address\" name=\"address\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>Password (*)</label>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"info.password\" name=\"password\" #password=\"ngModel\" minlength=\"6\" />\r\n                <div *ngIf=\"password.errors && (password.dirty || password.touched || isSubmitted)\">\r\n                  <p [hidden]=\"!password.errors.minlength\" class=\"required-text\">\r\n                    Password must be at least 6 characters!\r\n                  </p>\r\n                </div>\r\n                <p class=\"help help-block\">\r\n                  <small>Blank to keep current password</small>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-6\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Avatar</label>\r\n                    <div class=\"clearfix\"></div>\r\n                    <img [src]=\"avatarUrl\" class=\"avatar\" width=\"150\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>&nbsp;</label>\r\n                    <file-upload [options]=\"avatarOptions\"></file-upload>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-12\">\r\n              <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"complain()\">Complain</button>\r\n                &nbsp;\r\n                <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map