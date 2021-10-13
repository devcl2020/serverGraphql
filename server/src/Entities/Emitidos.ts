import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Emitidos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tipodoc!: string;

    @Column()
    folio!: string;

    @Column()
    fechaemision!: string;

    @Column()
    indservicio!: string;

    @Column()
    rutemisor!: string;

    @Column()
    rutreceptor!: string;

    @Column()
    montoneto!: string;

    @Column()
    tasaiva!: string;

    @Column()
    iva!: string;

    @Column()
    montototal!: string;

    @Column()
    trackid!: string;

    @Column()
    estado!: number;

}