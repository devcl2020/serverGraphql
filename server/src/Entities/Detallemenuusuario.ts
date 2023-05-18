import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Detallemenuusuario extends BaseEntity {
    @PrimaryGeneratedColumn()
    idmenu!: number;

    @Column()
    idusuario!: string;


    @Column()
    rutamenu!: string;

    @Column()
    nombremenu!: string;

    @Column()
    tag!: string;

    @Column()
    screenappowner!: string;

}