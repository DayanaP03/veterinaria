import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class UpdateVeterinariaDto {

   @IsString()
   name: string;

  
    @IsString()
    origen: string;
  
    @IsString()
    destino: string;
  
    @IsString()
    fecha: Date;
  
    
    @IsNumber()
    precio: number;
}