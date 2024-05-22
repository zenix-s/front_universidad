import { TipoConvenio, EstadoMatriculacion } from "./interfaces.entity";
import { Genero } from "./interfaces.entity";


export interface Alumno {
	numeroExpediente: string;
	nombre: string;
	apellidos: string;
	documentoIdentidad: string;
	fechaNacimiento: Date;
	nacionalidad: string;
	direccion: string;
	sexo: Genero;
	tipoConvenio: TipoConvenio;
}
