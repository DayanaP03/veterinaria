import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Veterinaria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column()
  fecha: Date;

  
  @Column()
  precio: number;
}
