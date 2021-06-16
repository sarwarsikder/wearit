(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~product-product-module~starter-starter-module"],{

/***/ "0SR2":
/*!***************************************************************************!*\
  !*** ./src/app/product/components/variants/product-variants.component.ts ***!
  \***************************************************************************/
/*! exports provided: VariantUpdateModalComponent, ProductVariantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantUpdateModalComponent", function() { return VariantUpdateModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVariantsComponent", function() { return ProductVariantsComponent; });
/* harmony import */ var _raw_loader_update_modal_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update-modal.html */ "cxSA");
/* harmony import */ var _raw_loader_variants_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./variants.html */ "hMO3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_variant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/variant.service */ "fCRr");
/* harmony import */ var _services_option_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/option.service */ "KZOi");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
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








var VariantUpdateModalComponent = /** @class */ (function () {
    function VariantUpdateModalComponent(activeModal, variantService, toasty) {
        this.activeModal = activeModal;
        this.variantService = variantService;
        this.toasty = toasty;
    }
    VariantUpdateModalComponent.prototype.ngOnInit = function () {
        this.item = Object.assign({}, this.variant);
    };
    VariantUpdateModalComponent.prototype.update = function (frm) {
        var _this = this;
        // TODO  - validate
        if (frm.$invalid) {
            return this.toasty.error('Something went wrong, please try again.');
        }
        if (this.item.price < this.item.salePrice || !this.item.price || !this.item.salePrice) {
            return this.toasty.error('Invalid price!');
        }
        if (this.item.stockQuantity < 0) {
            return this.toasty.error('Invalid stock quantity!');
        }
        var data = lodash__WEBPACK_IMPORTED_MODULE_7__["pick"](this.item, ['price', 'salePrice', 'stockQuantity', 'digitalFileId', 'options']);
        this.variantService.update(this.product._id, this.variant._id, data)
            .then(function (resp) {
            // TODO - close me
            _this.toasty.success('Updated successfully.');
            _this.activeModal.close(data);
        });
    };
    VariantUpdateModalComponent.prototype.selectMedia = function (media) {
        this.item.digitalFileId = media._id;
    };
    VariantUpdateModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
        { type: _services_variant_service__WEBPACK_IMPORTED_MODULE_3__["ProductVariantService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"] }
    ]; };
    VariantUpdateModalComponent.propDecorators = {
        product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        variant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    VariantUpdateModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'variant-update-modal',
            template: _raw_loader_update_modal_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"], _services_variant_service__WEBPACK_IMPORTED_MODULE_3__["ProductVariantService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"]])
    ], VariantUpdateModalComponent);
    return VariantUpdateModalComponent;
}());

var ProductVariantsComponent = /** @class */ (function () {
    function ProductVariantsComponent(variantService, toasty, modalService, optionService) {
        this.variantService = variantService;
        this.toasty = toasty;
        this.modalService = modalService;
        this.optionService = optionService;
        this.product = {};
        this.page = 1;
        this.items = [];
        this.total = 0;
        this.newVariant = {
            options: [
                {
                    optionKey: '',
                    key: '',
                    value: '',
                    displayText: ''
                }
            ],
            price: 0,
            salePrice: 0,
            stockQuantity: 1000
        };
        this.optionKey = '';
        this.detailOption = {};
        this.options = [];
        this.option = {};
        this.menuOptions = [];
        this.newOption = {};
    }
    ProductVariantsComponent.prototype.ngOnInit = function () {
        this.query();
    };
    ProductVariantsComponent.prototype.query = function () {
        var _this = this;
        this.variantService.search(this.product._id, {
            page: this.page
        })
            .then(function (resp) {
            _this.items = resp.data.items;
            _this.total = resp.data.count;
        });
    };
    ProductVariantsComponent.prototype.addNewOption = function (item) {
        var _this = this;
        if (!this.newOption.key && !this.newOption.displayText && !this.newOption.value) {
            return this.toasty.error('Please enter option');
        }
        this.newOption.optionKey = item.options[0].optionKey;
        delete item.options[0].isNew;
        delete this.newOption.isNew;
        item.options.push(this.newOption);
        this.variantService.update(this.product._id, item._id, item)
            .then(function (resp) {
            _this.newOption = {};
            _this.toasty.success('Added new option successfully.');
        })
            .catch(function (err) { return _this.toasty.error(err.data.message || 'Something went wrong, please try again.'); });
    };
    ProductVariantsComponent.prototype.removeOption = function (item, i) {
        var _this = this;
        if (item.options.length === 1) {
            return this.toasty.error('Options length must be at least 1.');
        }
        if (window.confirm('Are you you to remove this option?')) {
            item.options.splice(i, 1);
            this.variantService.update(this.product._id, item._id, item).then(function (resp) {
                _this.toasty.success('Removed option successfully.');
            })
                .catch(function (err) { return _this.toasty.error(err.data.data.message || 'Something went wrong, please try again.'); });
        }
    };
    ProductVariantsComponent.prototype.openOption = function (opt) {
        opt.isNew = true;
    };
    ProductVariantsComponent.prototype.closeOption = function (opt) {
        opt.isNew = false;
    };
    ProductVariantsComponent.prototype.loadOptions = function () {
        var _this = this;
        this.optionService.search({ optionKey: this.optionKey }).then(function (resp) {
            _this.options = resp.data.items;
        })
            .catch(function (err) { return console.log(err); });
    };
    ProductVariantsComponent.prototype.selectOptionKey = function (item) {
        this.menuOptions = item.options;
        this.newVariant.options[0].optionKey = item.key;
    };
    ProductVariantsComponent.prototype.selectOption = function (item) {
        this.newVariant.options[0].key = item.key;
        this.newVariant.options[0].displayText = item.displayText;
    };
    ProductVariantsComponent.prototype.create = function () {
        var _this = this;
        if (!this.newVariant.price || this.newVariant.price < 0) {
            return this.toasty.error('Price value is invalid.');
        }
        if (!this.newVariant.salePrice || this.newVariant.salePrice < 0) {
            return this.toasty.error('Sale price value is invalid.');
        }
        if (!this.newVariant.stockQuantity || this.newVariant.stockQuantity < 0) {
            return this.toasty.error('Stock quantity value is invalid.');
        }
        if (!this.newVariant.options[0].key || !this.newVariant.options[0].displayText || !this.newVariant.options[0].value) {
            return this.toasty.error('Please fill out all fields.');
        }
        this.newVariant.options[0].optionKey = this.newVariant.options[0].key;
        this.variantService.create(this.product._id, this.newVariant)
            .then(function (resp) {
            // TODO - push media item?
            _this.items.unshift(resp.data);
            _this.newVariant.options[0] = {};
            _this.toasty.success('Added new variant successfully.');
        })
            .catch(function (err) { return _this.toasty.error(err.data.message); });
    };
    ProductVariantsComponent.prototype.remove = function (variantId, index) {
        var _this = this;
        if (window.confirm('Are you you to remove this variant?')) {
            this.variantService.remove(this.product._id, variantId).then(function (resp) {
                _this.items.splice(index, 1);
                _this.toasty.success('Removed item successfully.');
            })
                .catch(function (err) { return _this.toasty.error(err.data.data.message); });
        }
    };
    ProductVariantsComponent.prototype.update = function (item, index) {
        var _this = this;
        var modalRef = this.modalService.open(VariantUpdateModalComponent, {
            size: 'lg'
        });
        modalRef.componentInstance.variant = item;
        modalRef.componentInstance.product = this.product;
        modalRef.result.then(function (result) { return (_this.items[index] = result); }, function () { return (null); });
    };
    ProductVariantsComponent.prototype.selectMedia = function (media) {
        this.newVariant.digitalFileId = media._id;
    };
    ProductVariantsComponent.ctorParameters = function () { return [
        { type: _services_variant_service__WEBPACK_IMPORTED_MODULE_3__["ProductVariantService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _services_option_service__WEBPACK_IMPORTED_MODULE_4__["OptionService"] }
    ]; };
    ProductVariantsComponent.propDecorators = {
        product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ProductVariantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'product-variants',
            template: _raw_loader_variants_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        __metadata("design:paramtypes", [_services_variant_service__WEBPACK_IMPORTED_MODULE_3__["ProductVariantService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _services_option_service__WEBPACK_IMPORTED_MODULE_4__["OptionService"]])
    ], ProductVariantsComponent);
    return ProductVariantsComponent;
}());



/***/ }),

/***/ "KZOi":
/*!****************************************************!*\
  !*** ./src/app/product/services/option.service.ts ***!
  \****************************************************/
/*! exports provided: OptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionService", function() { return OptionService; });
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



var OptionService = /** @class */ (function () {
    function OptionService(restangular) {
        this.restangular = restangular;
    }
    OptionService.prototype.search = function (params) {
        return this.restangular.one('products/options').get(params).toPromise();
    };
    OptionService.prototype.findOne = function (id) {
        return this.restangular.one('products/options', id).get().toPromise();
    };
    OptionService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    OptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], OptionService);
    return OptionService;
}());



