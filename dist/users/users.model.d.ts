import { Model } from "sequelize-typescript";
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
}
export {};
