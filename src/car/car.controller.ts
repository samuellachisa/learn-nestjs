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
  Res,
} from '@nestjs/common';
import { Car } from './entities/car.entity';

@Controller('car')
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
  create(@Body() body) {
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
