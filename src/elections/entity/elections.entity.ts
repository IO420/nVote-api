import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'elections'} )
export class Elections{

    @PrimaryGeneratedColumn()
    id_elections:number

    @Column({type:"varchar",nullable:false})
    name:string

    @Column({type:"date",nullable:false})
    begin:Date

    @Column({type:"date",nullable:false})
    end:Date
    
} 