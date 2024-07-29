import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmotionalController } from './emotional.controller';
import { EmotionalService } from './emotional.service';
import { Emotional, EmotionalSchema } from './emotional.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Emotional.name, schema: EmotionalSchema }])],
  controllers: [EmotionalController],
  providers: [EmotionalService],
})
export class EmotionalModule {}
