// src/schedule/dto/create-schedule.dto.ts
import { IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty({ description: 'Nama kegiatan', example: 'Meeting' })
  @IsString()
  activity_name: string;

  @ApiProperty({ description: 'Waktu kegiatan', example: '2024-07-06T09:00:00Z' })
  @IsDateString()
  activity_time: Date;

  @ApiProperty({ description: 'Lokasi kegiatan', example: 'Jakarta' })
  @IsString()
  activity_location: string;
}
