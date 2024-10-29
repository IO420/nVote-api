import { Test, TestingModule } from '@nestjs/testing';
import { ElectionsService } from './elections.service';

describe('ElectionsService', () => {
  let service: ElectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectionsService],
    }).compile();

    service = module.get<ElectionsService>(ElectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
