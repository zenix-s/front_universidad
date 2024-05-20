import { TipoConvenio, EstadoMatriculacion } from "./interfaces.entity";


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
