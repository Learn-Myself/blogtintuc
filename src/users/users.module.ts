import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProviders } from './users.provider';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService, ...UserProviders],
})
export class UsersModule {
}
