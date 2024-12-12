import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TrainsService } from './trains.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainsService.create(createTrainDto);
  }

  @Get()
  findAll(@Query('name') name: string) {
    return this.trainsService.findAll(name);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrainDto: UpdateTrainDto,
  ) {
    return this.trainsService.update(id, updateTrainDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsService.remove(+id);
  }
}
