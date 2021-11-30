import {
    Body, Controller, Post, Put,
    HttpCode, HttpStatus, Delete, UseGuards, Get
} from '@nestjs/common';
import {CreateLoadDto, LoadDeleteDto, LoadDto, LoadUpdateDto} from "./dto/create-load.dto";
import {LoadsService} from "./loads.service";

import {JwtAuthGuard} from "../auth/jwt-auth.guard";
@UseGuards(JwtAuthGuard)
@Controller('loads')
export class LoadsController {

    constructor(private loadService: LoadsService) {}


    @Get('/')
    @HttpCode(HttpStatus.OK)
    async getAllLoads() {
        return await this.loadService.getAllLoads();
    }

    @Post('/add')
    @HttpCode(HttpStatus.CREATED)
    async createLoad(@Body() body: CreateLoadDto) {
        return await this.loadService.createLoad(body);
    }
    @Post('/find')
    @HttpCode(HttpStatus.OK)
    async findLoad(@Body() body: LoadDto) {
        return await this.loadService.findLoad(body.id);
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    async updateLoad(@Body() body: LoadUpdateDto) {
        return await this.loadService.updateLoad(body);
    }

    @Put('/book')
    @HttpCode(HttpStatus.OK)
    async bookLoad(@Body() body: LoadUpdateDto) {
        return await this.loadService.updateLoad(body);
    }

    @Delete('/delete')
    @HttpCode(HttpStatus.OK)
    async deleteLoad(@Body() body: LoadDeleteDto) {
        return await this.loadService.deleteLoad(body);
    }

}
