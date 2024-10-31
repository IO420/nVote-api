import { Module } from '@nestjs/common';
import { UserElectionsService } from './user_elections.service';
import { UserElectionsController } from './user_elections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_elections } from './entity/user_elections.entity';
import { JwtModule } from '@nestjs/jwt';
import { WebsocketModule } from 'src/websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User_elections]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'JWT_SECRET',
    }),
    WebsocketModule,
  ],
  providers: [UserElectionsService],
  controllers: [UserElectionsController],
})
export class UserElectionsModule {}
