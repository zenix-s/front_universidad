// enum TipoConvenio {
//   Propio = 'propio',
//   Extranjero = 'extranjero',
// }
export type TipoConvenio = 'propio' | 'extranjero';
export type EstadoMatriculacion = 'Activo' | 'Prematrícula' | 'Anulada';

export const listTipoConvenio: TipoConvenio[] = ['propio', 'extranjero'];
export const listEstadoMatriculacion: EstadoMatriculacion[] = ['Activo', 'Prematrícula', 'Anulada'];

export interface Alumno {
  numeroExpediente: string;
  nombre: string;
  apellidos: string;
  documentoIdentidad: string;
  fechaNacimiento: Date;
  nacionalidad: string;
  direccion: string;
  sexo: string;
  tipoConvenio: TipoConvenio;
  estadoMatriculacion: EstadoMatriculacion;
}

export interface Matricula {
  numeroMatricula: string;
  estadoMatriculacion: EstadoMatriculacion;
  fechaMatriculacion: Date;
  universidad: string;
  campus: string;
  titulacion: string;
}

export interface Asignatura {
  nombre: string;
  creditos: number;
  titulacion: string;
}

export interface Universidad {
  nombre: string;
}

export interface Campus {
  nombre: string;
  universidad: string;
}

export interface Titulacion {
  nombre: string;
}
