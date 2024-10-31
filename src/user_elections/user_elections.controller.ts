import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserElectionsService } from './user_elections.service';
import { userElectionsDto } from './dto/user_elections.dto';

@Controller('user-elections')
export class UserElectionsController {
  constructor(private readonly userElectionServices: UserElectionsService) {}

  @Get()
  getAll() {
    return this.userElectionServices.getAll();
  }

  @Post('assign')
  createAssignament(@Body() data: userElectionsDto) {
    return this.userElectionServices.createAssignament(data);
  }

  @Post()
  voteElections(@Req() req: Request, @Body() data: userElectionsDto) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return { message: 'Token not provided.' };
    }

    return this.userElectionServices.voteElections(token, data);
  }
}
