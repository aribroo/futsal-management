import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmotionalDto {
  @ApiProperty({ descriptions: 'Posisi', example: 'Anchor' })
  @IsString() 
  position: string;

  @ApiProperty({ descriptions: 'Nama Pemain', example: 'Alfian Adi' })
  @IsString() 
  name: string;

  @ApiProperty({ descriptions: 'Minggu Penilaian', example: 'Week 1' })
  @IsString() 
  assessmentWeek: string;

  @ApiProperty({ descriptions: 'Nilai Disiplin', example: 'Baik' })
  @IsString() 
  disciplineScore: string;

  @ApiProperty({ descriptions: 'Nilai Motivasi', example: 'Baik' })
  @IsString() 
  motivationScore: string;

  @ApiProperty({ descriptions: 'Nilai', example: 'Baik' })
  @IsString() 
  leadershipScore: string;

  @ApiProperty({ descriptions: 'Nilai', example: 'Baik' })
  @IsString() 
  teamworkScore: string;

  @ApiProperty({ descriptions: 'Nilai', example: 'Baik' })
  @IsString() 
  emotionalControlScore: string;

  @ApiProperty({ descriptions: 'Nilai', example: 'Baik' })
  @IsString() 
  developmentScore: string;
}
