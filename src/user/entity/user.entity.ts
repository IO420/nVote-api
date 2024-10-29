import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User{
    @PrimaryGeneratedColumn()
    id_user:number

    @Column({type:'varchar', nullable:false})
    name:string

    @Column({type:'varchar', nullable:false})
    password:string

    @Column({type:'int', nullable:false})
    type:number

} 