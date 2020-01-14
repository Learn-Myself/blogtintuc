import {AuthGuard} from '@nestjs/passport';
import {ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
    async canActivate(context: ExecutionContext): Promise<any> {
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result;
    }
}