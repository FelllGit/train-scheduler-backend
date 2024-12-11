import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { config as dotenvConfig } from 'dotenv';
import { JwtStrategy } from './jwt.strategy';

dotenvConfig({ path: '.env' });
const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRATION;
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: secret,
      signOptions: { expiresIn: expiresIn },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
