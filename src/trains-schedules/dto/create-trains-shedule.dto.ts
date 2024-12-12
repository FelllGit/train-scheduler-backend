import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainsSheduleDto {
  @ApiProperty({
    description: 'Train id',
  })
  @IsNotEmpty()
  @IsNumber()
  trainId: number;

  @ApiProperty({
    description: 'From station',
  })
  @IsNotEmpty()
  @IsString()
  from: string;

  @ApiProperty({
    description: 'To station',
  })
  @IsNotEmpty()
  @IsString()
  to: string;

  @ApiProperty({
    description: 'Scheduled date',
  })
  @IsNotEmpty()
  @IsString()
  scheduledDate: string;

  @ApiProperty({
    description: 'Arrival time',
  })
  @IsNotEmpty()
  @IsString()
  arrivalTime: string;
}
