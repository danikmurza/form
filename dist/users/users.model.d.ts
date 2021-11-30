import { Model } from "sequelize-typescript";
import { Post } from "../posts/posts.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    image: string;
    firstName: string;
    lastName: string;
    posts: Post[];
}
export {};
