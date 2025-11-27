import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeterinariasService } from './veterinaria.service';
import { VeterinariasController } from './veterinaria.controller';
import { Veterinaria } from './veterinaria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Veterinaria])],
  controllers: [VeterinariasController],
  providers: [VeterinariasService],
})
export class VeterinariasModule {}
