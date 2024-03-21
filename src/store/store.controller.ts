import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { Stores } from './schemas/store.schema';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post()
  async createBook(
    @Body()
    store: CreateStoreDto,
  ): Promise<Stores> {
    return this.storeService.create(store);
  }

  @Get()
  async getAllBooks(): Promise<Stores[]> {
    return this.storeService.findAll();
  }

  @Get('nearby')
  async findNearbyStores(
    @Query('userLatitude') userLatitude: number,
    @Query('userLongitude') userLongitude: number,
  ) {
    return this.storeService.findNearbyStores(userLatitude, userLongitude);
  }
}
