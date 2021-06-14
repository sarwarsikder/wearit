(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "A5tP":
/*!*****************************************************!*\
  !*** ./src/app/message/services/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
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



var MessageService = /** @class */ (function () {
    function MessageService(restangular) {
        this.restangular = restangular;
    }
    MessageService.prototype.listByConversation = function (conversationId, params) {
        return this.restangular.one('messages/conversations', conversationId).get(params).toPromise();
    };
    MessageService.prototype.send = function (data) {
        return this.restangular.one('messages').customPOST(data).toPromise();
    };
    MessageService.prototype.latest = function (params) {
        return this.restangular.one('messages', 'latest').get(params).toPromise();
    };
    MessageService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], MessageService);
    return MessageService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map