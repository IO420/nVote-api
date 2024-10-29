import { IsNumber, IsString } from "class-validator";

export class UserDto{

    @IsNumber()
    id_user:number

    @IsString()
    name:string

    @IsString()
    email:string
}

export class LoginUserDto{

    @IsString()
    name:string

    @IsString()
    password:string
}