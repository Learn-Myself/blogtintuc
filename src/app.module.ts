import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from './products/products.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ProductsModule, CategoryModule, AuthModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
