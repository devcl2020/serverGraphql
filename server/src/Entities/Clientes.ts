import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clientes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    codigointerno!: string;

    @Column()
    rutcliente!: string;

    @Column()
    razonsocial!: string;

    @Column()
    giro!: string;

    @Column()
    telefono!: string;

    @Column()
    direccion!: string;

    @Column()
    comuna!: string;

    @Column()
    ciudad!: string;

    @Column()
    contacto!: string;

    @Column()
    formapago!: string;

}
