export interface User {
  _id?: string;
  dni: string;
  nombres: string;
  apellidos: string;
  edad: number;
  sexo: boolean;
  estado: number;
  codigo?: string;
  correoInstitucional: string;
  correoPersonal ?: string;
  escuelaId ?: string;
  telefonoCasa ?: string;
  telefonoMovil ?: string;
  direccion ?: string;
  imagenId?: string;
  contrasenia: string;
  tipoUsuarioId: number;
}
