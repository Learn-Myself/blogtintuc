import { IsNotEmpty } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public price: number;
}
