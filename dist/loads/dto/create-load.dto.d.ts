export declare class CreateLoadDto {
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
export declare class LoadDto {
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
    book: boolean;
    driverId: number;
}
export declare class LoadUpdateDto {
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
    book: boolean;
    driverId: number;
}
export declare class DeleteDto {
    id: string;
}
