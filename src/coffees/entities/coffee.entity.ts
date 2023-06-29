import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() // 👈 Join the 2 tables - `coffees` and `flavors`
  @ManyToMany(
    (type) => Flavor, // 👈 inverse side (can be omitted)
    (flavor) => flavor.coffees, // 👈 column name in the `Flavor` entity
  )
  flavors: string[];
}
