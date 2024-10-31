import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ElectionsService } from './elections.service';
import { ElectionsDto } from './dto/elections.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Authguard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';

@ApiTags('Elections') 
@Controller('elections')
export class ElectionsController {
  constructor(private readonly electionService: ElectionsService) {}

  @Get()
  @ApiOperation({ summary: 'get all elections' })
  @ApiResponse({ status: 200, description: 'Elecciones obtenidas con éxito' })
  getAll() {
    return this.electionService.getAll();
  }

  @UseGuards(Authguard, RolesGuard)
  @Post()
  @ApiOperation({ summary: 'Create new elección' })
  @ApiBody({ description: 'Datos de la elección', type: ElectionsDto })
  @ApiResponse({ status: 201, description: 'Elección creada con éxito' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  createElection(@Body() data: ElectionsDto) {
    return this.electionService.createElection(data);
  }
}
