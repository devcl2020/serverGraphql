import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menuprincipal extends BaseEntity {
    @PrimaryGeneratedColumn()
    idmenu!: number;

    @Column()
    nombre!: number;

    @Column()
    ruta!: string;

    @Column()
    tag!: string;

    @Column()
    screenappowner!: string;

}