/***/ }),

/***/ "ME4n":
/*!********************************************!*\
  !*** ./src/app/product/product.routing.ts ***!
  \********************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_products_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/products/create.component */ "dAXP");
/* harmony import */ var _components_products_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/update.component */ "ntj8");
/* harmony import */ var _components_products_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products/listing.component */ "ivUZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'list',
        component: _components_products_listing_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
        data: {
            title: 'Product manager',
            urls: [{ title: 'Products', url: '/products/list' }]
        }
    },
    {
        path: 'create',
        component: _components_products_create_component__WEBPACK_IMPORTED_MODULE_2__["ProductCreateComponent"],
        data: {
            title: 'Product manager',
            urls: [{ title: 'Products', url: '/products/list' }, { title: 'Create', url: '/products/create' }]
        }
    },
    {
        path: 'update/:id',
        component: _components_products_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"],
        data: {
            title: 'Product manager',
            urls: [{ title: 'Products', url: '/products/list' }, { title: 'Update', url: '/products/update' }]
        }
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "MGH/":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products/listing.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-body table-responsive\">\r\n    <div class=\"row prod-action\">\r\n      <div class=\"col-md-12\">\r\n        <a class=\"btn btn-danger button-custom\" href=\"../../../../assets/Sample.csv\" download><i class=\"fa fa-file\"></i>\r\n          Sample File</a>\r\n          <a class=\"btn btn-danger button-custom\" (click)=\"exportCSV()\" style=\"color: #fff\"><i class=\"fa fa-cloud-download\"></i>\r\n            Export Data</a>\r\n            <a class=\"btn btn-danger button-custom\">\r\n              <span (click)=\"openFile()\" style=\"color: #fff\"><i class=\"fa fa-cloud-upload\"></i> Import Data</span>\r\n              <div class=\"import-button\" *ngIf=\"showImport\">\r\n                <file-upload [options]=\"importOptions\"></file-upload>\r\n              </div>\r\n            </a>\r\n      </div>\r\n    </div>\r\n    <table class=\"table table-custom\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"min-w-40\">\r\n            Image\r\n          </th>\r\n          <th class=\"min-w-180\">\r\n            <a (click)=\"sortBy('name', 'desc')\">Name</a>\r\n            <span *ngIf=\"sortOption.sortBy=='name'\">\r\n              <a (click)=\"sortBy('name', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('name', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('category.name', 'desc')\">Category</a>\r\n            <span *ngIf=\"sortOption.sortBy=='category.name'\">\r\n              <a (click)=\"sortBy('category.name', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('category.name', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('featured', 'desc')\">Feature</a>\r\n            <span *ngIf=\"sortOption.sortBy=='featured'\">\r\n              <a (click)=\"sortBy('featured', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('featured', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('hot', 'desc')\">Hot</a>\r\n            <span *ngIf=\"sortOption.sortBy=='featured'\">\r\n              <a (click)=\"sortBy('hot', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('hot', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('bestSell', 'desc')\">Best Sell</a>\r\n            <span *ngIf=\"sortOption.sortBy=='bestSell'\">\r\n              <a (click)=\"sortBy('bestSell', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('bestSell', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('type', 'desc')\">Type</a>\r\n            <span *ngIf=\"sortOption.sortBy=='type'\">\r\n              <a (click)=\"sortBy('type', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('type', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('isActive', 'desc')\">Active</a>\r\n            <span *ngIf=\"sortOption.sortBy=='isActive'\">\r\n              <a (click)=\"sortBy('isActive', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('isActive', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            <a (click)=\"sortBy('createdAt', 'desc')\">Created at</a>\r\n            <span *ngIf=\"sortOption.sortBy=='createdAt'\">\r\n              <a (click)=\"sortBy('createdAt', 'asc')\" *ngIf=\"sortOption.sortType=='desc'\"><i class=\"fa fa-caret-down\"></i></a>\r\n              <a (click)=\"sortBy('createdAt', 'desc')\" *ngIf=\"sortOption.sortType=='asc'\"><i class=\"fa fa-caret-up\"></i></a>\r\n            </span>\r\n          </th>\r\n          <th>\r\n            Actions\r\n          </th>\r\n        </tr>\r\n        <tr>\r\n          <th colspan=\"10\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"search...\" (keypress)=\"keyPress($event)\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary fa fa-search\" (click)=\"query()\" type=\"button\"></button>\r\n              </div>\r\n            </div>\r\n          </th>\r\n          \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"!total && !isLoading\">\r\n          <td colspan=\"10\">\r\n            <p class=\"text-center text-danger\">There is no items yet..</p>\r\n          </td>\r\n        </tr>\r\n        <tr *ngFor=\"let item of items, let i = index\">\r\n          <td class=\"min-w-40\">\r\n            <img *ngIf=\"item.mainImage\" [src]=\"item?.mainImage?.thumbUrl\" class=\"image-responsive\" style=\"width:40px\" />\r\n          </td>\r\n          <td>{{item.name}}</td>\r\n          <td><span class=\"label label-warning\" *ngIf=\"item.category && item.category.name\">{{item.category?.name}}</span></td>\r\n          <td>\r\n            <span class=\"label label-success\" *ngIf=\"item.featured\">Y</span>\r\n            <span class=\"label label-warning\" *ngIf=\"!item.featured\">N</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"label label-success\" *ngIf=\"item.hot\">Y</span>\r\n            <span class=\"label label-warning\" *ngIf=\"!item.hot\">N</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"label label-success\" *ngIf=\"item.bestSell\">Y</span>\r\n            <span class=\"label label-warning\" *ngIf=\"!item.bestSell\">N</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"label label-primary\" *ngIf=\"item.type === 'physical'\">Physical</span>\r\n            <span class=\"label label-danger\" *ngIf=\"item.type === 'digital'\">Digital</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"label label-success\" *ngIf=\"item.isActive\">Y</span>\r\n            <span class=\"label label-warning\" *ngIf=\"!item.isActive\">N</span>\r\n          </td>\r\n          <td>\r\n            <span>{{item.createdAt | date}}</span>\r\n          </td>\r\n          <td>\r\n            <a class=\"btn btn-sm btn-danger\" [routerLink]=\"['/products/update', item?._id ]\">\r\n              <i style=\"color: #fff;\" class=\"fa fa-pencil\"></i>\r\n            </a>&nbsp;\r\n            <a class=\"btn btn-sm btn-danger\" (click)=\"remove(item?._id, i)\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"display-inline\" [hidden]=\"total < take\">\r\n      <div class=\"pull-right\">\r\n        <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" [maxSize]=\"5\" [pageSize]=\"take\" (pageChange)=\"query()\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "XSCW":
/*!******************************************************!*\
  !*** ./src/app/product/services/category.service.ts ***!
  \******************************************************/
/*! exports provided: ProductCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return ProductCategoryService; });
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



var ProductCategoryService = /** @class */ (function () {
    function ProductCategoryService(restangular) {
        this.restangular = restangular;
    }
    ProductCategoryService.prototype.tree = function () {
        return this.restangular.one('products/categories', 'tree').get().toPromise();
    };
    ProductCategoryService.prototype.findOne = function (id) {
        return this.restangular.one('products/categories', id).get().toPromise();
    };
    ProductCategoryService.prototype.prettyPrint = function (tree, char, results) {
        var _this = this;
        if (char === void 0) { char = ''; }
        if (results === void 0) { results = []; }
        tree.forEach(function (item) {
            item.name = "" + char + item.name;
            results.push(item);
            if (item.children && item.children.length) {
                _this.prettyPrint(item.children, char + "__", results);
            }
        });
        return results;
    };
    ProductCategoryService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    ProductCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], ProductCategoryService);
    return ProductCategoryService;
}());



