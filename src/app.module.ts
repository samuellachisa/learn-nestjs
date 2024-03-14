import { CarModule } from './car/car.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CarModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Abcd@12345',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [CarController],
  providers: [AppService, CarService],
})
export class AppModule {}
