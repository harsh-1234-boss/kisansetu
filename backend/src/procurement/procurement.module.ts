import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Procurement, ProcurementSchema } from './procurement.schema';
import { ProcurementController } from './procurement.controller';
import { ProcurementService } from './procurement.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Procurement.name,
        schema: ProcurementSchema,
      },
    ]),
  ],
  controllers: [ProcurementController],
  providers: [ProcurementService],
})
export class ProcurementModule {}