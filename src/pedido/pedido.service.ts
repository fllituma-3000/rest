import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService){}

  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.producto
      .findUnique({
        where: { id: createPedidoDto.productoid },
      })
      .then((producto) => {
        if (!producto) {
          throw new UnprocessableEntityException('El producto no existe');
        }

        if (createPedidoDto.cantidad > producto.stock) {
          throw new UnprocessableEntityException('La cantidad supera el inventario');
        }

        return this.prisma.pedido.create({
          data: {
            estado: createPedidoDto.estado,
            cantidad: createPedidoDto.cantidad,
            productoid: createPedidoDto.productoid,
          },
        });
      });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({ where: { id } });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido
      .update({
        where: { id },
        data: updatePedidoDto,
      })
      .catch(() => {
        throw new UnprocessableEntityException('El pedido que intenta actualizar no existe');
      });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}