export interface Prestamo {
    _id?: string;
    prestamoId?: number,
    pedidoId: number,
    fechaInicio: Date,
    fechaFin: Date,
    fechaDevolucion?: Date,
    estado: number,
    adminId?: String
}