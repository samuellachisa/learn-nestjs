import { Injectable } from '@nestjs/common';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  private car: Car[] = [
    {
      id: 1,
      name: 'TOYOTA MX2',
      color: 'Black',
      brand: 'TOYOTA',
    },
    {
      id: 2,
      name: 'TOYOTA MX4',
      color: 'Black',
      brand: 'TOYOTA',
    },
    {
      id: 3,
      name: 'TOYOTA MX6',
      color: 'Black',
      brand: 'TOYOTA',
    },
    {
      id: 4,
      name: 'VW ID6',
      color: 'SILVER',
      brand: 'Vols',
    },
  ];

  findll() {
    return this.car;
  }
  findOne(id: string) {
    return this.car.find((item) => item.id === +id);
  }
  create(createCarDto: any) {
    this.car.push(createCarDto);
  }
  update(id: string, updateCarDto: any) {
    const existingCar = this.findOne(id);
    if (existingCar) {
    }
  }
  remove(id: string) {
    const carIndex = this.car.findIndex((item) => item.id === +id);
    if (carIndex >= 0) {
      this.car.splice(carIndex, 1);
    }
  }
}
