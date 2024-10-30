import { Repository } from 'typeorm';
import { User_elections } from './entity/user_elections.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { userElectionsDto } from './dto/user_elections.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserElectionsService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User_elections)
    private UserElectionsRepository: Repository<User_elections>,
  ) {}

  getAll() {
    return this.UserElectionsRepository.find({
      order: { id_user_elections: 'DESC' },
    });
  }

  findRelation(id_user: number, id_elections: number) {
    return this.UserElectionsRepository.findOne({
      where: { id_user, id_elections },
    });
  }

  async createAssignament(data: userElectionsDto) {
    const { id_user, id_elections } = data;

    const assign = await this.findRelation(id_user, id_elections);

    if (assign) {
      return { message: 'that assignacion has already been made' };
    }

    await this.UserElectionsRepository.save(
      this.UserElectionsRepository.create(data),
    );

    return { message: 'assign user' };
  }

  async voteElections(token: string, data: userElectionsDto) {
    const decodedToken = this.jwtService.verify(token);
    const tokenUserId = decodedToken.id_user;
    const { id_user } = tokenUserId;
    console.log(tokenUserId);

    const { id_elections } = data;
    const assign = await this.findRelation(id_user, id_elections);

    if (!assign) {
      return { message: 'you are not assigned' };
    }
    await this.UserElectionsRepository.update(assign.id_user_elections, data);

    return { message: 'assign vote' };
  }
}
