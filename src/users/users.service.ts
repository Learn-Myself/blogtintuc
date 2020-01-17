import { Inject, Injectable } from '@nestjs/common';
import { UsersInterface } from './Interfaces/users.interface';
import { UsersDTO } from './DTO/users.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private users;

  // constructor() {
  //     this.users = [
  //         {
  //             userId: 1,
  //             username: 'john',
  //             password: 'changeme',
  //             pet: { name: 'alfred', picId: 1 },
  //         },
  //         {
  //             userId: 2,
  //             username: 'chris',
  //             password: 'secret',
  //             pet: { name: 'gopher', picId: 2 },
  //         },
  //         {
  //             userId: 3,
  //             username: 'maria',
  //             password: 'guess',
  //             pet: { name: 'jenny', picId: 3 },
  //         },
  //     ];
  // }

  constructor(@Inject('USER_MODEL') private readonly userModel: Model<UsersInterface>) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        pet: { name: 'alfred', picId: 1 },
      },
      {
        userId: 2,
        username: 'admin',
        password: 'admin',
        pet: { name: 'gopher', picId: 2 },
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        pet: { name: 'jenny', picId: 3 },
      },
    ];
  }

  async create(usersDTO: UsersDTO): Promise<UsersInterface> {
    const user = new this.userModel(usersDTO);
    return await user.save();
  }

  async findById(username: string): Promise<UsersInterface> {
    return this.users.find(user => user.username === username);
  }

  async getUsers(): Promise<UsersInterface[]> {
    return this.userModel.find();
  }
}
