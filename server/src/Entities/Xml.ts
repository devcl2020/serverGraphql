import {BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Emitidos} from "./Emitidos";
import {Field} from "mysql2";

@Entity()
export class Xml extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    idemitidos!: number;

    @Column()
    tipodte!: string;

    @Column()
    folio!: string;

    @Column()
    xml!: string;


}
