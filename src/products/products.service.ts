import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductInterface } from './Interfaces/product.interface';
import { ProductDTO } from './DTO/create.dto';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<ProductInterface>) {
  }

  async create(productDTO: ProductDTO): Promise<ProductInterface> {
    const createProduct: ProductInterface = new this.productModel(productDTO);
    return await createProduct.save();
  }

  async getProducts(): Promise<ProductInterface[]> {
    return this.productModel.find();
  }

  async findById(id: string): Promise<ProductInterface> {
    return this.productModel.findById(id);
  }

  async update(id: string, productDTO: ProductDTO): Promise<ProductInterface> {
    return this.productModel.updateOne(this.productModel.findById(id), productDTO);
  }

  async delete(id: string): Promise<any> {
    return this.productModel.deleteOne(this.productModel.findById(id));
  }

}
