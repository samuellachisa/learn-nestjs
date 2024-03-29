import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  private car: Car[] = [];

  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  async findll(): Promise<Car[]> {
    const cars = await this.carRepository.find();
    return cars;
  }
  async findOne(id: string) {
    const car = await this.carRepository.findOne({ where: { id: +id } });
    if (!car) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    return car;
  }
  create(createCarDto: CreateCarDto) {
    const car = this.carRepository.create(createCarDto);
    return this.carRepository.save(car);
  }
  async update(id: string, updateCarDto: UpdateCarDto) {
    const existingCar = await this.carRepository.preload({
      id: +id,
      ...updateCarDto,
    });
    if (!existingCar) {
      throw new NotFoundException(`Car #${id} not found`);
    } else {
      return this.carRepository.save(existingCar);
    }
  }
  remove(id: string) {
    const carIndex = this.car.findIndex((item) => item.id === +id);
    if (carIndex >= 0) {
      this.car.splice(carIndex, 1);
    }
  }
}
