import { Module } from '@nestjs/common';

import { CartController } from './cart.controller';

@Module({
  controllers: [CartController],
})
export class CartModule {}
