import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User first name',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'User last name',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'User email',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'User password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
