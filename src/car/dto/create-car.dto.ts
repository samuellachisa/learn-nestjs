import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;
  @IsString()
  @ApiProperty()
  readonly brand: string;
  @ApiProperty()
  @IsString()
  readonly color: string;
}
