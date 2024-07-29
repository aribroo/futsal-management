import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmotionalDto {
  @ApiProperty({ description: 'Posisi', example: 'Anchor' })
  @IsString() 
  position: string;

  @ApiProperty({ description: 'Nama Pemain', example: 'Alfian Adi' })
  @IsString() 
  name: string;

  @ApiProperty({ description: 'Minggu Penilaian', example: 'Week 1' })
  @IsString() 
  assessmentWeek: string;

  @ApiProperty({ description: 'Nilai Disiplin', example: 'Baik' })
  @IsString() 
  disciplineScore: string;

  @ApiProperty({ description: 'Nilai Motivasi', example: 'Baik' })
  @IsString() 
  motivationScore: string;

  @ApiProperty({ description: 'Nilai', example: 'Baik' })
  @IsString() 
  leadershipScore: string;

  @ApiProperty({ description: 'Nilai', example: 'Baik' })
  @IsString() 
  teamworkScore: string;

  @ApiProperty({ description: 'Nilai', example: 'Baik' })
  @IsString() 
  emotionalControlScore: string;

  @ApiProperty({ description: 'Nilai', example: 'Baik' })
  @IsString() 
  developmentScore: string;
}
