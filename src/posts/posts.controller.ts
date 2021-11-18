import {
    Body,
    Controller,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
    HttpCode,
    HttpStatus,
    Delete, UseGuards, Req
} from '@nestjs/common';
import {CreatePostDto, PostDto, UpdatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Post('/todo')
    @HttpCode(HttpStatus.CREATED)
    async createTodo(@Body() body: CreatePostDto) {
        return await this.postService.createPost(body);
    }
    @Post('/find')
    @HttpCode(HttpStatus.OK)
    async findTodo(@Body() body: PostDto) {
        return await this.postService.findPost(body.id);
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    async updateTodo(@Body() body: UpdatePostDto) {
        return await this.postService.updatePost(body);
    }

    @Delete('/delete')
    @HttpCode(HttpStatus.OK)
    async deleteTodo(@Body() body: PostDto) {
        return await this.postService.deletePost(body);
    }

}
