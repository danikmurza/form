import {Controller, Get, Post, UseGuards} from '@nestjs/common';

import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ValidationPipe} from "../pipes/validation.pipe";

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    // @ApiResponse({status: 200, description: "Hello"})
    //
    // @Get()
    // getAll() {
    //     return this.usersService.getAllUsers();
    // }
}
