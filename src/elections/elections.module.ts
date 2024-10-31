import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elections } from './entity/elections.entity';
import { ElectionsService } from './elections.service';
import { ElectionsController } from './elections.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Elections]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'JWT_SECRET',
    }),
  ],
  providers: [ElectionsService],
  controllers: [ElectionsController],
})
export class ElectionsModule {}
