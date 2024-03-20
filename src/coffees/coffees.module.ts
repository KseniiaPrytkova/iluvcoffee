import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { Connection } from 'typeorm';

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     // do smth
//     return ['buddy brew', 'nescafe'];
//   }
// }

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  // providers: [CoffeesService],
  providers: [
    CoffeesService,
    {
      provide: 'COFFEE_BRANDS',
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT, // 👈
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
