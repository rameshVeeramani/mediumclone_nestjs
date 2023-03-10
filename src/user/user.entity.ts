import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: 'bio' })
  bio: string;

  @Column({ default: 'images' })
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hash() {
    this.password = await hash(this.password, 123);
  }
}