/***/ }),

/***/ "cxSA":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/variants/update-modal.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Update variant</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Close')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form (submit)=\"update(frm)\" #frm=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\" *ngIf=\"product.type === 'digital'\">\r\n        <div class=\"form-group\">\r\n          <label>Digital File <media-select (onSelect)=\"selectMedia($event)\"></media-select></label>\r\n          <img src=\"assets/images/media-exist.png\" width=\"45px\" *ngIf=\"item.digitalFileId\">\r\n          <img src=\"assets/images/nofile-available.png\" width=\"45px\" *ngIf=\"!item.digitalFileId\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Price</label>\r\n          <input type=\"number\" class=\"form-control\" name=\"price\" placeholder=\"100\" [(ngModel)]=\"item.price\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Sale Price</label>\r\n          <input type=\"number\" class=\"form-control\" name=\"salePrice\" placeholder=\"100\" [(ngModel)]=\"item.salePrice\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Stock quantity</label>\r\n          <input type=\"number\" class=\"form-control\" name=\"stock\" placeholder=\"100\" [(ngModel)]=\"item.stockQuantity\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <label>&nbsp;</label>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "dAXP":
/*!*****************************************************************!*\
  !*** ./src/app/product/components/products/create.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./form.html */ "x/hu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "XSCW");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "fk0V");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/brand.service */ "e3l+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(router, categoryService, brandService, productService, toasty, location) {
        var _this = this;
        this.router = router;
        this.categoryService = categoryService;
        this.brandService = brandService;
        this.productService = productService;
        this.toasty = toasty;
        this.location = location;
        this.product = {
            name: '',
            description: '',
            specifications: [],
            mainImage: null,
            metaSeo: {
                keywords: '',
                description: ''
            },
            type: 'physical',
            categoryId: '',
            isActive: true,
            freeShip: false,
            featured: false,
            hot: false,
            bestSell: false,
            stockQuantity: 0,
            price: 0,
            salePrice: 0,
            vat: 0,
            restrictFreeShipAreas: [],
            restrictCODAreas: [],
            sizeChart: null
        };
        this.isSubmitted = false;
        this.tree = [];
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.zipCode = '';
        this.newSpecification = {
            key: '',
            value: ''
        };
        this.imageUrl = '';
        this.images = [];
        this.mainImage = '';
        this.tab = 'info';
        this.freeShipAreas = [];
        this.imagesOptions = {
            multiple: true
        };
        this.searching = false;
        this.searchFailed = false;
        this.fileType = '';
        this.fileOptions = {};
        this.sizeChartUrl = '';
        // formatter_brand = (x: {
        //   name: string
        // }) => {
        //
        // }
        this.formatter_brand = function (x) { return x.name; };
        this.search_brand = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (term) {
                return _this.brandService.search({ name: term }).then(function (res) {
                    if (res) {
                        _this.searchFailed = false;
                        _this.searching = false;
                        return res.data.items;
                    }
                    _this.searchFailed = true;
                    _this.searching = false;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([]);
                });
            }));
        };
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileOptions = {
            isDigital: true,
            url: window.appConfig.apiBaseUrl + '/media/files',
            onFinish: function (resp) {
                if (resp.data.mimeType.indexOf('zip') > -1) {
                    _this.fileType = 'zip';
                }
                else if (resp.data.mimeType.indexOf('rar') > -1) {
                    _this.fileType = 'rar';
                }
                else if (resp.data.mimeType.indexOf('pdf') > -1) {
                    _this.fileType = 'pdf';
                }
                else {
                    _this.fileType = 'file';
                }
                _this.product.digitalFileId = resp.data._id;
                _this.product.digitalFile = resp.data;
            }
        };
        this.location.countries().then(function (resp) {
            _this.countries = resp.data;
        });
        this.categoryService.tree()
            .then(function (resp) { return (_this.tree = _this.categoryService.prettyPrint(resp.data)); });
    };
    ProductCreateComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (frm.invalid) {
            return this.toasty.error('Form is invalid, please try again.');
        }
        if (this.product.salePrice > this.product.price || this.product.salePrice <= 0 || this.product.price <= 0) {
            return this.toasty.error('Price or sale price is invalid.');
        }
        if (this.product.dailyDeal && this.dealDate) {
            this.product.dealTo = new Date(this.dealDate.year, this.dealDate.month, this.dealDate.day).toUTCString();
        }
        if (this.product.brand) {
            this.product.brandId = this.product.brand._id;
        }
        if (this.product.type === 'digital' && !this.product.digitalFileId) {
            return this.toasty.error('Please select Digital file path!');
        }
        this.freeShipAreas.forEach(function (item) {
            var data = lodash__WEBPACK_IMPORTED_MODULE_7__["pick"](item, ['areaType', 'value', 'name']);
            _this.product.restrictFreeShipAreas.push(data);
        });
        this.product.images = this.images.map(function (i) { return i._id; });
        this.product.mainImage = this.mainImage || null;
        this.productService.create(this.product)
            .then(function () {
            _this.toasty.success('Product has been created');
            _this.router.navigate(['/products/list']);
        }, function (err) { return _this.toasty.error(err.data.message || 'Something went wrong!'); });
    };
    ProductCreateComponent.prototype.changeAlias = function () {
        this.product.alias = this.product.name.split(' ').join('-');
        ;
    };
    ProductCreateComponent.prototype.addSpecification = function () {
        if (!this.newSpecification.value.trim()) {
            return this.toasty.error('Please enter specification value');
        }
        this.product.specifications.push(this.newSpecification);
        this.newSpecification = { key: '', value: '' };
    };
    ProductCreateComponent.prototype.selectImage = function (media) {
        // this.product.mainImage = media._id;
        // this.imageUrl = media.fileUrl;
        if (media.type !== 'photo') {
            return this.toasty.error('Please select image!');
        }
        this.images.push(media);
    };
    // selectDigital(media: any) {
    //   this.product.digitalFileId = media._id;
    //   this.product.digitalFile = media;
    //   if (media.mimeType.indexOf('image') === 0) {
    //     this.fileType = 'image';
    //   } else if (media.mimeType.indexOf('audio') === 0) {
    //     this.fileType = 'audio';
    //   } else if (media.mimeType.indexOf('video') === 0) {
    //     this.fileType = 'video';
    //   } else {
    //     this.fileType = 'file';
    //   }
    // }
    ProductCreateComponent.prototype.setMain = function (media) {
        this.mainImage = media._id;
    };
    ProductCreateComponent.prototype.removeImage = function (media, index) {
        if (media._id === this.mainImage) {
            this.mainImage = null;
        }
        this.images.splice(index, 1);
    };
    ProductCreateComponent.prototype.changeTab = function (tab) {
        this.tab = tab;
    };
    ProductCreateComponent.prototype.loadStates = function (COD) {
        var _this = this;
        this.location.states({ country: COD }).then(function (res) {
            _this.states = res.data;
        });
    };
    ProductCreateComponent.prototype.loadCities = function (id) {
        var _this = this;
        this.location.cities({ state: id }).then(function (res) {
            _this.cities = res.data;
        });
    };
    ProductCreateComponent.prototype.selectSizeImage = function (media) {
        this.product.sizeChart = media._id;
        this.sizeChartUrl = media.fileUrl;
    };
    ProductCreateComponent.prototype.addFreeShipAreas = function () {
        if (this.zipCode) {
            var data = {
                areaType: 'zipcode',
                value: this.zipCode
            };
            this.freeShipAreas.push(data);
            this.zipCode = '';
        }
        else if (!this.zipCode && this.freeCountry && !this.freeState) {
            var data = {
                areaType: 'country',
                value: this.freeCountry.isoCode,
                name: this.freeCountry.name
            };
            this.freeShipAreas.push(data);
            this.freeCountry = {};
        }
        else if (!this.zipCode && this.freeCountry && this.freeState && !this.freeCity) {
            var data = {
                areaType: 'state',
                value: this.freeState._id,
                name: this.freeState.name
            };
            this.freeShipAreas.push(data);
            this.freeState = {};
        }
        else if (!this.zipCode && this.freeCountry && this.freeState && this.freeCity) {
            var data = {
                areaType: 'city',
                value: this.freeCity._id,
                name: this.freeCity.name
            };
            this.freeShipAreas.push(data);
            this.freeCity = {};
        }
    };
    ProductCreateComponent.prototype.removeArea = function (item, index) {
        this.freeShipAreas.splice(index, 1);
    };
    ProductCreateComponent.prototype.removeSpec = function (i) {
        this.product.specifications.splice(i, 1);
    };
    ProductCreateComponent.prototype.updateDealTime = function () {
        this.product.dealTo = new Date(this.dealDate.year, this.dealDate.month - 1, this.dealDate.day);
    };
    ProductCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"] },
        { type: _services_brand_service__WEBPACK_IMPORTED_MODULE_10__["BrandService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }
    ]; };
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-create',
            template: _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"], _services_brand_service__WEBPACK_IMPORTED_MODULE_10__["BrandService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"], _shared_services__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "e3l+":
