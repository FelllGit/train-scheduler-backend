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
  ValidationPipe,
} from '@nestjs/common';
import { TrainsService } from './trains.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/role.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';
import { FindAllQueryDto } from './dto/find-all-query.dto';

@UseGuards(JwtAuthGuard)
@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainsService.create(createTrainDto);
  }

  @Get()
  findAll(
    @Query(new ValidationPipe({ transform: true })) query: FindAllQueryDto,
  ) {
    return this.trainsService.findAll(query);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrainDto: UpdateTrainDto,
  ) {
    return this.trainsService.update(id, updateTrainDto);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsService.remove(+id);
  }
}
