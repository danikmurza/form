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
exports.UpdateUserDto = exports.UserDtoGoogle = exports.newPasswordDto = exports.UserId = exports.UserEmailDto = exports.UserDtoRecover = exports.imageDto = exports.UserDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({ example: 'user@mail.ru', description: 'Почта' }),
    class_validator_1.IsString({ message: 'Должно быть строкой' }),
    class_validator_1.IsEmail({}, { message: "Некорректный email" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '12345', description: 'пароль' }),
    class_validator_1.IsString({ message: 'Должно быть строкой' }),
    class_validator_1.Length(4, 16, { message: 'Не меньше 4 и не больше 16' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;
class UserDto {
}
exports.UserDto = UserDto;
class imageDto {
}
exports.imageDto = imageDto;
class UserDtoRecover {
}
exports.UserDtoRecover = UserDtoRecover;
class UserEmailDto {
}
exports.UserEmailDto = UserEmailDto;
class UserId {
}
exports.UserId = UserId;
class newPasswordDto {
}
exports.newPasswordDto = newPasswordDto;
class UserDtoGoogle {
}
exports.UserDtoGoogle = UserDtoGoogle;
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=create-user.dto.js.map