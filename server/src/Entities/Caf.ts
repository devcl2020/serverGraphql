import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Caf extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    rutEmisor!: string;

    @Column()
    tipoDoc!: string;

    @Column()
    cafSTR!: string;

    @Column()
    privateKey!: string;

    @Column()
    publicKey!: string;

    @Column()
    desde!: string;

    @Column()
    hasta!: string;

    @Column()
    actual!: string;

    @Column()
    fechaAut!: string;

    @Column()
    estado!: string;

    @Column()
    RE!: string;

    @Column()
    RS!: string;

    @Column()
    TD!: string;

    @Column()
    D!: string;

    @Column()
    H!: string;

    @Column()
    TA!: string;

    @Column()
    M!: string;

    @Column()
    E!: string;

    @Column()
    IDK!: string;

    @Column()
    FRMA!: string;


}
