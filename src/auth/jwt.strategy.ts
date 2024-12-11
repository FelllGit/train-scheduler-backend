import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Читає токен із заголовку Authorization
      ignoreExpiration: false, // Перевіряє, чи токен не прострочений
      secretOrKey: process.env.JWT_SECRET, // Секретний ключ для перевірки токена
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOneById(payload.id);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return { userId: user.id, email: user.email }; // Передаємо ці дані в req.user
  }
}
