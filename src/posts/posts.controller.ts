import { Body, Controller, Post, Put,
    HttpCode, HttpStatus, Delete, UseGuards } from '@nestjs/common';
import {CreatePostDto, PostDto, PostUpdateDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";

import {JwtAuthGuard} from "../auth/jwt-auth.guard";
@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Post('/add')
    @HttpCode(HttpStatus.CREATED)
    async createPost(@Body() body: CreatePostDto) {
        return await this.postService.createPost(body);
    }
    @Post('/find')
    @HttpCode(HttpStatus.OK)
    async findPost(@Body() body: PostDto) {
        return await this.postService.findPost(body.id);
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    async updatePost(@Body() body: PostUpdateDto) {
        return await this.postService.updatePost(body);
    }

    @Delete('/delete')
    @HttpCode(HttpStatus.OK)
    async deletePost(@Body() body: PostDto) {
        return await this.postService.deletePost(body);
    }

}
