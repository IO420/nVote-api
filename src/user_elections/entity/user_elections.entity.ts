import { Elections } from 'src/elections/entity/elections.entity';
import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_elections' })
export class User_elections {
  @PrimaryGeneratedColumn()
  id_user_elections: number;

  @Column({ type: 'int', nullable: false })
  id_user: number;

  @Column({ type: 'int', nullable: false })
  id_elections: number;

  @Column({ type: 'varchar', nullable: true })
  option: string;

  @ManyToOne(() => User, (user) => user.userElections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_user', referencedColumnName: 'id_user' })
  user: User;

  @ManyToOne(() => Elections, (election) => election.userElections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_elections', referencedColumnName: 'id_elections' })
  election: Elections;
}
