import { forwardRef, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserElectionsService } from 'src/user_elections/user_elections.service';

@ApiTags('WebSocket')
@WebSocketGateway({ cors: true })
export class VotingGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(
    @Inject(forwardRef(() => UserElectionsService))
    private userElectionsService: UserElectionsService,
  ) {}

  afterInit(server: Server) {
    console.log('WebSocket initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.sendVoterList(client);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  async sendVoterList(client: Socket) {
    const voters = await this.userElectionsService.getAll();
    client.emit('updateVoters', voters);
  }

  @SubscribeMessage('vote')
  handleVote(client: Socket, payload: any) {
    this.server.emit('updateVoters', payload);
  }
}
