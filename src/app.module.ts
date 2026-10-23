import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { PrismaModule } from './prisma/prisma.module';
import { GenerateModule } from './generate/generate.module';
import { ConfigModule } from '@nestjs/config';
import { PedidoModule } from './pedido/pedido.module';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ConfigModule.forRoot ({
      isGlobal: true,
      envFilePath: ' .env'
    }),
    
    ProductosModule,
    PrismaModule,
    GenerateModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
