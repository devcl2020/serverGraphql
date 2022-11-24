import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ListDistrSii extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    rut!: string;

    @Column()
    rznSocial!: string;

    @Column()
    nroResolucion!: string;

    @Column()
    mailIntercambio!: string;

    @Column()
    url!: string;


}
