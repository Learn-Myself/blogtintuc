import {Connection} from 'mongoose';
import {ProductSchema} from './Schema/product.schema';

export const productsProviders = [{
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection): any => connection.model('Product', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
}];
