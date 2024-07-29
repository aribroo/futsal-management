import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmotionalService } from './emotional.service';
import { CreateEmotionalDto } from './create-emotional.dto';
import { Emotional } from './emotional.schema';

@Controller('emotional')
export class EmotionalController {
  constructor(private readonly emotionalService: EmotionalService) {}

  @Post()
  async create(@Body() createEmotionalDto: CreateEmotionalDto): Promise<Emotional> {
    return this.emotionalService.create(createEmotionalDto);
  }

  @Get()
  async findAll(): Promise<Emotional[]> {
    return this.emotionalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Emotional> {
    return this.emotionalService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEmotionalDto: CreateEmotionalDto): Promise<Emotional> {
    return this.emotionalService.update(id, updateEmotionalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Emotional> {
    return this.emotionalService.remove(id);
  }
}
