import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import c from './ormconfig';
import { UserModule } from '@app/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(c.config), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
