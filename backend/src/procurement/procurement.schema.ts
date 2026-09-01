import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProcurementDocument = HydratedDocument<Procurement>;

export enum ProcurementStatus {
  SUBMITTED = 'submitted',
  QUALITY_CHECK = 'quality_check',
  PAYMENT = 'payment',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
}

@Schema({ timestamps: true })
export class Procurement {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  farmerId: Types.ObjectId;

  @Prop({ required: true })
  crop: string;

  @Prop({ required: true, min: 0 })
  quantity: number;

  @Prop({ required: true })
  procurementCentre: string;

  @Prop()
  estimatedValue: number;

  @Prop({
    type: String,
    enum: ProcurementStatus,
    default: ProcurementStatus.SUBMITTED,
  })
  status: ProcurementStatus;

  @Prop()
  submittedAt: Date;

  @Prop()
  qualityCheckAt?: Date;

  @Prop()
  completedAt?: Date;
}

export const ProcurementSchema =
  SchemaFactory.createForClass(Procurement);