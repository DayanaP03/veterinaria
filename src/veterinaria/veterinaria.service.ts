import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veterinaria } from './veterinaria.entity';
import { CreateVeterinariaDto } from './dto/create-veterinaria.dto';
import { UpdateVeterinariaDto } from './dto/update-veterinaria.dto';

@Injectable()
export class VeterinariasService {
  constructor(
    @InjectRepository(Veterinaria)
    private readonly veterinariaRepository: Repository<Veterinaria>,
  ) {}

  create(createVeterinariaDto: CreateVeterinariaDto) {
    const veterinaria = this.veterinariaRepository.create(createVeterinariaDto);
    return this.veterinariaRepository.save(veterinaria);
  }

  findAll() {
    return this.veterinariaRepository.find();
  }

  findOne(id: string) {
    return this.veterinariaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateVeterinariaDto: UpdateVeterinariaDto) {
    const veterinaria = await this.veterinariaRepository.findOne({ where: { id } });
    if (!veterinaria) return null;
    Object.assign(veterinaria, updateVeterinariaDto);
    return this.veterinariaRepository.save(veterinaria);
  }

  async remove(id: string) {
    const veterinaria = await this.veterinariaRepository.findOne({ where: { id } });
    if (!veterinaria) return null;
    return this.veterinariaRepository.remove(veterinaria);
  }
}
