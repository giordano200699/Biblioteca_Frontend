export interface Libro {
    _id?: string;
    titulo: string;
    tituloSecundario: string;
    clasificacion: string;
    anio: number;
    edicion: number;
    resumen: string;
    capitulos: string;
    isbn: string;
    extension: number;
    observaciones: string;
    dimensiones: string;
    acompaniamiento: string;
    palabrasClaves: string;
    tomo: number;
    libroId?: number;
    __v?: number;
}