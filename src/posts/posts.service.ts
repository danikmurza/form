import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreatePostDto, PostDto, UpdatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {FilesService} from "../files/files.service";
import {UsersService} from "../users/users.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private userService: UsersService) {}

    async createPost(dto: CreatePostDto) {
       await this.postRepository.create(dto)
        const user = await this.userService.getUserById(dto.userId)
        return user
    }

    async findPost(id: number) {
        const post = await this.postRepository.findOne({where: {id: id}})
        if(post ===null){
            throw new HttpException('Task with this number does not exist', HttpStatus.BAD_REQUEST);
        }
        return post;
    }

    async updatePost(dto: UpdatePostDto) {
        const post = await this.postRepository.update({...dto}, {where: {id: dto.id}})
        if(post[0]=== 0){
            throw new HttpException('Task with this number does not exist', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.getUserById(dto.userId)
        console.log(user)
        return user
    }

    async deletePost(dto: PostDto) {
        const post = await this.postRepository.destroy({where: {id: dto.id}})
        if(post === 0){
            throw new HttpException('Task with this number does not exist', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.getUserById(dto.userId)
        return user
    }
}