/*!***************************************************!*\
  !*** ./src/app/product/services/brand.service.ts ***!
  \***************************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
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



var BrandService = /** @class */ (function () {
    function BrandService(restangular) {
        this.restangular = restangular;
    }
    BrandService.prototype.search = function (params) {
        return this.restangular.one('brands').get(params).toPromise();
    };
    BrandService.prototype.findOne = function (id) {
        return this.restangular.one('brands', id).get().toPromise();
    };
    BrandService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    BrandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "fCRr":
/*!*****************************************************!*\
  !*** ./src/app/product/services/variant.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductVariantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVariantService", function() { return ProductVariantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "sXYb");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "EUDy");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductVariantService = /** @class */ (function () {
    function ProductVariantService(restangular) {
        this.restangular = restangular;
        this.allowFields = [
            'options', 'price', 'salePrice', 'stockQuantity', 'digitalFileId'
        ];
    }
    ProductVariantService.prototype.create = function (productId, data) {
        return this.restangular.one('products', productId).one('variants').customPOST(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"](data, this.allowFields)).toPromise();
    };
    ProductVariantService.prototype.search = function (productId, params) {
        return this.restangular.one('products', productId).one('variants').get(params).toPromise();
    };
    ProductVariantService.prototype.update = function (productId, variantId, data) {
        return this.restangular.one('products', productId).one('variants', variantId).customPUT(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"](data, this.allowFields)).toPromise();
    };
    ProductVariantService.prototype.remove = function (productId, variantId) {
        return this.restangular.one('products', productId).one('variants', variantId).customDELETE().toPromise();
    };
    ProductVariantService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    ProductVariantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], ProductVariantService);
    return ProductVariantService;
}());



/***/ }),

