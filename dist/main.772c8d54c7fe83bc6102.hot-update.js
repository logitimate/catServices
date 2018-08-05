exports.id = "main";
exports.modules = {

/***/ "./src/cats/cat.controller.ts":
/*!************************************!*\
  !*** ./src/cats/cat.controller.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cat_service_1 = __webpack_require__(/*! ./cat.service */ \"./src/cats/cat.service.ts\");\nlet CatController = class CatController {\n    constructor(catService) {\n        this.catService = catService;\n    }\n    findAll() {\n        console.log('find all');\n        return this.catService.findAll();\n    }\n    getCat(id) {\n        return this.catService.getCat(id);\n    }\n    create(req, newCat) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.catService.create(newCat);\n        });\n    }\n    delete(id) {\n        return this.catService.deleteCat(id);\n    }\n};\n__decorate([\n    common_1.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Get(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"getCat\", null);\n__decorate([\n    common_1.Post(),\n    __param(0, common_1.Request()), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], CatController.prototype, \"create\", null);\n__decorate([\n    common_1.Delete(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"delete\", null);\nCatController = __decorate([\n    common_1.Controller('cat'),\n    __metadata(\"design:paramtypes\", [cat_service_1.CatService])\n], CatController);\nexports.CatController = CatController;\n\n\n//# sourceURL=webpack:///./src/cats/cat.controller.ts?");

/***/ })

};