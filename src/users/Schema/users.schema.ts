import * as mongoose from 'mongoose';

export const UserSchema: any = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});