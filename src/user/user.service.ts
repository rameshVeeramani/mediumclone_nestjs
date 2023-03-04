import { CreateUserDto } from '@app/DTO/createUser.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const ue = await this.userRepository.findOne({
      where: { email: c.email },
    });
    if (ue) {
      throw new HttpException(
        'email not given ',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newUser = new UserEntity();
    const newobj = Object.assign(newUser, c);
    console.log(newobj);
    return newobj;
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
