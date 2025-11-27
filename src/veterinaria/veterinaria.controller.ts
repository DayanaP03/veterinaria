import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VeterinariasService } from './veterinaria.service';
import { CreateVeterinariaDto } from './dto/create-veterinaria.dto';
import { UpdateVeterinariaDto } from './dto/update-veterinaria.dto';

@Controller('veterinarias')
export class VeterinariasController {
  constructor(private readonly veterinariasService: VeterinariasService) {}

  @Post()
  create(@Body() createVeterinariaDto: CreateVeterinariaDto) {
    return this.veterinariasService.create(createVeterinariaDto);
  }

  @Get()
  findAll() {
    return this.veterinariasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.veterinariasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVeterinariaDto: UpdateVeterinariaDto) {
    return this.veterinariasService.update(id, updateVeterinariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veterinariasService.remove(id);
  }
}
