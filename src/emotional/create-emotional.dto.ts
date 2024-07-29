import { ApiProperty } from '@nestjs/swagger';

export class CreateEmotionalDto {
  @ApiProperty()
  readonly position: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly assessmentWeek: string;

  @ApiProperty()
  readonly disciplineScore: string;

  @ApiProperty()
  readonly motivationScore: string;

  @ApiProperty()
  readonly leadershipScore: string;

  @ApiProperty()
  readonly teamworkScore: string;

  @ApiProperty()
  readonly emotionalControlScore: string;

  @ApiProperty()
  readonly developmentScore: string;
}
