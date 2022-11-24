import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class History extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    rutemisor!: string;

    @Column()
    tipodoc!: string;

    @Column()
    folio!: string;

    @Column()
    descripcion!: string;

    @Column()
    timestamp!: Date;

}
