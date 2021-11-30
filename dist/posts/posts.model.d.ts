import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface PostCreationAttrs {
    workType: string;
    origin: string;
    radius: number;
    destination: string;
    radiusDest: number;
    exclCities: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    trallerStatus: string;
    equipment: string;
    loadType: string;
    driverType: string;
    stops: number;
    priceMile: number;
    payout: number;
    tripLength: string;
    hoursMin: number;
    hoursMax: number;
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    workType: string;
    origin: string;
    radius: number;
    destination: string;
    radiusDest: number;
    exclCities: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    trallerStatus: string;
    equipment: string;
    loadType: string;
    driverType: string;
    stops: number;
    priceMile: number;
    payout: number;
    tripLength: string;
    hoursMin: number;
    hoursMax: number;
    userId: number;
    author: User;
}
export {};
