import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersRepository {
  private users: User[] = [];

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }
}