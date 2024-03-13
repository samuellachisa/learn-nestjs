import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  readonly name?: string;
  readonly brand?: string;
  readonly color?: string;
}
