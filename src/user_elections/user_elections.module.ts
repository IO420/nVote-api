import { Module } from '@nestjs/common';
import { UserElectionsService } from './user_elections.service';
import { UserElectionsController } from './user_elections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_elections } from './entity/user_elections.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User_elections]),],
  providers: [UserElectionsService],
  controllers: [UserElectionsController]
})
export class UserElectionsModule {}
