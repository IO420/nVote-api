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

    @IsString()
    password:string
}