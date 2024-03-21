import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
// export const LocationSchema = new mongoose.Schema({
//   type: {
//     type: Array,
//     enum: ['Point'],
//     required: true,
//   },
//   coordinates: {
//     type: [Number],
//     required: true,
//   },
// });
@Schema({
  timestamps: true,
})
export class Stores {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  evaluate: number;

  @Prop({ type: Array })
  location: {
    type: any;
    // coordinates: [number, number];
  };
}

export const StoresSchema = SchemaFactory.createForClass(Stores);
