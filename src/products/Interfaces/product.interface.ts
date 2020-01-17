import { Document } from 'mongoose';

export interface ProductInterface extends Document {
  readonly title: string;
  readonly description: string;
  readonly price: number;
}