import { IsNumber, IsString } from 'class-validator';

export class userElectionsDto {
  @IsNumber()
  id_user: number;

  @IsNumber()
  id_elections: number;

  @IsString()
  option: string;
}
