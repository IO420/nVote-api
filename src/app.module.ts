import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ElectionsService } from './elections/elections.service';
import { ElectionsController } from './elections/elections.controller';
import { ElectionsModule } from './elections/elections.module';
import { UserElectionsModule } from './user_elections/user_elections.module';
import { User } from './user/entity/user.entity';
import { Elections } from './elections/entity/elections.entity';
import { User_elections } from './user_elections/entity/user_elections.entity';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'newtest',
      entities: [User, Elections, User_elections],
      synchronize: true,
    }),
    UserModule,
    ElectionsModule,
    UserElectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
