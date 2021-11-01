import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
})
export class ProductsModule {}
