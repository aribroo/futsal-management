import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmotionalService } from './emotional.service';
import { CreateEmotionalDto } from './create-emotional.dto';
import { Emotional } from './emotional.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('emotional')
@Controller('emotional')
export class EmotionalController {
  constructor(private readonly emotionalService: EmotionalService) {}

  @ApiOperation({ summary: 'Create emotional assessment' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: Emotional })
  @Post()
  async create(@Body() createEmotionalDto: CreateEmotionalDto): Promise<Emotional> {
    return this.emotionalService.create(createEmotionalDto);
  }

  @ApiOperation({ summary: 'Get all emotional assessments' })
  @ApiResponse({ status: 200, description: 'Return all assessments.', type: [Emotional] })
  @Get()
  async findAll(): Promise<Emotional[]> {
    return this.emotionalService.findAll();
  }

  @ApiOperation({ summary: 'Get emotional assessment by id' })
  @ApiResponse({ status: 200, description: 'Return the assessment.', type: Emotional })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Emotional> {
    return this.emotionalService.findOne(id);
  }

  @ApiOperation({ summary: 'Update emotional assessment by id' })
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: Emotional })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEmotionalDto: CreateEmotionalDto): Promise<Emotional> {
    return this.emotionalService.update(id, updateEmotionalDto);
  }

  @ApiOperation({ summary: 'Delete emotional assessment by id' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted.', type: Emotional })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Emotional> {
    return this.emotionalService.remove(id);
  }
}
