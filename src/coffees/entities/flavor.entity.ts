import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Coffee, // type => Coffee, because it's the target entity
    coffee => coffee.flavors, // the name of the property on the target entity
  )
  coffees: Coffee[];
}
