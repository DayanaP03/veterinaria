import { IsNumber, IsString } from 'class-validator';

export class CreateVeterinariaDto {
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
