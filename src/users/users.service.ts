import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.create(user);
  }
}