import { User_elections } from "src/user_elections/entity/user_elections.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => User_elections, userElection => userElection.election)
    userElections: User_elections[];
    
} 