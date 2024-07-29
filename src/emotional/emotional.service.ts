import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Emotional } from './emotional.schema';
import { CreateEmotionalDto } from './create-emotional.dto';

@Injectable()
export class EmotionalService {
  constructor(@InjectModel(Emotional.name) private emotionalModel: Model<Emotional>) {}

  async create(createEmotionalDto: CreateEmotionalDto): Promise<Emotional> {
    const createdEmotional = new this.emotionalModel(createEmotionalDto);
    return createdEmotional.save();
  }

  async findAll(): Promise<Emotional[]> {
    return this.emotionalModel.find().exec();
  }

  async findOne(id: string): Promise<Emotional> {
    return this.emotionalModel.findById(id).exec();
  }

  async update(id: string, updateEmotionalDto: CreateEmotionalDto): Promise<Emotional> {
    return this.emotionalModel.findByIdAndUpdate(id, updateEmotionalDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Emotional> {
    return this.emotionalModel.findByIdAndDelete(id).exec();
  }
}
