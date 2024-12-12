import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'User email',
  })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({
    description: 'User password',
  })
  @IsNotEmpty()
  @IsString({ message: 'Password must be a string' })
  password: string;
}
