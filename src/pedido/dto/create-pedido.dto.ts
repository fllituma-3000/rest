import { pedido_producto } from "../../generate/prisma";
export class CreatePedidoDto {
    id: number ;
    estado: string;
    cantidad: number
    productoid : number
}
