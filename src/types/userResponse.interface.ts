import { UserEntity } from '@app/user/user.entity';
import { UserType } from './user.type';

export default interface UserResponseInterface {
  user: UserType & { token: string };
}
