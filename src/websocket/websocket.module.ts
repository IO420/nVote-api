import { Module } from '@nestjs/common';
import { WebsocketService } from './websocket.service';
import { VotingGateway } from './websocket.gateway';

@Module({
  providers: [VotingGateway],
  exports:[VotingGateway]
})
export class WebsocketModule {}
