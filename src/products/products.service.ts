import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {ProductInterface} from './Interfaces/product.interface';
import {ProductDTO} from './DTO/create.dto';

@Injectable()
export class ProductsService {
    constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<ProductInterface>) {
    }

    async create(createProductDTO: ProductDTO): Promise<ProductInterface> {
        const createProduct: ProductInterface = new this.productModel(createProductDTO);
        return await createProduct.save();
    }

    async getProducts(): Promise<ProductInterface[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productId: string): Promise<ProductInterface>{
        const product = await this.productModel.findById(productId);
        return product;
    }

    async update(productId: string, createProductDTO: ProductDTO): Promise<ProductInterface> {
        const product = await this.productModel
            .findByIdAndUpdate(productId, createProductDTO, {new: true});
        return product;
    }

    async delete(productId: string): Promise<any> {
        const product = await this.productModel.findByIdAndDelete(productId);
        return product;
    }

}
