import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';

export class ElectionsDto {
  @IsString()
  @ApiProperty({
    description: 'Name of the election',
    example: 'Presidential Election 2024',
  })
  name: string;

  @IsDateString()
  @ApiProperty({
    description: 'End date of the election',
    example: '2024-11-07',
  })
  end: string;
}
