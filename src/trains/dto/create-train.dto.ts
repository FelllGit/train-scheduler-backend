import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainDto {
  @ApiProperty({
    description: 'Train name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
