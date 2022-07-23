import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create_users.dto';
import { User } from './users.model';
import { UsersService } from './users.service';


@ApiTags("Users")
@Controller('api/users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiOperation({summary: "Creating user"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: "Getting user by ID"})
    @ApiResponse({status: 200, type: User})
    @Get("/:id")
    getOneUser(@Param("id") userID: number) {
        return this.usersService.getUser(userID)
    }
}
