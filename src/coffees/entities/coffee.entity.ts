import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee' in lowercase
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() // 👈 Join the 2 tables - `coffees` and `flavors`
  @ManyToMany(
    (type) => Flavor, // 👈 inverse side (can be omitted)
    (flavor) => flavor.coffees, // 👈 column name in the `Flavor` entity
    {
      cascade: true, // 👈 or optionally just insert or update ['insert']
    },
  )
  flavors: Flavor[];
}
