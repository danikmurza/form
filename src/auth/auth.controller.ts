import {
    Body, Controller, Get, HttpCode, HttpStatus, Req,
    Post, Put, UploadedFile, UseGuards, UseInterceptors, Redirect, Res
} from '@nestjs/common';
import {
    CreateUserDto, imageDto, newPasswordDto, UpdateUserDto, UserDto, UserDtoGoogle,
    UserDtoRecover, UserEmailDto, UserId
} from "../users/dto/create-user.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {AuthService} from "./auth.service";


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() userDto: CreateUserDto) {
        return await this.authService.login(userDto)
    }

    @Post('/registration')
    @HttpCode(HttpStatus.CREATED)
    async registration(@Body() userDto: CreateUserDto) {
        return await this.authService.registration(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/image')
    @HttpCode(HttpStatus.CREATED)
    @UseInterceptors(FileInterceptor('image'))
    async createPost(@Body() dto: UserDto, @UploadedFile() image) {
        return await this.authService.uploadFile(dto, image)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getUser(@Body() dto: UserId) {
        console.log(dto)
        return await this.authService.getUser(dto.userId)
    }


    @Post('/recovery')
    @HttpCode(HttpStatus.OK)
    async recover(@Body() dto: UserDtoRecover) {
        return await this.authService.recovery(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/password')
    @HttpCode(HttpStatus.OK)
    async newPassword(@Body() dto: newPasswordDto) {
        return await this.authService.newPassword(dto)
    }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
    }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req, @Res() res) {
        const token = await this.authService.googleLogin(req)
        res.redirect('http://localhost:3000/google/' + token)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update')
    async updateUser(@Body() dto: UpdateUserDto) {
        return await this.authService.updateUser(dto)
    }
}
