import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Emotional extends Document {
  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  assessmentWeek: string;

  @Prop({ required: true })
  disciplineScore: string;

  @Prop({ required: true })
  motivationScore: string;

  @Prop({ required: true })
  leadershipScore: string;

  @Prop({ required: true })
  teamworkScore: string;

  @Prop({ required: true })
  emotionalControlScore: string;

  @Prop({ required: true })
  developmentScore: string;
}

export const EmotionalSchema = SchemaFactory.createForClass(Emotional);
