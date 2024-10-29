import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'elections'} )
export class Elections{

    @PrimaryGeneratedColumn()
    id_elections:number

    @Column()
    name:string

    @Column()
    begin:Date

    @Column()
    end:Date
    
} 