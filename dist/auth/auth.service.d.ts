import { CreateUserDto, newPasswordDto, UpdateUserDto, UserDto, UserDtoRecover } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/users.model";
import { FilesService } from "../files/files.service";
import { MailService } from "../mail/mail.service";
export declare class AuthService {
    private userService;
    private jwtService;
    private fileService;
    private mailService;
    constructor(userService: UsersService, jwtService: JwtService, fileService: FilesService, mailService: MailService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    uploadFile(dto: UserDto, image: any): Promise<User>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private gToken;
    updateUser(dto: UpdateUserDto): Promise<User>;
    private validateUser;
    getUser(dto: number): Promise<User>;
    recovery(dto: UserDtoRecover): Promise<{
        message: string;
    }>;
    newPassword(dto: newPasswordDto): Promise<{
        message: string;
    }>;
    googleLogin(req: any): Promise<string>;
}
