import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserElectionsService } from './user_elections.service';
import { ElectionsDto } from 'src/elections/dto/elections.dto';

@Controller('user-elections')
export class UserElectionsController {
    constructor(private readonly userElectionServices:UserElectionsService){}

    @Get()
    getAll(){
        return this.userElectionServices.getAll()
    }

    @Post()
    createAssignament(@Body()data:ElectionsDto){   
        return this.userElectionServices.createAssignament(data)
    }

}
