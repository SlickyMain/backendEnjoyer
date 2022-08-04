import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create_users.dto';
import { UsersService } from 'src/users/users.service';
import * as brcyptjs from "bcryptjs"
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    private async generateToken(user: User) {
        const payload = {id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email)
        const isPasswordMatch = user ? await brcyptjs.compare(userDto.password, user.password) : null
        if (user && isPasswordMatch) {
            return user
        }
        throw new UnauthorizedException({message: !isPasswordMatch && user ? "Password is incorrect" : "User wasn't found" })
    }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async register(userDto: CreateUserDto) {
        const validNewUser = await this.usersService.getUserByEmail(userDto.email)
        if (validNewUser) {
            throw new HttpException("This email already have account", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await brcyptjs.hash(userDto.password, 5)
        const user = await this.usersService.createUser({ ...userDto, password: hashPassword })
        return this.generateToken(user)
    }

}
