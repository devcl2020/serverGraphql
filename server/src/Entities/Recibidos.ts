import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Xml} from "./Xml";

@Entity()
export class Recibidos extends BaseEntity {

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
    nombreemisor!: string;

    @Column()
    montoneto!: string;

    @Column()
    tasaiva!: string;

    @Column()
    iva!: string;

    @Column()
    montototal!: string;

    @Column()
    estado!: number;

    @Column()
    xml!: string;

    @Column()
    estadosii!: string;

}