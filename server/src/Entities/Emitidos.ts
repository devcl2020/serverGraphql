import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Xml} from "./Xml";

@Entity()
export class Emitidos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tipodoc!: string;

    @Column()
    folio!: string;

    @Column()
    fechaemision!: Date ;

    @Column()
    indservicio!: string;

    @Column()
    rutemisor!: string;

    @Column()
    rutreceptor!: string;

    @Column()
    nombrereceptor!: string;

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

    @Column()
    idcaf!: string;

    @Column()
    xml!: string;

    @Column()
    estadosii!: string;

    @Column()
    anulado!: number;

}