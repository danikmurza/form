

export class CreateLoadDto {

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

    trailerStatus: string;

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

export class LoadDto {


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

    trailerStatus: string;

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

export class LoadUpdateDto {


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

    trailerStatus: string;

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

export class LoadDeleteDto {

    id: string;
}
