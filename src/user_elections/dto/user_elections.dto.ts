import { IsString } from "class-validator";

export class User_Elections{
    @IsString()
    option:string

}