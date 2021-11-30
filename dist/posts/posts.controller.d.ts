import { CreatePostDto, PostDto, PostUpdateDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(body: CreatePostDto): Promise<import("../users/users.model").User>;
    findPost(body: PostDto): Promise<import("./posts.model").Post>;
    updatePost(body: PostUpdateDto): Promise<import("../users/users.model").User>;
    deletePost(body: PostDto): Promise<import("../users/users.model").User>;
}
