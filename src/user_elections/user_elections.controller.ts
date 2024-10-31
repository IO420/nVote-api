import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserElectionsService } from './user_elections.service';
import { userElectionsDto } from './dto/user_elections.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Authguard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('user-elections')
export class UserElectionsController {
  constructor(private readonly userElectionServices: UserElectionsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all user elections' })
  @ApiResponse({
    status: 200,
    description: 'User elections retrieved successfully',
  })
  getAll() {
    return this.userElectionServices.getAll();
  }

  @UseGuards(Authguard, RolesGuard)
  @Post('assign')
  @ApiOperation({ summary: 'Assign a user to an election' })
  @ApiBody({ description: 'Assignment data', type: userElectionsDto })
  @ApiResponse({
    status: 201,
    description: 'User assigned to election successfully',
  })
  createAssignament(@Body() data: userElectionsDto) {
    return this.userElectionServices.createAssignament(data);
  }

  @UseGuards(Authguard)
  @Post()
  @ApiOperation({ summary: 'Vote in an election' })
  @ApiBody({ description: 'Vote data', type: userElectionsDto })
  @ApiResponse({ status: 200, description: 'Vote cast successfully' })
  @ApiResponse({ status: 400, description: 'Token not provided' })
  @ApiResponse({ status: 403, description: 'User is not assigned to the election.' })
  voteElections(@Req() req: Request, @Body() data: userElectionsDto) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return { message: 'Token not provided.' };
    }

    return this.userElectionServices.voteElections(token, data);
  }
}
