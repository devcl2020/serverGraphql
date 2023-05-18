import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Parametros extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    valor!: string;

}