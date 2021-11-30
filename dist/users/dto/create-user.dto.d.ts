export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class UserDto {
    readonly id: number;
    readonly image: string;
}
export declare class imageDto {
    readonly id: number;
    readonly image: string;
    readonly userId: number;
}
export declare class UserDtoRecover {
    readonly id: number;
    readonly email: string;
}
export declare class UserEmailDto {
    readonly email: string;
}
export declare class UserId {
    readonly userId: number;
}
export declare class newPasswordDto {
    readonly userId: number;
    readonly password: string;
}
export declare class UserDtoGoogle {
    readonly email: string;
    readonly image: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
}
export declare class UpdateUserDto {
    readonly image: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly userId: number;
}
