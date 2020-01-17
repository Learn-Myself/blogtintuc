import { Connection } from 'mongoose';
import { UserSchema } from './Schema/users.schema';

export const UserProviders = [{
  provide: 'USER_MODEL',
  useFactory: (connection: Connection) => connection.model('User', UserSchema),
  inject: ['DATABASE_CONNECTION'],
}];