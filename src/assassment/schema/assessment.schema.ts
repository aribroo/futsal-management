import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as schemaObject } from 'mongoose';
import { Position } from '../../enum/position.enum';

@Schema({
  collection: 'assessment',
  strict: 'throw',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Assessment extends Document {
  @Prop()
  posisi: Position;

  @Prop()
  player_name: string;

  @Prop()
  aspect_name: string;

  @Prop({ type: [schemaObject.Types.Mixed] })
  aspect: Array<Record<string, any>>;

  @Prop({ type: Date })
  date: Date;
}

export type AssessmentDocument = HydratedDocument<Assessment>;

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
