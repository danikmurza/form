import { CreatePostDto, PostDto, PostUpdateDto } from "./dto/create-post.dto";
import { Post } from "./posts.model";
import { UsersService } from "../users/users.service";
export declare class PostsService {
    private postRepository;
    private userService;
    constructor(postRepository: typeof Post, userService: UsersService);
    createPost(dto: CreatePostDto): Promise<import("../users/users.model").User>;
    findPost(id: number): Promise<Post>;
    updatePost(dto: PostUpdateDto): Promise<import("../users/users.model").User>;
    deletePost(dto: PostDto): Promise<import("../users/users.model").User>;
}
