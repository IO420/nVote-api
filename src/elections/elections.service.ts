import { Injectable } from '@nestjs/common';
import { Elections } from './entity/elections.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ElectionsService {
  constructor(
    @InjectRepository(Elections)
    private electionsRepository: Repository<Elections>,
  ) {}

  async createElection(data) {
    const { name } = data;
    const vote = this.electionsRepository.findOne({ where: { name } });

    if (!vote) {
      return { message: 'that name already use' };
    }

    this.electionsRepository.save(this.electionsRepository.create(data));
    return { message: 'vote register successfully' };
  }
}
