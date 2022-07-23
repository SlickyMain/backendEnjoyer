import { ApiProperty } from "@nestjs/swagger"


export class CreateUserDto {

    @ApiProperty({ example: "john@doe.com", description: "Email address" })
    readonly email: string

    @ApiProperty({ example: "qwer1234", description: "Password that user wanna set" })
    readonly password: string
}