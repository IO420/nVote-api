import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class LoginDto{
    @IsString()
    @ApiProperty({ description: 'User name', example: 'eithan' })
    name:string

    @IsString()
    @ApiProperty({ description: 'User password', example: '123' })
    password:string
}

export class UserDto extends LoginDto{

    @IsNumber()
    @ApiProperty({ description: 'User ID', example: 1 })
    id_user:number

    @IsString()
    @ApiProperty({ description: 'User email', example: 'eithan@example.com' })
    email:string

    @IsNumber()
    @ApiProperty({ description: 'User type is use to identify what kind of user are you', example: '2' })
    type:number

}