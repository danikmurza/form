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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const files_service_1 = require("../files/files.service");
const mail_service_1 = require("../mail/mail.service");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.ID_CLIENT);
let AuthService = class AuthService {
    constructor(userService, jwtService, fileService, mailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.fileService = fileService;
        this.mailService = mailService;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }
    async uploadFile(dto, image) {
        const fileName = await this.fileService.createFile(image);
        let name = "http://localhost:5000/" + fileName;
        await this.userService.uploadImage(dto, name);
        return await this.getUser(dto.id);
    }
    async registration(userDto) {
        if (userDto.password.length < 4) {
            throw new common_1.HttpException('Password must be at least 4 characters', common_1.HttpStatus.BAD_REQUEST);
        }
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException('User with this email is already registered', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 10);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return this.generateToken(user);
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async gToken(user) {
        const payload = { email: user.email, id: user.id };
        return this.jwtService.sign(payload);
    }
    async updateUser(dto) {
        await this.userService.updateUser(dto);
        const user = await this.getUser(dto.userId);
        return user;
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({ message: 'incorrect email or password' });
    }
    async getUser(dto) {
        const user = await this.userService.getUserById(dto);
        return user;
    }
    async recovery(dto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if (!candidate) {
            throw new common_1.HttpException(`Doesn't have user with this email`, common_1.HttpStatus.BAD_REQUEST);
        }
        const token = await this.gToken(candidate);
        await this.mailService.sendUserConfirmation(candidate.email, token);
        return { message: 'Please check email' };
    }
    async newPassword(dto) {
        if (dto.password.length < 4) {
            throw new common_1.HttpException('Password must be at least 4 characters', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 10);
        await this.userService.updatePassword(dto, hashPassword);
        return { message: 'Password updated' };
    }
    async googleLogin(req) {
        if (!req.user) {
            return 'No user from google';
        }
        const candidate = await this.userService.getUserByEmail(req.user.email);
        if (candidate) {
            const token = await this.generateToken(candidate);
            return token.token;
        }
        else {
            const user = await this.userService.createUserGoogle({
                email: req.user.email,
                image: req.user.picture,
                password: req.user.accessToken,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
            });
            const token = await this.generateToken(user);
            return token.token;
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        files_service_1.FilesService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map