export interface Item {
    _id?: string;
    numeroIngreso: string;
    codigoBarra: string;
    numeroCopia: number;
    volumen: number;
    modoAdquisicion: string;
    fuenteAdquisicion: string;
    precioAdquisicion: string;
    fechaAdquisicion: string;
    disponibilidad: number;
    tipoImpresion: number;
    lugarPublicacion: string;
    standId: number;
    itemId: number;
    libroId?: number;
    __v?: number;
}
