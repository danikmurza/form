import { CreateUserDto, newPasswordDto, UpdateUserDto, UserDto, UserDtoRecover, UserId } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    createPost(dto: UserDto, image: any): Promise<import("../users/users.model").User>;
    getUser(dto: UserId): Promise<import("../users/users.model").User>;
    recover(dto: UserDtoRecover): Promise<{
        message: string;
    }>;
    newPassword(dto: newPasswordDto): Promise<{
        message: string;
    }>;
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any, res: any): Promise<void>;
    updateUser(dto: UpdateUserDto): Promise<import("../users/users.model").User>;
}
