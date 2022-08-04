import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create_users.dto';
import { User } from 'src/users/users.model';
import { AuthService } from './auth.service';

@ApiTags("Authentification")
@Controller('api/auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: "Login user"})
    @ApiResponse({status: 200, type: User})
    @Post("/login")
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: "Creating user"})
    @ApiResponse({status: 200, type: User})
    @Post("/register")
    register(@Body() userDto: CreateUserDto) {
        return this.authService.register(userDto)
    }

}
