import { Injectable, UseGuards } from '@nestjs/common';
import { Elections } from './entity/elections.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Authguard } from 'src/guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';

@Injectable()
export class ElectionsService {
  constructor(
    @InjectRepository(Elections)
    private electionsRepository: Repository<Elections>,
  ) {}

  getAll(){
    return this.electionsRepository.find()
  }

  async createElection(data) {
    const { name, end } = data;

    const Election = await this.electionsRepository.findOne({
      where: { name },
    });

    if (Election) {
      return { message: 'that name already use' };
    }

    const endDate = new Date(end);

    await this.electionsRepository.save(
      this.electionsRepository.create({
        ...data,
        begin: new Date(),
        end: endDate,
      }),
    );
    return { message: 'vote register successfully' };
  }
}
