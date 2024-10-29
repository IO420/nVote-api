import { Test, TestingModule } from '@nestjs/testing';
import { UserElectionsService } from './user_elections.service';

describe('UserElectionsService', () => {
  let service: UserElectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserElectionsService],
    }).compile();

    service = module.get<UserElectionsService>(UserElectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
