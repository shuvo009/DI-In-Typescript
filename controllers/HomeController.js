"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_express_utils_1 = require('inversify-express-utils');
var inversify_1 = require('inversify');
var types_1 = require('../constant/types');
var HomeController = (function () {
    function HomeController(homeService) {
        this.homeService = homeService;
        this._homeService = homeService;
    }
    HomeController.prototype.getData = function (req, res) {
        var data = this._homeService.getData();
        res.json({ data: data });
    };
    __decorate([
        inversify_express_utils_1.Get('/data'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], HomeController.prototype, "getData", null);
    HomeController = __decorate([
        inversify_1.injectable(),
        inversify_express_utils_1.Controller('/home'),
        __param(0, inversify_1.inject(types_1.default.HomeService)), 
        __metadata('design:paramtypes', [Object])
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map