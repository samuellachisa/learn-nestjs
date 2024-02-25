import { CarService } from './car.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Car } from './entities/car.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from './dto/create-car.dto';
@Controller('car')
@ApiTags('Car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @Get()
  findAll(): Car[] {
    return this.carService.findll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.GONE)
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }
  @Post()
  create(@Body() body: CreateCarDto) {
    return this.carService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.carService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carService.remove(id);
  }
}
