import { Body, Controller, Get, Post } from '@nestjs/common';
import { ElectionsService } from './elections.service';
import { ElectionsDto } from './dto/elections.dto';

@Controller('elections')
export class ElectionsController {
    constructor(private readonly electionService:ElectionsService){}

    @Get()
    getAll(){   
        return
    }

    @Post()
    createElection(@Body()data:ElectionsDto){   
        return this.electionService.createElection(data)
    }
}
