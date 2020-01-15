import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductInterface } from './Interfaces/product.interface';
import { ProductDTO } from './DTO/create.dto';

@Injectable()
export class ProductsService {
    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<ProductInterface>) {
    }

    async create(createProductDTO: ProductDTO): Promise<ProductInterface> {
        const createProduct: ProductInterface = new this.productModel(createProductDTO);
        return await createProduct.save();
    }

    async getProducts(): Promise<ProductInterface[]> {
        return this.productModel.find();
    }

    async getProduct(productId: string): Promise<ProductInterface>{
        return this.productModel.findById(productId);
    }

    async update(productId: string, createProductDTO: ProductDTO): Promise<ProductInterface> {
        return this.productModel.updateOne(this.productModel.findById(productId), createProductDTO);
    }

    async delete(productId: string): Promise<any> {
        return this.productModel.deleteOne(this.productModel.findById(productId));
    }

}
