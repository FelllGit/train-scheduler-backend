import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllQueryDto {
  @ApiProperty({
    description: 'From station',
    required: false,
  })
  @IsOptional()
  @IsString()
  from?: string;

  @ApiProperty({
    description: 'To station',
    required: false,
  })
  @IsOptional()
  @IsString()
  to?: string;

  @ApiProperty({
    description: 'Scheduled date',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  scheduledDate?: string;

  @ApiProperty({
    description: 'Train id',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  trainId?: number;
}
