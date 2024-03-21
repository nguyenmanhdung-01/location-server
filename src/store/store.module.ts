import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresSchema } from './schemas/store.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Stores', schema: StoresSchema }]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
