import {Controller, Get, Post, Request, Res, Render, UseGuards} from '@nestjs/common';
import {Response} from 'express';

import {LoginGuard} from './common/guards/login.guard';
import {AuthenticatedGuard} from './common/guards/authenticated.guard';

@Controller()
export class AppController {

    @Get('/')
    @Render('login')
    index(): any {
    }

    @UseGuards(LoginGuard)
    @Post('/login')
    login(@Res() res: Response): any {
        res.redirect('/products');
    }

    @Get('/logout')
    logout(@Request() req: any, @Res() res: Response): any {
        req.logout();
        res.redirect('/');
    }
}
