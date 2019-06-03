export interface Pedido {
    _id?: string;
    pedidoId?: number,
    usuarioId: String,
    itemId: number,
    fechaInicio: Date,
    fechaFin: Date,
    estado: number,
    adminId?: String,
    tipo: number

    
}