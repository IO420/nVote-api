import { User_elections } from "src/user_elections/entity/user_elections.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => User_elections, userElection => userElection.user)
    userElections: User_elections[];

} 