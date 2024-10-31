import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class userElectionsDto {
  @IsNumber()
  @ApiProperty({
    description: 'User ID participating in the election',
    example: 1,
  })
  id_user: number;

  @IsNumber()
  @ApiProperty({
    description: 'Election ID the user is associated with',
    example: 1,
  })
  id_elections: number;

  @IsString()
  @ApiProperty({
    description: 'Voting option chosen by the user',
    example: 'Candidate A',
  })
  option: string;
}
