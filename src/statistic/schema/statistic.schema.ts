import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as schemaObject } from 'mongoose';
import { Position } from '../../enum/position.enum';

@Schema({
  collection: 'statistic',
  strict: 'throw',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Statistic extends Document {
  @Prop()
  posisi: Position;

  @Prop()
  player_name: string;

  @Prop({ type: schemaObject.Types.Mixed })
  attack: Record<string, any>;

  @Prop({ type: schemaObject.Types.Mixed })
  defence: Record<string, any>;

  @Prop({ type: schemaObject.Types.Mixed })
  taktikal: Record<string, any>;

  @Prop({ type: schemaObject.Types.Mixed })
  keeper: Record<string, any>;
}

export type StatisticDocument = HydratedDocument<Statistic>;

export const StatisticSchema = SchemaFactory.createForClass(Statistic);
