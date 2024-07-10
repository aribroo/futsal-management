import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({
  collection: 'aspect',
  strict: 'throw',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Aspect extends Document {
  @Prop()
  assessment_aspect: string;

  @Prop()
  core_factor: number;

  @Prop()
  secondary_factor: number;
}

export type AspectDocument = HydratedDocument<Aspect>;

export const AspectSchema = SchemaFactory.createForClass(Aspect);
