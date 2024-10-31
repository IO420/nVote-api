import { forwardRef, Module } from '@nestjs/common';
import { VotingGateway } from './websocket.gateway';
import { UserElectionsModule } from 'src/user_elections/user_elections.module';

@Module({
  imports:[forwardRef(() => UserElectionsModule)],
  providers: [VotingGateway],
  exports:[VotingGateway]
})
export class WebsocketModule {}
