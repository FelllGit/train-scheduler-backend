import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllQueryDto {
  @ApiProperty({
    description: 'Train name',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}
