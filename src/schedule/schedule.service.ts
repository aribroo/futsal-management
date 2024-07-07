// src/schedule/schedule.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule } from './schema/schedule.schema';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(Schedule.name) private scheduleModel: Model<Schedule>) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const createdSchedule = new this.scheduleModel(createScheduleDto);
    return createdSchedule.save();
  }

  async findAll(): Promise<Schedule[]> {
    return this.scheduleModel.find().exec();
  }

  async findOne(id: string): Promise<Schedule> {
    return this.scheduleModel.findById(id).exec();
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<Schedule> {
    return this.scheduleModel.findByIdAndUpdate(id, updateScheduleDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Schedule> {
    return this.scheduleModel.findByIdAndDelete(id).exec();
  }
}
