import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create_users.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private usersStorage: typeof User) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.usersStorage.create(dto)
        return user
    }

    async getUser(user_id: number) {
        const user = await this.usersStorage.findByPk(user_id)
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.usersStorage.findOne({ where: { email }, include: { all: true } })
        return user
    }

}
