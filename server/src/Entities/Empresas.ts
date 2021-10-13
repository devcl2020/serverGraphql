import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empresas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    company!: string;
    @Column()
    rutEmpresa!: string;
    @Column()
    nombre!: string;
    @Column()
    direccion!: string;
    @Column()
    acteco!: string;
    @Column()
    giro!: string;
    @Column()
    comuna!: string;
    @Column()
    ciudad!: string;
    @Column()
    dirDespacho!: string;

}
