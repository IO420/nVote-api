import { Elections } from 'src/elections/entity/elections.entity';
import { User } from 'src/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  user: User;

  @ManyToOne(() => Elections, (election) => election.userElections, {
    onDelete: 'CASCADE',
  })
  election: Elections;
}
