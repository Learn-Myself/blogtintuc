import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put, Query,
    Render, Request,
    Res, UseGuards,
} from '@nestjs/common';
import {ProductsService} from './products.service';
import {ProductDTO} from './DTO/create.dto';
import {ProductInterface} from './Interfaces/product.interface';
import {AuthenticatedGuard} from '../common/guards/authenticated.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {
    }

    /*Get page and Render*/
    @UseGuards(AuthenticatedGuard)
    @Get('/add')
    @Render('addProduct')
    async addProduct(@Res() res: any): Promise<any> {
        return;
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/edit/:productId')
    @Render('editProduct')
    async editProduct(@Res() res: any, @Param('productId') productId: any): Promise<any> {
        const product = await this.productService.getProduct(productId);
        if (!product) {
            throw new NotFoundException('Product does not exist!');
        }
        return {product};
    }
    /* ---- End ----*/

    /*API*/
    // Add Product: /products/create
    @UseGuards(AuthenticatedGuard)
    @Post('/create')
    async create(@Res() res: any, @Body() createProduct: ProductDTO): Promise<any> {
        const product = await this.productService.create(createProduct);
        res.redirect('/products'); // Redirect on browser
        // return res.status(HttpStatus.OK).json({
        //     message: 'Product Successfully Created',
        //     product,
        // });
    }

    // Get Products: /products
    @UseGuards(AuthenticatedGuard)
    @Get('/')
    @Render('products')
    async getProducts(@Res() res: any): Promise<any> {
        console.log(res);
        const products = await this.productService.getProducts();
        // return res.status(HttpStatus.OK).json(products);
        return {products}; // return templete include data
    }

    // GET single product: /products/5c9d46100e2e5c44c444b2d1
    @UseGuards(AuthenticatedGuard)
    @Get(':productID')
    async getProduct(@Res() res: any, @Param('productID') productId: any): Promise<ProductInterface[]> {
        if (!productId) {
            throw new NotFoundException('Product does not exist!');
        }
        const product = await this.productService.getProduct(productId);
        return res.status(HttpStatus.OK).json({
            message: 'Product is Got successfully !',
            product,
        });
    }

    // Update Product: /update/5c9d45e705ea4843c8d0e8f7
    @UseGuards(AuthenticatedGuard)
    @Post('/update/:id')
    async update(@Res() res: any, @Request() req: any, @Body() updateProduct: ProductDTO): Promise<any> {
        const productId = req.params.id;
        if (!productId) {
            throw new NotFoundException('Product does not exist!');
        }
        const updatedProduct = await this.productService.update(productId, updateProduct);
        res.redirect('/products'); // Redirect on browser
        // return res.status(HttpStatus.OK).json({
        //     message: 'Product is Updated Successfully',
        //     updatedProduct,
        // });
    }

    // Delete Product: /delete/5c9d45e705ea4843c8d0e8f7
    @UseGuards(AuthenticatedGuard)
    @Get('/delete/:id')
    async delete(@Res() res: any,  @Param('id') productId: string): Promise<any> {
        if (!productId) {
            throw new NotFoundException('Product does not exist');
        }
        const product = await this.productService.delete(productId);
        res.redirect('/products'); // Redirect on browser
        // return res.status(HttpStatus.OK).json({
        //     message: 'Product is Deleted successfully',
        //     product,
        // });
    }
    /*End API*/

}
