export type TipoConvenio = 'propio' | 'extranjero';
export type EstadoMatriculacion = 'Activo' | 'Prematrícula' | 'Anulada';

export const listTipoConvenio: TipoConvenio[] = ['propio', 'extranjero'];
export const listEstadoMatriculacion: EstadoMatriculacion[] = [
  'Activo',
  'Prematrícula',
  'Anulada',
];

export type Genero = 'Masculino' | 'Femenino' | 'Otro' | 'Teapot';
export const listGenero: Genero[] = ['Masculino', 'Femenino', 'Otro', 'Teapot'];
