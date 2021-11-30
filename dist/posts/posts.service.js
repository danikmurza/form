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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const posts_model_1 = require("./posts.model");
const users_service_1 = require("../users/users.service");
let PostsService = class PostsService {
    constructor(postRepository, userService) {
        this.postRepository = postRepository;
        this.userService = userService;
    }
    async createPost(dto) {
        await this.postRepository.create(dto);
        const user = await this.userService.getUserById(dto.userId);
        return user;
    }
    async findPost(id) {
        const post = await this.postRepository.findOne({ where: { id: id } });
        if (post === null) {
            throw new common_1.HttpException('Task with this number does not exist', common_1.HttpStatus.BAD_REQUEST);
        }
        return post;
    }
    async updatePost(dto) {
        const post = await this.postRepository.update(Object.assign({}, dto), { where: { id: dto.id } });
        if (post[0] === 0) {
            throw new common_1.HttpException('Task with this number does not exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.getUserById(dto.userId);
        console.log(user);
        return user;
    }
    async deletePost(dto) {
        const post = await this.postRepository.destroy({ where: { id: dto.id } });
        if (post === 0) {
            throw new common_1.HttpException('Task with this number does not exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.getUserById(dto.userId);
        return user;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(posts_model_1.Post)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map