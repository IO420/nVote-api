import { IsDateString, IsString } from "class-validator";

export class ElectionsDto{
    @IsString()
    name:string

    @IsDateString()
    end:string

}