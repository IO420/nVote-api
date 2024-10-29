import { IsString } from "class-validator";

export class ElectionsDto{
    @IsString()
    name:string

}