import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Color } from './entities/color.entity/color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Color])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
