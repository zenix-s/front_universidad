import { EstadoMatriculacion } from "./interfaces";


export interface Matricula {
	numeroMatricula: string;
	estadoMatriculacion: EstadoMatriculacion;
	fechaMatriculacion: Date;
	universidad: string;
	campus: string;
	titulacion: string;
}
