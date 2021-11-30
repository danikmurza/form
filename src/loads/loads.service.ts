import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateLoadDto, LoadDeleteDto, LoadDto, LoadUpdateDto} from "./dto/create-load.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Load} from "./loads.model";


@Injectable()
export class LoadsService {

    constructor(@InjectModel(Load) private loadRepository: typeof Load) {}


    async getAllLoads() {
        const loads = await this.loadRepository.findAll({include: {all: true}});
        return loads;
    }

    async createLoad(dto: CreateLoadDto) {
       await this.loadRepository.create(dto)
        return this.getAllLoads()
    }

    async findLoad(id: number) {
        const load = await this.loadRepository.findOne({where: {id: id}})
        if(load ===null){
            throw new HttpException('Load with this number does not exist', HttpStatus.BAD_REQUEST);
        }
        return load;
    }

    async updateLoad(dto: LoadUpdateDto) {
        const load = await this.loadRepository.update({...dto}, {where: {id: dto.id}})
        if(load[0]=== 0){
            throw new HttpException('Load with this number does not exist', HttpStatus.BAD_REQUEST);
        }
        return this.getAllLoads()
    }

    async deleteLoad(dto: LoadDeleteDto) {
        const load = await this.loadRepository.destroy({where: {id: dto.id}})
        if(load === 0){
            throw new HttpException('Load with this number does not exist', HttpStatus.BAD_REQUEST);
        }
        return this.getAllLoads()

    }
}
