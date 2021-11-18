import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
}

export class UserDto {


    readonly id: number;
    readonly image: string
}


export class imageDto {


    readonly id: number;
    readonly image: string
    readonly userId: number

}

export class UserDtoRecover {


    readonly id: number;
    readonly email: string

}

export class UserEmailDto {


    readonly email: string

}

export class UserId {


    readonly userId: number

}

export class newPasswordDto {


    readonly userId: number
    readonly password: string

}


export class UserDtoGoogle {

    readonly email: string
    readonly image: string
    readonly password: string
    readonly firstName: string
    readonly lastName: string
}

export class UpdateUserDto {

    readonly image: string
    readonly password: string
    readonly firstName: string
    readonly lastName: string
    readonly userId: number
}
