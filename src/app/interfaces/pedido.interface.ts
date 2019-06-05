export interface Pedido {
    _id?: string;
    pedidoId?: number;
    usuarioId: string;
    itemId: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: number;
    adminId?: string;
    tipo: number;
}