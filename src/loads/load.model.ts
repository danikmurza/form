import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Post} from "../posts/posts.model";

interface LoadCreationAttrs {

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


    book: boolean;

    driverId: number;
}

@Table({tableName: 'loads'})
export class Load extends Model<Load, LoadCreationAttrs> {

    // @HasMany(() => Post)
    // posts: Post[];

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: true})
    workType: string;

    @Column({type: DataType.STRING, allowNull: true})
    origin: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    radius: number;

    @Column({type: DataType.STRING, allowNull: true})
    destination: string;

    @Column({type: DataType.STRING, allowNull: true})
    radiusDest: number;

    @Column({type: DataType.STRING, allowNull: true})
    exclCities: string;

    @Column({type: DataType.STRING, allowNull: true})
    startDate: string;

    @Column({type: DataType.STRING, allowNull: true})
    startTime: string;

    @Column({type: DataType.STRING, allowNull: true})
    endDate: string;

    @Column({type: DataType.STRING, allowNull: true})
    endTime: string;

    @Column({type: DataType.STRING, allowNull: true})
    trallerStatus: string;

    @Column({type: DataType.STRING, allowNull: true})
    equipment: string;

    @Column({type: DataType.STRING, allowNull: true})
    loadType: string;

    @Column({type: DataType.STRING, allowNull: true})
    driverType: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    stops: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    priceMile: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    payout: number;

    @Column({type: DataType.STRING, allowNull: true})
    tripLength: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    hoursMin: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    hoursMax: number;

    @Column({type: DataType.BOOLEAN, allowNull: true})
    book: boolean;

    @Column({type: DataType.INTEGER, allowNull: true})
    driverId: number;
}