/***/ "fk0V":
/*!*****************************************************!*\
  !*** ./src/app/product/services/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "sXYb");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "EUDy");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(restangular) {
        this.restangular = restangular;
        this.allowFields = [
            'name', 'alias', 'description', 'shortDescription', 'categoryId', 'brandId', 'specifications',
            'chemicalIdentifiers', 'safetyHandling', 'isActive', 'metaSeo', 'ordering', 'freeShip',
            'images', 'mainImage', 'type', 'price', 'salePrice', 'stockQuantity', 'sku', 'upc', 'mpn', 'ean', 'sizeChart', 'digitalFileId',
            'jan', 'isbn', 'taxClass', 'taxPercentage', 'restrictCODAreas', 'restrictFreeShipAreas', 'dailyDeal', 'dealTo'
        ];
    }
    ProductService.prototype.create = function (data) {
        return this.restangular.all('products').post(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"](data, this.allowFields)).toPromise();
    };
    ProductService.prototype.search = function (params) {
        return this.restangular.one('products', 'search').get(params).toPromise();
    };
    ProductService.prototype.findOne = function (id) {
        return this.restangular.one('products', id).get().toPromise();
    };
    ProductService.prototype.update = function (id, data) {
        return this.restangular.one('products', id).customPUT(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"](data, this.allowFields)).toPromise();
    };
    ProductService.prototype.remove = function (id) {
        return this.restangular.one('products', id).customDELETE().toPromise();
    };
    ProductService.prototype.export = function (params) {
        return this.restangular.one('products/export/csv').get(params).toPromise();
    };
    ProductService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "hMO3":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/variants/variants.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th colspan=\"3\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-md-2\">Key</div>\r\n            <div class=\"col col-md-4\">Display Text\r\n              <br><small class=\"text-muted\">Name of variant</small>\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n              Value\r\n              <br>\r\n              <small class=\"text-muted\">Value of variant</small>\r\n            </div>\r\n            <div class=\"col col-md-2\"></div>\r\n          </div>\r\n        </th>\r\n        <th>Price</th>\r\n        <th>Sale Price</th>\r\n        <th>Stock Quantity</th>\r\n        <th>Updated at</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of items; let i = index\">\r\n        <td colspan=\"3\">\r\n          <div class=\"row option-row\" *ngFor=\"let opt of item.options; let index = index\">\r\n            <div class=\"col col-md-2\">{{opt?.key}}</div>\r\n            <div class=\"col col-md-4\">{{opt?.displayText}}</div>\r\n            <div class=\"col col-md-4\">{{opt?.value}}</div>\r\n            <div class=\"col col-md-2\">\r\n              <a (click)=\"removeOption(item, index)\" *ngIf=\"item.options.length > 1\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </a> &nbsp;\r\n              <a (click)=\"openOption(opt)\" *ngIf=\"!opt.isNew && index === 0\">\r\n                <i class=\"fa fa-plus\"></i>\r\n              </a>\r\n              <a (click)=\"closeOption(opt)\" *ngIf=\"opt.isNew && index === 0\">\r\n                <i class=\"fa fa-close\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"opt.isNew && index === 0\">\r\n              <div class=\"col col-md-2\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newOption.key\" />\r\n\r\n              </div>\r\n              <div class=\"col col-md-4\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newOption.displayText\" />\r\n              </div>\r\n              <div class=\"col col-md-4\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newOption.value\" />\r\n              </div>\r\n              <div class=\"col col-md-2\">\r\n                <button (click)=\"addNewOption(item)\" type=\"button\" class=\"btn btn-primary\">Add</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n        <td>{{item.price | currency}}</td>\r\n        <td>{{item.salePrice | currency}}</td>\r\n        <td>{{item.stockQuantity | number}}</td>\r\n        <td>{{item.updatedAt | date}}</td>\r\n        <td>\r\n          <a (click)=\"update(item, i)\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </a>&nbsp;\r\n          <a (click)=\"remove(item._id, i)\">\r\n            <i class=\"fa fa-trash\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"!items?.length\">\r\n        <td colspan=\"10\">\r\n          <p>There is no variant, please create new.</p>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\" *ngIf=\"total > 10\">\r\n          <ngb-pagination [collectionSize]=\"total\" [(page)]=\"page\" (pageChange)=\"query()\"></ngb-pagination>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"3\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-md-2\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"key\" placeholder=\"S,M,L...\" [(ngModel)]=\"newVariant.options[0].key\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"displayText\" placeholder=\"Size, color, etc.\" [(ngModel)]=\"newVariant.options[0].displayText\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-4\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"value\" placeholder=\"40, XL, blue, etc.\" [(ngModel)]=\"newVariant.options[0].value\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-2\"></div>\r\n          </div>\r\n        </td>\r\n        <td *ngIf=\"product.type === 'digital'\">\r\n          <div class=\"form-group\">\r\n            <label>\r\n              <media-select (onSelect)=\"selectMedia($event)\"></media-select>\r\n            </label>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"number\" class=\"form-control\" name=\"price\" placeholder=\"Price\" [(ngModel)]=\"newVariant.price\" />\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"number\" class=\"form-control\" name=\"salePrice\" placeholder=\"Sale Price\" [(ngModel)]=\"newVariant.salePrice\" />\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"number\" class=\"form-control\" name=\"stock\" placeholder=\"Quantity\" [(ngModel)]=\"newVariant.stockQuantity\" />\r\n          </div>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"create()\">Add new</button>\r\n        </td>\r\n      </tr>\r\n\r\n    </tfoot>\r\n  </table>\r\n  <div class=\"badge badge-info\">Use these system options or custom it by yourself.</div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-3\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"optionKey\" placeholder=\"Search options...\" [(ngModel)]=\"optionKey\"\r\n          (change)=\"loadOptions()\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-3\">\r\n      <div class=\"form-group\">\r\n        <select [(ngModel)]=\"option\" class=\"form-control\" name=\"key\" (change)=\"selectOptionKey(option)\">\r\n          <option ngValue=\"\">--Option Key--</option>\r\n          <option *ngFor=\"let item of options\" [ngValue]=\"item\">{{item.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-3\">\r\n      <div class=\"form-group\">\r\n        <select [(ngModel)]=\"detailOption\" class=\"form-control\" name=\"detailOption\" (change)=\"selectOption(detailOption)\">\r\n          <option ngValue=\"\">--Option--</option>\r\n          <option *ngFor=\"let item of menuOptions\" [ngValue]=\"item\">{{item.key}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ivUZ":
/*!******************************************************************!*\
  !*** ./src/app/product/components/products/listing.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _raw_loader_listing_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./listing.html */ "MGH/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "fk0V");
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







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(authService, router, productService, toasty, utilService) {
        this.authService = authService;
        this.router = router;
        this.productService = productService;
        this.toasty = toasty;
        this.utilService = utilService;
        this.isLoading = false;
        this.items = [];
        this.page = 1;
        this.take = 10;
        this.total = 0;
        this.searchText = '';
        this.sortOption = {
            sortBy: 'createdAt',
            sortType: 'desc'
        };
        this.accessToken = '';
        this.importOptions = {};
        this.showImport = false;
        this.accessToken = this.authService.getAccessToken();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.importOptions = {
            url: window.appConfig.apiBaseUrl + '/products/import/csv',
            fileFieldName: 'file',
            onFinish: function (resp) {
                if (resp.message === 'OK') {
                    _this.toasty.success('Your product list is being processed. Please come back in a while!');
                    setTimeout(function () { window.location.reload(); }, 2000);
                }
                else {
                    _this.toasty.error(resp.message);
                }
            }
        };
        this.query();
    };
    ProductsComponent.prototype.query = function () {
        var _this = this;
        this.utilService.setLoading(true);
        this.isLoading = true;
        this.productService.search({
            page: this.page,
            take: this.take,
            q: this.searchText,
            sort: "" + this.sortOption.sortBy,
            sortType: "" + this.sortOption.sortType
        })
            .then(function (resp) {
            _this.items = resp.data.items;
            _this.total = resp.data.count;
            _this.searchText = '';
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        })
            .catch(function () {
            _this.toasty.error('Something went wrong, please try again!');
            _this.utilService.setLoading(false);
            _this.isLoading = false;
        });
    };
    ProductsComponent.prototype.remove = function (itemId, index) {
        var _this = this;
        if (window.confirm('Are you sure want to delete this item?')) {
            this.productService.remove(itemId)
                .then(function () {
                _this.toasty.success('Item has been deleted!');
                _this.items.splice(index, 1);
            })
                .catch(function (err) { return _this.toasty.error(err.data.message || 'Something went wrong, please try again!'); });
        }
    };
    ProductsComponent.prototype.sortBy = function (field, type) {
        this.sortOption.sortBy = field;
        this.sortOption.sortType = type;
        this.query();
    };
    ProductsComponent.prototype.keyPress = function (event) {
        if (event.charCode === 13) {
            this.query();
        }
    };
    ProductsComponent.prototype.exportCSV = function () {
        var params = { access_token: this.accessToken };
        this.productService.export(params).then()
            .catch(function (err) {
            var link = document.createElement('a');
            link.target = '_blank';
            link.download = 'file';
            link.href = err.url;
            link.click();
        });
    };
    ProductsComponent.prototype.openFile = function () {
        this.showImport = !this.showImport;
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'products',
            template: _raw_loader_listing_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "ntj8":
/*!*****************************************************************!*\
  !*** ./src/app/product/components/products/update.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function() { return ProductUpdateComponent; });
/* harmony import */ var _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./form.html */ "x/hu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "XSCW");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "fk0V");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "0OCT");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/brand.service */ "e3l+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductUpdateComponent = /** @class */ (function () {
    function ProductUpdateComponent(router, route, categoryService, brandService, productService, toasty, location) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.brandService = brandService;
        this.productService = productService;
        this.toasty = toasty;
        this.location = location;
        this.isSubmitted = false;
        this.tree = [];
        this.brands = [];
        this.newSpecification = {
            key: '',
            value: ''
        };
        this.imageUrl = '';
        this.images = [];
        this.mainImage = '';
        this.tab = 'info';
        this.freeShipAreas = [];
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.zipCode = '';
        this.imagesOptions = {
            multiple: true
        };
        this.fileType = '';
        this.fileOptions = {};
        this.sizeChart = '';
        this.searching = false;
        this.searchFailed = false;
        this.formatter_brand = function (x) { return x.name; };
        this.search_brand = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (term) {
                return _this.brandService.search({ name: term }).then(function (res) {
                    if (res) {
                        _this.searchFailed = false;
                        _this.searching = false;
                        return res.data.items;
                    }
                    _this.searchFailed = true;
                    _this.searching = false;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([]);
                });
            }));
        };
        if (route.snapshot.queryParams.tab) {
            this.tab = route.snapshot.queryParams.tab;
        }
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileOptions = {
            isDigital: true,
            url: window.appConfig.apiBaseUrl + '/media/files',
            onFinish: function (resp) {
                if (resp.data.mimeType.indexOf('zip') > -1) {
                    _this.fileType = 'zip';
                }
                else if (resp.data.mimeType.indexOf('rar') > -1) {
                    _this.fileType = 'rar';
                }
                else if (resp.data.mimeType.indexOf('pdf') > -1) {
                    _this.fileType = 'pdf';
                }
                else {
                    _this.fileType = 'file';
                }
                _this.product.digitalFileId = resp.data._id;
                _this.product.digitalFile = resp.data;
            }
        };
        var id = this.route.snapshot.paramMap.get('id');
        this.productService.findOne(id)
            .then(function (resp) {
            _this.product = resp.data;
            if (_this.product.dailyDeal && _this.product.dealTo) {
                var day = new Date(_this.product.dealTo).getDate();
                var month = new Date(_this.product.dealTo).getMonth() + 1;
                var year = new Date(_this.product.dealTo).getFullYear();
                _this.dealDate = {
                    year: year,
                    month: month,
                    day: day
                };
            }
            _this.freeShipAreas = resp.data.restrictFreeShipAreas;
            _this.mainImage = resp.data.mainImage ? resp.data.mainImage._id : null;
            if (resp.data.digitalFile) {
                _this.fileType = resp.data.digitalFile.type;
            }
            _this.images = _this.product.images;
            _this.sizeChart = _this.product.sizeChart ? _this.product.sizeChart.thumbUrl : null;
            _this.product.sizeChart = _this.product.sizeChart ? _this.product.sizeChart._id : null;
            console.log(_this.product.sizeChart.thumbUrl);
            if (_this.product.dealTo) {
                var date = new Date(_this.product.dealTo);
                _this.dealDate = {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDay()
                };
            }
        });
        this.categoryService.tree()
            .then(function (resp) { return (_this.tree = _this.categoryService.prettyPrint(resp.data)); });
        this.location.countries().then(function (resp) {
            _this.countries = resp.data;
        });
    };
    ProductUpdateComponent.prototype.changeAlias = function () {
        this.product.alias = this.product.name.split(' ').join('-');
    };
    ProductUpdateComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (frm.$invalid) {
            this.toasty.error('Invalid form, please try again.');
        }
        if (this.product.salePrice > this.product.price || this.product.salePrice < 0.1 || this.product.price < 0.1) {
            return this.toasty.error('Price or sale price is invalid.');
        }
        if (this.product.taxPercentage < 0) {
            return this.toasty.error('Tax value is invalid.');
        }
        if (this.product.dailyDeal && this.dealDate) {
            this.product.dealTo = new Date(this.dealDate.year, this.dealDate.month, this.dealDate.day).toUTCString();
        }
        if (this.product.type === 'digital' && !this.product.digitalFileId) {
            return this.toasty.error('Please select Digital file path!');
        }
        if (this.product.brand) {
            this.product.brandId = this.product.brand._id;
        }
        this.product.restrictFreeShipAreas = [];
        this.freeShipAreas.forEach(function (item) {
            var data = lodash__WEBPACK_IMPORTED_MODULE_7__["pick"](item, ['areaType', 'value', 'name']);
            _this.product.restrictFreeShipAreas.push(data);
        });
        this.product.images = this.images.map(function (i) { return i._id; });
        this.product.mainImage = this.mainImage || null;
        this.productService.update(this.product._id, this.product).then(function (resp) {
            _this.toasty.success('Updated successfully.');
            _this.router.navigate(['/products/list']);
        })
            .catch(function (err) { return _this.toasty.error(err.data.message || err.data.data.message || 'Something went wrong, please try again.'); });
    };
    ProductUpdateComponent.prototype.addSpecification = function () {
        if (!this.newSpecification.value.trim()) {
            return this.toasty.error('Please enter specification value');
        }
        this.product.specifications.push(this.newSpecification);
        this.newSpecification = { key: '', value: '' };
    };
    ProductUpdateComponent.prototype.selectImage = function (media) {
        if (media.type !== 'photo') {
            return this.toasty.error('Please select image!');
        }
        this.images.push(media);
    };
    ProductUpdateComponent.prototype.selectSizeImage = function (media) {
        this.product.sizeChart = media._id;
        this.sizeChart = media.fileUrl;
    };
    ProductUpdateComponent.prototype.setMain = function (media) {
        this.mainImage = media._id;
    };
    // selectDigital(media: any) {
    //   this.product.digitalFileId = media._id;
    //   this.product.digitalFile = media;
    //   if (media.mimeType.indexOf('image') === 0) {
    //     this.fileType = 'image';
    //   } else if (media.mimeType.indexOf('audio') === 0) {
    //     this.fileType = 'audio';
    //   } else if (media.mimeType.indexOf('video') === 0) {
    //     this.fileType = 'video';
    //   } else {
    //     this.fileType = 'file';
    //   }
    // }
    ProductUpdateComponent.prototype.removeImage = function (media, index) {
        if (media._id === this.mainImage) {
            this.mainImage = null;
        }
        this.images.splice(index, 1);
    };
    ProductUpdateComponent.prototype.changeTab = function (tab) {
        this.tab = tab;
    };
    ProductUpdateComponent.prototype.loadStates = function (COD) {
        var _this = this;
        this.location.states({ country: COD }).then(function (res) {
            _this.states = res.data;
        });
    };
    ProductUpdateComponent.prototype.loadCities = function (id) {
        var _this = this;
        this.location.cities({ state: id }).then(function (res) {
            _this.cities = res.data;
        });
    };
    ProductUpdateComponent.prototype.addFreeShipAreas = function () {
        if (this.zipCode) {
            var data = {
                areaType: 'zipcode',
                value: this.zipCode
            };
            this.freeShipAreas.push(data);
            this.zipCode = '';
        }
        else if (!this.zipCode && this.freeCountry && !this.freeState) {
            var data = {
                areaType: 'country',
                value: this.freeCountry.isoCode,
                name: this.freeCountry.name
            };
            this.freeShipAreas.push(data);
            this.freeCountry = {};
        }
        else if (!this.zipCode && this.freeCountry && this.freeState && !this.freeCity) {
            var data = {
                areaType: 'state',
                value: this.freeState._id,
                name: this.freeState.name
            };
            this.freeShipAreas.push(data);
            this.freeState = {};
        }
        else if (!this.zipCode && this.freeCountry && this.freeState && this.freeCity) {
            var data = {
                areaType: 'city',
                value: this.freeCity._id,
                name: this.freeCity.name
            };
            this.freeShipAreas.push(data);
            this.freeCity = {};
        }
    };
    ProductUpdateComponent.prototype.removeArea = function (item, index) {
        this.freeShipAreas.splice(index, 1);
    };
    ProductUpdateComponent.prototype.removeSpec = function (i) {
        this.product.specifications.splice(i, 1);
    };
    ProductUpdateComponent.prototype.updateDealTime = function () {
        this.product.dealTo = new Date(this.dealDate.year, this.dealDate.month - 1, this.dealDate.day);
    };
    ProductUpdateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"] },
        { type: _services_brand_service__WEBPACK_IMPORTED_MODULE_10__["BrandService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }
    ]; };
    ProductUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-update',
            template: _raw_loader_form_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"], _services_brand_service__WEBPACK_IMPORTED_MODULE_10__["BrandService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyService"], _shared_services__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());



