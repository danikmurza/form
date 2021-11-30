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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadService = void 0;
const common_1 = require("@nestjs/common");
const load_model_1 = require("./load.model");
const sequelize_1 = require("@nestjs/sequelize");
let LoadService = class LoadService {
    constructor(loadRepository) {
        this.loadRepository = loadRepository;
    }
    async createLoad(dto) {
        const user = await this.loadRepository.create(dto);
        return user;
    }
    async getAllLoad() {
        const loads = await this.loadRepository.findAll({ include: { all: true } });
        return loads;
    }
    async getLoadById(id) {
        const load = await this.loadRepository.findOne({ where: { id }, include: { all: true } });
        return load;
    }
    async updateUser(dto) {
        const user = await this.loadRepository.update(Object.assign({}, dto), { where: { id: dto.id } });
        return user;
    }
};
LoadService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(load_model_1.Load)),
    __metadata("design:paramtypes", [Object])
], LoadService);
exports.LoadService = LoadService;
//# sourceMappingURL=load.service.js.map