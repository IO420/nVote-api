import { Repository } from 'typeorm';
import { User_elections } from './entity/user_elections.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserElectionsService {
  constructor(
    @InjectRepository(User_elections)
    private UserElectionsRepository: Repository<User_elections>,
  ) {}

  getAll(){
    return this.UserElectionsRepository.find({order:{id_user_elections:'DESC'}})
  }

  async createAssignament(data){
    const { id_user, id_elections } = data;

    const assign = await this.UserElectionsRepository.findOne({ where:{ id_user,id_elections}})

    if(assign){
      return{message:'that assignacion has already been made'}
    }

    this.UserElectionsRepository.save(this.UserElectionsRepository.create(assign))

    return{message: 'assign vote'}
  }

}
