import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {
    CreateUserDto,
    newPasswordDto, UpdateUserDto,
    UserDto, UserDtoGoogle,
    UserDtoRecover
} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";
import {FilesService} from "../files/files.service";
import {MailService} from "../mail/mail.service";

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.ID_CLIENT);

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService,
                private fileService: FilesService,
                private mailService: MailService) {
    }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async uploadFile(dto: UserDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        let name = "http://localhost:5000/" + fileName
        await this.userService.uploadImage(dto, name)
        return await this.getUser(dto.id)
    }

    async registration(userDto: CreateUserDto) {
        if (userDto.password.length < 4) {
            throw new HttpException('Password must be at least 4 characters', HttpStatus.BAD_REQUEST);
        }
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('User with this email is already registered', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 10);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async gToken(user: User) {
        const payload = {email: user.email, id: user.id}
        return this.jwtService.sign(payload)

    }

    async updateUser(dto: UpdateUserDto) {
        await this.userService.updateUser(dto);
        const user = await this.getUser(dto.userId)
        return user
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'incorrect email or password'})
    }

    async getUser(dto: number) {
        const user = await this.userService.getUserById(dto)
        return user


    }

    async recovery(dto: UserDtoRecover) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if (!candidate) {
            throw new HttpException(`Doesn't have user with this email`, HttpStatus.BAD_REQUEST);
        }
        const token = await this.gToken(candidate)
        await this.mailService.sendUserConfirmation(candidate.email, token)
        return {message: 'Please check email'}

    }


    async newPassword(dto: newPasswordDto) {
        if (dto.password.length < 4) {
            throw new HttpException('Password must be at least 4 characters', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 10);
        await this.userService.updatePassword(dto, hashPassword)
        return {message: 'Password updated'}
    }


    async googleLogin(req): Promise<string> {
        if (!req.user) {
            return 'No user from google'
        }
        const candidate = await this.userService.getUserByEmail(req.user.email);
        if (candidate) {
            const token = await this.generateToken(candidate)
            return token.token

        } else {
            const user = await this.userService.createUserGoogle({
                email: req.user.email,
                image: req.user.picture,
                password: req.user.accessToken,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
            })
            const token = await this.generateToken(user)
            return token.token
        }
    }
}
