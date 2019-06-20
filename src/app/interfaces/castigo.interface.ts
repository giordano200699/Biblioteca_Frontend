export interface Castigo {
    _id?: String,
    castigoId?: number,
    usuarioId: String,
    prestamoId: number,
    fechaInicio: Date,
    fechaFin?: Date,
    orden: number,
    estado: number,
    ciclo: String
}