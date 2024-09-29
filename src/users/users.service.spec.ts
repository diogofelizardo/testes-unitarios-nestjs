import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
      ];
      jest.spyOn(repository, 'findAll').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
    });

    it('should throw an error if repository.findAll fails', async () => {
      const errorMessage = 'Failed to fetch users';
      jest.spyOn(repository, 'findAll').mockRejectedValue(new Error(errorMessage));

      await expect(service.findAll()).rejects.toThrow(errorMessage);
    });
  });

  describe('create', () => {
    it('should create and return a new user', async () => {
      const newUser: User = { id: 2, name: 'Jane Doe', email: 'jane@example.com' };
      jest.spyOn(repository, 'create').mockResolvedValue(newUser);

      expect(await service.create(newUser)).toBe(newUser);
    });

    it('should throw an error if repository.create fails', async () => {
      const errorMessage = 'Failed to create user';
      const newUser: User = { id: 3, name: 'Alice Doe', email: 'alice@example.com' };
      jest.spyOn(repository, 'create').mockRejectedValue(new Error(errorMessage));

      await expect(service.create(newUser)).rejects.toThrow(errorMessage);
    });
  });
});