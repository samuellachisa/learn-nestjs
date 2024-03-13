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
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Car')
@Controller('Car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @Get()
  findAll(): Car[] {
    return this.carService.findll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    console.log('dto', createCarDto);
    return this.carService.create(createCarDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carService.remove(id);
  }
}
