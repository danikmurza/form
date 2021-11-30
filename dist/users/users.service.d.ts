import { User } from "./users.model";
import { CreateUserDto, newPasswordDto, UpdateUserDto, UserDto, UserDtoGoogle } from "./dto/create-user.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    uploadImage(dto: UserDto, image: string): Promise<[number, User[]]>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: number): Promise<User>;
    updatePassword(dto: newPasswordDto, password: string): Promise<[number, User[]]>;
    createUserGoogle(dto: UserDtoGoogle): Promise<User>;
    updateUser(dto: UpdateUserDto): Promise<[number, User[]]>;
}
