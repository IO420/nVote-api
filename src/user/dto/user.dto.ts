import { IsNumber, IsString } from "class-validator";

export class UserDto{

    @IsNumber()
    id_user:number

    @IsString()
    name:string

    @IsString()
    email:string

    @IsNumber()
    type:number
}

export class LoginUserDto{

    @IsString()
    name:string

    @IsString()
    password:string
}