import { Load } from "./load.model";
import { CreateLoadDto, LoadUpdateDto } from "./dto/create-load.dto";
export declare class LoadService {
    private loadRepository;
    constructor(loadRepository: typeof Load);
    createLoad(dto: CreateLoadDto): Promise<Load>;
    getAllLoad(): Promise<Load[]>;
    getLoadById(id: number): Promise<Load>;
    updateUser(dto: LoadUpdateDto): Promise<[number, Load[]]>;
}
