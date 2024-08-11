import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Emotional extends Document {
  @ApiProperty()
  @Prop({ required: true })
  position: string;

  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  assessmentWeek: string;

  @ApiProperty()
  @Prop({ required: true })
  disciplineScore: string;

  @ApiProperty()
  @Prop({ required: true })
  motivationScore: string;

  @ApiProperty()
  @Prop({ required: true })
  teamworkScore: string;

  @ApiProperty()
  @Prop({ required: true })
  emotionalControlScore: string;
}

export const EmotionalSchema = SchemaFactory.createForClass(Emotional);