/***/ }),

/***/ "qvFY":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sortablejs */ "PQoX");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-froala-wysiwyg */ "Yn6Y");
/* harmony import */ var _product_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.routing */ "ME4n");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "CaAu");
/* harmony import */ var _components_variants_product_variants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/variants/product-variants.component */ "0SR2");
/* harmony import */ var _components_products_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/create.component */ "dAXP");
/* harmony import */ var _components_products_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/update.component */ "ntj8");
/* harmony import */ var _components_products_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/products/listing.component */ "ivUZ");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/category.service */ "XSCW");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/brand.service */ "e3l+");
/* harmony import */ var _services_option_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/option.service */ "KZOi");
/* harmony import */ var _services_variant_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/variant.service */ "fCRr");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/product.service */ "fk0V");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/services */ "ZF+8");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../media/media.module */ "vbE1");
/* harmony import */ var _review_review_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../review/review.module */ "3wRx");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_sortablejs__WEBPACK_IMPORTED_MODULE_4__["SortablejsModule"],
                // our custom module
                _product_routing__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["FroalaViewModule"].forRoot(),
                _media_media_module__WEBPACK_IMPORTED_MODULE_18__["MediaModule"],
                _review_review_module__WEBPACK_IMPORTED_MODULE_19__["ReviewModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]
            ],
            declarations: [
                _components_variants_product_variants_component__WEBPACK_IMPORTED_MODULE_8__["VariantUpdateModalComponent"],
                _components_variants_product_variants_component__WEBPACK_IMPORTED_MODULE_8__["ProductVariantsComponent"],
                _components_products_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"],
                _components_products_update_component__WEBPACK_IMPORTED_MODULE_10__["ProductUpdateComponent"],
                _components_products_listing_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"]
            ],
            providers: [
                _services_category_service__WEBPACK_IMPORTED_MODULE_12__["ProductCategoryService"],
                _services_brand_service__WEBPACK_IMPORTED_MODULE_13__["BrandService"],
                _user_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _services_option_service__WEBPACK_IMPORTED_MODULE_14__["OptionService"],
                _services_variant_service__WEBPACK_IMPORTED_MODULE_15__["ProductVariantService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_16__["ProductService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_17__["LocationService"]
            ],
            entryComponents: [
                _components_variants_product_variants_component__WEBPACK_IMPORTED_MODULE_8__["VariantUpdateModalComponent"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "x/hu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/components/products/form.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form (submit)=\"submit(frm)\" #frm=\"ngForm\" *ngIf=\"product\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"nav flex-column nav-pills nav-top-cus\" role=\"tablist\" aria-orientation=\"vertical\">\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\"\r\n                           [ngClass]=\"{active: tab == 'info'}\"\r\n                           (click)=\"changeTab('info')\">Information</a>\r\n\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\"\r\n                           [ngClass]=\"{active: tab == 'spec'}\"\r\n                           (click)=\"changeTab('spec')\">Specifications</a>\r\n\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\"\r\n                           [ngClass]=\"{active: tab == 'images'}\"\r\n                           (click)=\"changeTab('images')\">Images</a>\r\n\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"catalogs\" aria-selected=\"false\"\r\n                           [ngClass]=\"{active: tab == 'catalogs'}\"\r\n                           (click)=\"changeTab('catalogs')\">Variants</a>\r\n\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"contact\"\r\n                           aria-selected=\"false\" [ngClass]=\"{active: tab == 'size-chart'}\"\r\n                           (click)=\"changeTab('size-chart')\">Size Chart</a>\r\n\r\n                        <a [hidden]=\"!product._id\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"review\"\r\n                           aria-selected=\"false\" [ngClass]=\"{active: tab == 'review'}\" (click)=\"changeTab('review')\">Reviews\r\n                            From\r\n                            User</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane\" role=\"tabpanel\"\r\n                             [ngClass]=\"{'show active': tab === 'info', hide: tab !== 'info'}\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Name (*)</label>\r\n                                        <input type=\"text\" name=\"productName\" #productName=\"ngModel\"\r\n                                               class=\"form-control\" placeholder=\"Enter name\"\r\n                                               [(ngModel)]=\"product.name\" required (change)=\"changeAlias()\"/>\r\n                                        <div *ngIf=\"productName.errors && (productName.dirty || productName.touched || isSubmitted)\">\r\n                                            <p [hidden]=\"!productName.errors.required\" class=\"required-text\">\r\n                                                Please enter product name!\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Alias</label>\r\n                                        <input type=\"text\" name=\"alias\" class=\"form-control\"\r\n                                               placeholder=\"no space, special chars, alias name for seo\"\r\n                                               [(ngModel)]=\"product.alias\"/>\r\n                                        <small class=\"text-muted\">If the alias is exist, the system automatically adds\r\n                                            any character at the\r\n                                            end of alias.\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Type</label>\r\n                                        <select type=\"text\" name=\"type\" class=\"form-control\"\r\n                                                placeholder=\"Physical or Digital\" [(ngModel)]=\"product.type\">\r\n                                            <option value=\"physical\">Physical</option>\r\n                                            <option value=\"digital\">Digital</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\" *ngIf=\"product.type === 'digital'\">\r\n                                        <label style=\"width:100%\">Digital FilePath </label>\r\n                                        <file-upload [options]=\"fileOptions\"></file-upload>\r\n                                        <div *ngIf=\"product.type === 'digital' && product.digitalFileId\">\r\n                                            <img src=\"assets/images/file-exist.jpg\" *ngIf=\"fileType === 'file'\"\r\n                                                 width=\"45px\">\r\n                                            <img src=\"assets/images/zip-icon.png\" *ngIf=\"fileType === 'zip'\"\r\n                                                 width=\"45px\">\r\n                                            <img src=\"assets/images/pdf-icon.png\" *ngIf=\"fileType === 'pdf'\"\r\n                                                 width=\"45px\">\r\n                                            <img src=\"assets/images/rar-exist.png\" *ngIf=\"fileType === 'rar'\"\r\n                                                 width=\"45px\">\r\n                                            <span *ngIf=\"product.type === 'digital' && product.digitalFileId && product.digitalFile\">\r\n                        Mime Type: {{product?.digitalFile?.mimeType}}\r\n                      </span>\r\n                                        </div>\r\n                                        <img src=\"assets/images/nofile-available.png\" width=\"45px\"\r\n                                             *ngIf=\"product.type === 'digital' && !product.digitalFileId\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Stock Quantity (*)</label>\r\n                                        <input type=\"number\" name=\"stockQuantity\" min=\"1\" class=\"form-control\"\r\n                                               [(ngModel)]=\"product.stockQuantity\" required #stock=\"ngModel\"/>\r\n                                        <div *ngIf=\"stock.errors && (stock.dirty || stock.touched || isSubmitted)\">\r\n                                            <p [hidden]=\"!stock.errors.required\" class=\"required-text\">\r\n                                                Stock quantity is required\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Price (*)</label>\r\n                                        <input type=\"number\" name=\"price\" min=\"0.1\" class=\"form-control\"\r\n                                               [(ngModel)]=\"product.price\" required #price=\"ngModel\"/>\r\n                                        <div *ngIf=\"price.errors && (price.dirty || price.touched || isSubmitted)\">\r\n                                            <p [hidden]=\"!price.errors.required\" class=\"required-text\">\r\n                                                Price is required\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Sale Price (*)</label>\r\n                                        <input type=\"number\" name=\"salePrice\" class=\"form-control\"\r\n                                               [(ngModel)]=\"product.salePrice\" min=\"0.1\" required #salePrice=\"ngModel\"/>\r\n                                        <div *ngIf=\"salePrice.errors && (salePrice.dirty || salePrice.touched || isSubmitted)\">\r\n                                            <p [hidden]=\"!salePrice.errors.required\" class=\"required-text\">\r\n                                                Sale Price is required\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Tax Name</label>\r\n                                        <input type=\"text\" name=\"taxClass\" class=\"form-control\"\r\n                                               placeholder=\"VAT,Sales Tax,...\" [(ngModel)]=\"product.taxClass\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Tax Value (%)</label>\r\n                                        <input type=\"number\" name=\"taxValue\" class=\"form-control\" placeholder=\"10\"\r\n                                               [(ngModel)]=\"product.taxPercentage\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Restrict COD areas</label>\r\n                                        <ng-select bindValue=\"label\" placeholder=\"Fill out restrict COD areas here\"\r\n                                                   name=\"restrictCODAreas\" [items]=\"[]\" [addTag]=\"true\"\r\n                                                   [multiple]=\"true\" [isOpen]=\"false\"\r\n                                                   [(ngModel)]=\"product.restrictCODAreas\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>SKU</label>\r\n                                        <input type=\"text\" name=\"sku\" placeholder=\"Stock keeping unit\"\r\n                                               class=\"form-control\" [(ngModel)]=\"product.sku\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>UPC</label>\r\n                                        <input type=\"text\" name=\"upc\" placeholder=\"Univeral product code\"\r\n                                               class=\"form-control\" [(ngModel)]=\"product.upc\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>MPN</label>\r\n                                        <input type=\"text\" name=\"mpn\" placeholder=\"Manufacturer's part number\"\r\n                                               class=\"form-control\"\r\n                                               [(ngModel)]=\"product.mpn\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>EAN</label>\r\n                                        <input type=\"text\" name=\"ean\" placeholder=\"European article number\"\r\n                                               class=\"form-control\"\r\n                                               [(ngModel)]=\"product.ean\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>JAN</label>\r\n                                        <input type=\"text\" name=\"jan\" placeholder=\"Japanese article number\"\r\n                                               class=\"form-control\"\r\n                                               [(ngModel)]=\"product.jan\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>ISBN</label>\r\n                                        <input type=\"text\" name=\"isbn\" placeholder=\"International standard book number\"\r\n                                               class=\"form-control\"\r\n                                               [(ngModel)]=\"product.isbn\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Short description</label>\r\n                                        <textarea class=\"form-control\" name=\"productsdesc\" placeholder=\"Enter some text\"\r\n                                                  [(ngModel)]=\"product.shortDescription\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Description</label>\r\n                                        <div [froalaEditor] [(froalaModel)]=\"product.description\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Category (*)</label>\r\n                                        <select class=\"form-control\" [(ngModel)]=\"product.categoryId\" name=\"categoryId\">\r\n                                            <option value=\"\">-- No category --</option>\r\n                                            <option *ngFor=\"let item of tree\"\r\n                                                    [ngValue]=\"item._id\">{{item.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Brand</label>\r\n                                        <input type=\"text\" name=\"brand\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"product.brand\"  [ngbTypeahead]=\"search_brand\" placeholder=\"Search brand\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter_brand\"  />\r\n                                        <span *ngIf=\"searching\">searching...</span>\r\n                                        <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\r\n                                        <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n                                            <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\r\n                                        </ng-template>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-md-6\" *ngIf=\"product.metaSeo\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Meta keywords</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"metakw\"\r\n                                               [(ngModel)]=\"product.metaSeo.keywords\"\r\n                                               placeholder=\"Enter keywords for meta SEO\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\" *ngIf=\"product.metaSeo\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Meta description</label>\r\n                                        <textarea class=\"form-control\" name=\"metadesc\"\r\n                                                  [(ngModel)]=\"product.metaSeo.description\"\r\n                                                  placeholder=\"Enter description for meta SEO\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <hr>\r\n                                    <h4>Enter zip code or select the free ship areas.</h4>\r\n                                    <span *ngFor=\"let item of freeShipAreas; let i = index\"\r\n                                          class=\"label label-warning position-relative\">\r\n                    {{item.areaType}}: {{item.name ? item.name : item.value}}<a (click)=\"removeArea(item,i)\"\r\n                                                                                class=\"remove-item\">x</a>\r\n                  </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Zip Code</label>\r\n                                        <input type=\"text\" name=\"Zipcode\" [(ngModel)]=\"zipCode\" class=\"form-control\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Free Ship Country</label>\r\n                                        <select [(ngModel)]=\"freeCountry\" class=\"form-control\" name=\"freeCountry\"\r\n                                                (change)=\"loadStates(freeCountry.isoCode)\">\r\n                                            <option *ngFor=\"let item of countries\"\r\n                                                    [ngValue]=\"item\">{{item.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Free Ship State</label>\r\n                                        <select [(ngModel)]=\"freeState\" class=\"form-control\" name=\"freeCountry\"\r\n                                                (change)=\"loadCities(freeState._id)\">\r\n                                            <option *ngFor=\"let item of states\" [ngValue]=\"item\">{{item.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Free Ship City</label>\r\n                                        <select [(ngModel)]=\"freeCity\" class=\"form-control\" name=\"freeCity\">\r\n                                            <option *ngFor=\"let item of cities\" [ngValue]=\"item\">{{item.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <label style=\"width: 100%\">&nbsp;</label>\r\n                                    <div class=\"btn btn-success\" (click)=\"addFreeShipAreas()\">Add</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <hr/>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input type=\"checkbox\" name=\"dailyDeal\"\r\n                                                       [(ngModel)]=\"product.dailyDeal\"/> Daily deal\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input type=\"checkbox\" name=\"freeShip\" [(ngModel)]=\"product.freeShip\"/>\r\n                                                Free ship for all\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input type=\"checkbox\" name=\"active\" [(ngModel)]=\"product.isActive\"/>\r\n                                                Active\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\" *ngIf=\"product.dailyDeal\">\r\n                                    <hr/>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"checkbox\">\r\n                                            <label>Deal To (UTC time): <span class=\"label label-info\"\r\n                                                                             *ngIf=\"product.dealTo\">{{product?.dealTo | date:'short'}}</span></label>\r\n                                            <div class=\"row\">\r\n                                                <ngb-datepicker [(ngModel)]=\"dealDate\" name=\"dealTo\"\r\n                                                                (select)=\"updateDealTime()\"></ngb-datepicker>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" role=\"tabpanel\"\r\n                         [ngClass]=\"{'show active': tab === 'spec', hide: tab !== 'spec'}\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Specifications</label>\r\n                                    <table class=\"table\">\r\n                                        <tbody class=\"sortable\" [sortablejs]=\"product.specifications\">\r\n                                        <tr *ngFor=\"let c of product.specifications; let i = index\">\r\n                                            <td>\r\n                          <span>\r\n                            <i class=\"fa fa-bars\"></i> <strong>{{c.key}}</strong>\r\n                          </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type=\"text\" name=\"spec{{i}}\" [(ngModel)]=\"c.value\"\r\n                                                       class=\"form-control\"/>\r\n                                            </td>\r\n                                            <td>\r\n                                                <a (click)=\"removeSpec(i)\"><i class=\"fa fa-trash\"></i></a>\r\n                                            </td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                        <tfoot>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       placeholder=\"Enter specification type\" name=\"newSpec\"\r\n                                                       [(ngModel)]=\"newSpecification.key\"/>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"input-group mb-3\">\r\n                                                    <input type=\"text\" class=\"form-control\"\r\n                                                           placeholder=\"Enter specification value\"\r\n                                                           name=\"newChemicalValue\"\r\n                                                           [(ngModel)]=\"newSpecification.value\"/>\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <button class=\"btn btn-outline-secondary\" type=\"button\"\r\n                                                                (click)=\"addSpecification()\">Add\r\n                                                        </button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                        </tfoot>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\" role=\"tabpanel\"\r\n                         [ngClass]=\"{'show active': tab === 'images', hide: tab !== 'images'}\">\r\n                        <h3>Click to set main image.</h3>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 text-center\" *ngFor=\"let media of images; let i = index\">\r\n                                <img class=\"img-thumbnail\" [src]=\"media.thumbUrl\"\r\n                                     [ngClass]=\"{selected: media._id === mainImage}\"/>\r\n\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <button class=\"btn btn-secondary\" type=\"button\"\r\n                                            [ngClass]=\"{'btn-success' : media._id === mainImage}\"\r\n                                            (click)=\"setMain(media)\">\r\n                                        <i class=\"fa fa-check\"></i>\r\n                                    </button>\r\n                                    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"removeImage(media, i)\">\r\n                                        <i class=\"fa fa-trash\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr/>\r\n                        <media-select (onSelect)=\"selectImage($event)\" [options]=\"imagesOptions\"></media-select>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"tab-pane fade show active\" role=\"tabpanel\"\r\n                         [ngClass]=\"{'show active': tab === 'size-chart'}\">\r\n                        <h3>Click to set Size Chart image.</h3>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                                <label>\r\n                                    <media-select (onSelect)=\"selectSizeImage($event)\"></media-select>\r\n                                </label>\r\n                                <hr/>\r\n                                <img *ngIf=\"sizeChart\" width=\"150\" [src]=\"sizeChart\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"tab-pane\" role=\"tabpanel\"\r\n                         [ngClass]=\"{'show active': tab === 'catalogs', hide: tab !== 'catalogs'}\">\r\n                        <product-variants [product]=\"product\" *ngIf=\"product?._id\"></product-variants>\r\n                        <div class=\"alert\" *ngIf=\"!product?._id\">\r\n                            Please create product then add variants\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div [hidden]=\"!product._id\" class=\"tab-pane\" role=\"tabpanel\"\r\n                         [ngClass]=\"{'show active': tab === 'review', hide: tab !== 'review'}\">\r\n                        <product-review [productId]=\"product._id\" *ngIf=\"product._id\"></product-review>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <hr/>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~product-product-module~starter-starter-module.js.map