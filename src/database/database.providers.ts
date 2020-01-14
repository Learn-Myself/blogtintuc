import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<mongoose.Mongoose> => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost:27017/simplecrud');
        },
    },
];
