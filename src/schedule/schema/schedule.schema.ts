// src/schedule/schemas/schedule.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'schedules',
  timestamps: true,
})
export class Schedule extends Document {
  @Prop({ required: true })
  activity_name: string;

  @Prop({ required: true })
  activity_time: Date;

  @Prop({ required: true })
  activity_location: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
