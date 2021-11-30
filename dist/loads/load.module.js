"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadModule = void 0;
const common_1 = require("@nestjs/common");
const load_controller_1 = require("./load.controller");
const load_service_1 = require("./load.service");
const sequelize_1 = require("@nestjs/sequelize");
const load_model_1 = require("./load.model");
const auth_module_1 = require("../auth/auth.module");
const posts_model_1 = require("../posts/posts.model");
let LoadModule = class LoadModule {
};
LoadModule = __decorate([
    common_1.Module({
        controllers: [load_controller_1.LoadController],
        providers: [load_service_1.LoadService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([load_model_1.Load, posts_model_1.Post]),
            common_1.forwardRef(() => auth_module_1.AuthModule),
        ],
        exports: [
            load_service_1.LoadService,
        ]
    })
], LoadModule);
exports.LoadModule = LoadModule;
//# sourceMappingURL=load.module.js.map