import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Aspect, AspectDocument } from './schema/aspect.schema';
import { Model } from 'mongoose';

@Injectable()
export class AspectService {
  constructor(
    @InjectModel(Aspect.name)
    private aspectModel: Model<AspectDocument>,
  ) {}

  async create(createAspectDto: CreateAspectDto): Promise<Aspect> {
    const createdAspect = new this.aspectModel(createAspectDto);
    return createdAspect.save();
  }

  async findAll(): Promise<Aspect[]> {
    return this.aspectModel.find().exec();
  }

  async findOne(id: string): Promise<Aspect> {
    const res = await this.aspectModel.findById(id).exec();
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async update(id: string, updateAspectDto: UpdateAspectDto): Promise<Aspect> {
    const res = await this.aspectModel.findByIdAndUpdate(id, updateAspectDto, {
      new: true,
    }).exec();
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async remove(id: string): Promise<Aspect> {
    const res = await this.aspectModel.findByIdAndDelete(id).exec();
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }
}
