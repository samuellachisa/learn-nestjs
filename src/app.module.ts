import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { Car } from './car/entities/car.entity'; // Import Car entity

@Module({
  imports: [
    CarModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Abcd@12345',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Car]),
  ],
  controllers: [CarController],
  providers: [AppService, CarService],
})
export class AppModule {}
