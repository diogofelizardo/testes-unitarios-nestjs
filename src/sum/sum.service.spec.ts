import { Test, TestingModule } from '@nestjs/testing';
import { SumService } from './sum.service';

describe('SumService', () => {
  let service: SumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumService],
    }).compile();

    service = module.get<SumService>(SumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the sum of two numbers', () => {
    expect(service.sum(2, 3)).toBe(5);
    expect(service.sum(-1, 1)).toBe(0);
  });
});