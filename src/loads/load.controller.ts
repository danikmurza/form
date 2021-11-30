import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import {LoadService} from "./load.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";


@UseGuards(JwtAuthGuard)
@Controller('loads')
export class LoadController {

    constructor(private usersService: LoadService) {}

    // @ApiResponse({status: 200, description: "Hello"})
    //
    // @Get()
    // getAll() {
    //     return this.usersService.getAllUsers();
    // }
}
