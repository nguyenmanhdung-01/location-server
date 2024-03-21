import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stores } from './schemas/store.schema';
import mongoose from 'mongoose';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Stores.name)
    private storesModel: mongoose.Model<Stores>,
  ) {}

  async create(store: Stores): Promise<Stores> {
    const data = Object.assign(store);

    const res = await this.storesModel.create(data);
    return res;
  }

  async findAll(): Promise<Stores[]> {
    // const resPerPage = 2;
    // const currentPage = Number(query.page) || 1;
    // const skip = resPerPage * (currentPage - 1);

    // const keyword = query.keyword
    //   ? {
    //       title: {
    //         $regex: query.keyword,
    //         $options: 'i',
    //       },
    //     }
    //   : {};

    const stores = await this.storesModel.find();

    return stores;
  }

  async findNearbyStores(userLatitude: number, userLongitude: number) {
    const nearbyStores = await this.storesModel
      .find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [userLongitude, userLatitude],
            },
            $maxDistance: 1000, // Đơn vị: mét, ở đây là 10km
          },
        },
      })
      .exec();

    return nearbyStores;
  }
}
