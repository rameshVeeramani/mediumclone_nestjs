import { CreateUserDto } from '@app/DTO/createUser.dto';
import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '@app/config';
import UserResponseInterface from '@app/types/userResponse.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(c: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    Object.assign(newUser, c);
    console.log(newUser);
    return newUser;
    //RETURN  await this.userRepository.save(newUser);

  }

  generateJwt(u: UserEntity): string {
    return sign(
      {
        id: u.id,
        username: u.username,
        email: u.email,
      },
      JWT_SECRET,
    );
  }

  buildUserResponse(ue: UserEntity): UserResponseInterface {
    {
      return {
        user: {
          ...ue,
          token: this.generateJwt(ue),
        },
      };
    }
  }
}
