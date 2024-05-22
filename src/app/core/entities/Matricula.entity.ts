import { EstadoMatriculacion } from "./interfaces.entity";


export interface Matricula {
	numeroMatricula: string;
  idExpediente: string;
  idTitulacion: string;
	estadoMatriculacion: EstadoMatriculacion;
	fechaMatriculacion: Date;
}
