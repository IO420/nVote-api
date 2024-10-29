import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user_elections'} )
export class User_elections{

    @PrimaryGeneratedColumn()
    id_user_elections:number

    @Column({type:'int',nullable:false})
    id_user:number

    @Column({type:'int',nullable:false})
    id_elections:number
    
    @Column({type:'varchar',nullable:false})
    option:string


} 