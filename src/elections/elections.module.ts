import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elections } from './entity/elections.entity';
import { ElectionsService } from './elections.service';
import { ElectionsController } from './elections.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Elections]),],
    providers: [ElectionsService],
    controllers: [ElectionsController]
  })
  export class ElectionsModule {}
  