import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [HomeModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
