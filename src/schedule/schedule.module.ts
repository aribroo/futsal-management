// src/schedule/schedule.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { Schedule, ScheduleSchema } from './schema/schedule.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
