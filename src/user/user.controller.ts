import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDto } from '@app/DTO/createUser.dto';
import { UserEntity } from './user.entity';
import UserResponseInterface from '@app/types/userResponse.interface';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  async createUser(
    @Body('user') c: CreateUserDto,
  ): Promise<UserResponseInterface> {
    console.log(c);
    const user = await this.userService.createUser(c);
    return this.userService.buildUserResponse(user);
  }
}
