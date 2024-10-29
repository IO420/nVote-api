import { Test, TestingModule } from '@nestjs/testing';
import { UserElectionsController } from './user_elections.controller';

describe('UserElectionsController', () => {
  let controller: UserElectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserElectionsController],
    }).compile();

    controller = module.get<UserElectionsController>(UserElectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
