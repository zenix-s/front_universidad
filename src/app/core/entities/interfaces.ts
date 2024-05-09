interface Alumno {
  numeroExpediente: string;
  nombre: string;
  apellidos: string;
  documentoIdentidad: string;
  fechaNacimiento: Date;
  nacionalidad: string;
  direccion: string;
  sexo: string;
  tipoConvenio: 'propio' | 'extranjero';
  estadoMatriculacion: 'Activo' | 'Prematrícula' | 'Anulada';
}

interface Matricula {
  numeroMatricula: string;
  estadoMatriculacion: 'Activo' | 'Prematrícula' | 'Anulada';
  fechaMatriculacion: Date;
  universidad: string;
  campus: string;
  titulacion: string;
}

interface Asignatura {
  nombre: string;
  creditos: number;
  titulacion: string;
}

interface Universidad {
  nombre: string;
}

interface Campus {
  nombre: string;
  universidad: string;
}

interface Titulacion {
  nombre: string;
}
