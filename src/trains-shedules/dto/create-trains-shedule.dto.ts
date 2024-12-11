import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTrainsSheduleDto {
  @IsNotEmpty()
  @IsNumber()
  trainId: number;

  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsString()
  scheduledDate: Date;

  @IsNotEmpty()
  @IsString()
  arrivalTime: Date;
}
