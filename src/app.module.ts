import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainsModule } from './trains/trains.module';
import { TrainsShedulesModule } from './trains-shedules/trains-shedules.module';

@Module({
  imports: [UsersModule, TrainsModule, TrainsShedulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
