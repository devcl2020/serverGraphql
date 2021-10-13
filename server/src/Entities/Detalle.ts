import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Detalle extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    dte_id!: number;

    @Column()
    nombreitem!: string;

    @Column()
    cantidad!: string;

    @Column()
    precio!: string;

    @Column()
    montoitem!: string;

}
