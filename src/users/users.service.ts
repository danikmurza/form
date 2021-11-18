import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import {CreateUserDto, newPasswordDto, UpdateUserDto, UserDto, UserDtoGoogle} from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async uploadImage(dto: UserDto, image: string) {
        const user = await this.userRepository.update({image: image}, {where: {id: dto.id}})
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}})
        return user;
    }


    async updatePassword(dto: newPasswordDto, password: string) {
        const user = await this.userRepository.update({password: password}, {where: {id: dto.userId}})
        return user;
    }

    async createUserGoogle(dto: UserDtoGoogle) {
        const user = await this.userRepository.create(dto)
        return user;
    }

    async updateUser(dto: UpdateUserDto) {
        const user = await this.userRepository.update({...dto}, {where: {id: dto.userId}})
        return user;
    }
}
