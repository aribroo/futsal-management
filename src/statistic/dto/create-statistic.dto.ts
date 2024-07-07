import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsObject, IsString } from 'class-validator';
import { Position } from '../../enum/position.enum';

export class CreateStatisticDto {
  @ApiProperty()
  @IsEnum(Position)
  posisi: Position;

  @ApiProperty()
  @IsString()
  player_name: string;

  @ApiProperty()
  @IsObject()
  attack: Record<string, any>;

  @ApiProperty()
  @IsObject()
  defence: Record<string, any>;

  @ApiProperty()
  @IsObject()
  taktikal: Record<string, any>;

  @ApiProperty()
  @IsObject()
  keeper: Record<string, any>;
}
