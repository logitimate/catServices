exports.id = "main";
exports.modules = {

/***/ "./src/cats/cat.controller.ts":
/*!************************************!*\
  !*** ./src/cats/cat.controller.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cat_service_1 = __webpack_require__(/*! ./cat.service */ \"./src/cats/cat.service.ts\");\nlet CatController = class CatController {\n    constructor(catService) {\n        this.catService = catService;\n    }\n    findAll() {\n        return this.catService.findAll();\n    }\n    getCat(id) {\n        return this.catService.getCat(id);\n    }\n    updateCat(id, newCat) {\n        return this.catService.updateCat(id, newCat);\n    }\n    create(req, newCat) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.catService.create(newCat);\n        });\n    }\n    delete(id) {\n        return this.catService.deleteCat(id);\n    }\n};\n__decorate([\n    common_1.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Get(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"getCat\", null);\n__decorate([\n    common_1.Put(':id'),\n    __param(0, common_1.Param('id')), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"updateCat\", null);\n__decorate([\n    common_1.Post(),\n    __param(0, common_1.Request()), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], CatController.prototype, \"create\", null);\n__decorate([\n    common_1.Delete(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatController.prototype, \"delete\", null);\nCatController = __decorate([\n    common_1.Controller('cat'),\n    __metadata(\"design:paramtypes\", [cat_service_1.CatService])\n], CatController);\nexports.CatController = CatController;\n\n\n//# sourceURL=webpack:///./src/cats/cat.controller.ts?");

/***/ }),

/***/ "./src/cats/cat.service.ts":
/*!*********************************!*\
  !*** ./src/cats/cat.service.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst cat_entity_1 = __webpack_require__(/*! ./cat.entity */ \"./src/cats/cat.entity.ts\");\nlet CatService = class CatService {\n    constructor(catRepo) {\n        this.catRepo = catRepo;\n    }\n    findAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.catRepo.find();\n        });\n    }\n    getCat(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.catRepo.findOne(id);\n        });\n    }\n    updateCat(id, cat) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const currentCat = this.catRepo.findOne(id);\n            Object.assign(currentCat, cat);\n            console.log(currentCat);\n            return yield this.catRepo.save(currentCat);\n        });\n    }\n    create(cat) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                return yield this.catRepo.save(cat);\n            }\n            catch (err) {\n                return err;\n            }\n        });\n    }\n    deleteCat(catId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const catToRemove = yield this.catRepo.findOne(catId);\n                return yield this.catRepo.remove(catToRemove);\n            }\n            catch (err) {\n                return err;\n            }\n        });\n    }\n};\nCatService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_2.InjectRepository(cat_entity_1.Cat)),\n    __metadata(\"design:paramtypes\", [typeorm_1.Repository])\n], CatService);\nexports.CatService = CatService;\n\n\n//# sourceURL=webpack:///./src/cats/cat.service.ts?");

/***/ }),

/***/ "./src/cats/cats.module.ts":
/*!*********************************!*\
  !*** ./src/cats/cats.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst cat_entity_1 = __webpack_require__(/*! ./cat.entity */ \"./src/cats/cat.entity.ts\");\nconst cat_service_1 = __webpack_require__(/*! ./cat.service */ \"./src/cats/cat.service.ts\");\nconst cat_controller_1 = __webpack_require__(/*! ./cat.controller */ \"./src/cats/cat.controller.ts\");\nlet CatsModule = class CatsModule {\n};\nCatsModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forFeature([cat_entity_1.Cat])],\n        providers: [cat_service_1.CatService],\n        controllers: [cat_controller_1.CatController],\n        exports: [cat_service_1.CatService],\n    })\n], CatsModule);\nexports.CatsModule = CatsModule;\n\n\n//# sourceURL=webpack:///./src/cats/cats.module.ts?");

/***/ })

};