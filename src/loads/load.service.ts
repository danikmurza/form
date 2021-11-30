import { Injectable } from '@nestjs/common';
import {Load} from "./load.model";
import { InjectModel } from "@nestjs/sequelize";
import {CreateLoadDto, LoadUpdateDto, LoadDto} from "./dto/create-load.dto";

@Injectable()
export class LoadService {

    constructor(@InjectModel(Load) private loadRepository: typeof Load ) {}

    async createLoad(dto: CreateLoadDto) {
        const user = await this.loadRepository.create(dto);
        return user;
    }

    async getAllLoad() {
        const loads = await this.loadRepository.findAll({include: {all: true}});
        return loads;
    }

    // async getLoadByEmail(email: string) {
    //     const load = await this.loadRepository.findOne({where: {email}, include: {all: true}})
    //     return load;
    // }

    async getLoadById(id: number) {
        const load = await this.loadRepository.findOne({where: {id}, include: {all: true}})
        return load;
    }


    // async updatePassword(dto: newPasswordDto, password: string) {
    //     const load = await this.loadRepository.update({password: password}, {where: {id: dto.loadId}})
    //     return load;
    // }


    async updateUser(dto: LoadUpdateDto) {
        const user = await this.loadRepository.update({...dto}, {where: {id: dto.id}})
        return user;
    }
}
