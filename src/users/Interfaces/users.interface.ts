import { Document } from 'mongoose';

export interface UsersInterface extends Document {
  readonly username: string;
  readonly password: string;
}