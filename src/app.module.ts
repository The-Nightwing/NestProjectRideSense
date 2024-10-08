import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from './bikes/entities/bike.entity';
import { BikesModule } from './bikes/bikes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bike_library.db',
      entities: [Bike],
      synchronize: true,
    }),
    BikesModule,
  ],
})
export class AppModule {}
