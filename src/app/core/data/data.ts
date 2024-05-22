import { Alumno } from "../entities/Alumno.entity";
import { Campus } from "../entities/Campus.entity";
import { Matricula } from "../entities/Matricula.entity";
import { Titulacion } from "../entities/Titulacion.entity";
import { Universidad } from "../entities/Universidad.entity";

export const estudiantesInfo = {
  number: 22,
}

export const estudiantes: Alumno[] = [
  {
    numeroExpediente: '24000001',
    nombre: 'Juan Pérez Gómez',
    apellidos: 'Pérez Gómez',
    documentoIdentidad: '12345678A',
    fechaNacimiento: new Date(1995, 3, 12),
    nacionalidad: 'Española',
    direccion: 'Calle Principal, 123',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000002',
    nombre: 'María García Rodríguez',
    apellidos: 'García Rodríguez',
    documentoIdentidad: '23456789B',
    fechaNacimiento: new Date(1996, 5, 25),
    nacionalidad: 'Española',
    direccion: 'Avenida Central, 456',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000003',
    nombre: 'Carlos López Martínez',
    apellidos: 'López Martínez',
    documentoIdentidad: '34567890C',
    fechaNacimiento: new Date(1997, 8, 17),
    nacionalidad: 'Española',
    direccion: 'Plaza Mayor, 789',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000004',
    nombre: 'Ana Martínez Sánchez',
    apellidos: 'Martínez Sánchez',
    documentoIdentidad: '45678901D',
    fechaNacimiento: new Date(1998, 11, 30),
    nacionalidad: 'Española',
    direccion: 'Calle Real, 012',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000005',
    nombre: 'Pedro Rodríguez López',
    apellidos: 'Rodríguez López',
    documentoIdentidad: '56789012E',
    fechaNacimiento: new Date(1999, 2, 5),
    nacionalidad: 'Española',
    direccion: 'Calle Secundaria, 345',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000006',
    nombre: 'Laura Fernández García',
    apellidos: 'Fernández García',
    documentoIdentidad: '67890123F',
    fechaNacimiento: new Date(2000, 4, 18),
    nacionalidad: 'Española',
    direccion: 'Avenida Principal, 567',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000007',
    nombre: 'Miguel Torres Martín',
    apellidos: 'Torres Martín',
    documentoIdentidad: '78901234G',
    fechaNacimiento: new Date(2001, 7, 31),
    nacionalidad: 'Española',
    direccion: 'Plaza Central, 890',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000008',
    nombre: 'Sara Sánchez Pérez',
    apellidos: 'Sánchez Pérez',
    documentoIdentidad: '89012345H',
    fechaNacimiento: new Date(2002, 10, 13),
    nacionalidad: 'Española',
    direccion: 'Calle Mayor, 901',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000009',
    nombre: 'Javier Gómez Rodríguez',
    apellidos: 'Gómez Rodríguez',
    documentoIdentidad: '90123456I',
    fechaNacimiento: new Date(2003, 1, 26),
    nacionalidad: 'Española',
    direccion: 'Avenida Real, 234',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000010',
    nombre: 'Elena Martín Sánchez',
    apellidos: 'Martín Sánchez',
    documentoIdentidad: '01234567J',
    fechaNacimiento: new Date(2004, 3, 9),
    nacionalidad: 'Española',
    direccion: 'Calle Principal, 567',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000011',
    nombre: 'Alejandro Pérez Gómez',
    apellidos: 'Pérez Gómez',
    documentoIdentidad: '12345678K',
    fechaNacimiento: new Date(2005, 5, 22),
    nacionalidad: 'Española',
    direccion: 'Avenida Central, 890',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000012',
    nombre: 'Carmen García Rodríguez',
    apellidos: 'García Rodríguez',
    documentoIdentidad: '23456789L',
    fechaNacimiento: new Date(2006, 7, 4),
    nacionalidad: 'Española',
    direccion: 'Plaza Mayor, 123',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000013',
    nombre: 'Roberto López Martínez',
    apellidos: 'López Martínez',
    documentoIdentidad: '34567890M',
    fechaNacimiento: new Date(2007, 9, 17),
    nacionalidad: 'Española',
    direccion: 'Calle Real, 456',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000014',
    nombre: 'Isabel Martínez Sánchez',
    apellidos: 'Martínez Sánchez',
    documentoIdentidad: '45678901N',
    fechaNacimiento: new Date(2008, 11, 30),
    nacionalidad: 'Española',
    direccion: 'Avenida Principal, 789',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000015',
    nombre: 'Daniel Rodríguez López',
    apellidos: 'Rodríguez López',
    documentoIdentidad: '56789012O',
    fechaNacimiento: new Date(2009, 2, 12),
    nacionalidad: 'Española',
    direccion: 'Plaza Central, 012',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000016',
    nombre: 'Lucía Fernández García',
    apellidos: 'Fernández García',
    documentoIdentidad: '67890123P',
    fechaNacimiento: new Date(2010, 4, 25),
    nacionalidad: 'Española',
    direccion: 'Calle Mayor, 345',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000017',
    nombre: 'Hugo Torres Martín',
    apellidos: 'Torres Martín',
    documentoIdentidad: '78901234Q',
    fechaNacimiento: new Date(2011, 7, 8),
    nacionalidad: 'Española',
    direccion: 'Avenida Real, 567',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000019',
    nombre: 'Marcos Gómez Rodríguez',
    apellidos: 'Gómez Rodríguez',
    documentoIdentidad: '90123456S',
    fechaNacimiento: new Date(2013, 11, 3),
    nacionalidad: 'Española',
    direccion: 'Avenida Central, 123',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  },
  {
    numeroExpediente: '24000020',
    nombre: 'Laura García Rodríguez',
    apellidos: 'García Rodríguez',
    documentoIdentidad: '01234567T',
    fechaNacimiento: new Date(2014, 1, 16),
    nacionalidad: 'Española',
    direccion: 'Plaza Mayor, 456',
    sexo: 'Femenino',
    tipoConvenio: 'extranjero',
  },
  {
    numeroExpediente: '24000021',
    nombre: 'Miguel López Martínez',
    apellidos: 'López Martínez',
    documentoIdentidad: '12345678U',
    fechaNacimiento: new Date(2015, 3, 1),
    nacionalidad: 'Española',
    direccion: 'Calle Real, 789',
    sexo: 'Masculino',
    tipoConvenio: 'propio',
  }
];

export const universidades:Universidad[] = [
  {
    id: '00001',
    nombre: 'Universidad europea de Madrid',
  },
  {
    id: '00002',
    nombre: 'Universidad de Alcalá de Henares',
  }
]

export const campus: Campus[] = [
  {
    id: '00001',
    idUniversidad: '00001',
    nombre: 'Villaviciosa de Odón',
  },
  {
    id: '00002',
    idUniversidad: '00001',
    nombre: 'Alcobendas',
  },
  {
    id: '00003',
    idUniversidad: '00002',
    nombre: 'Alcalá de Henares',
  }
]

export const titulaciones:Titulacion[] = [
  {
    id: '00001',
    nombre: 'Ingeniería Informática',
    idCampus: '00001',
  },
  {
    id: '00002',
    nombre: 'Ingeniería de Telecomunicaciones',
    idCampus: '00002',
  },
  {
    id: '00003',
    nombre: 'Ingeniería de Software',
    idCampus: '00003',
  }
]

export const matriculas: Matricula[] = [
  {
    idTitulacion: '00001',
    idExpediente: '24000001',
    numeroMatricula: '240000011',
    estadoMatriculacion: "Activo",
    fechaMatriculacion: new Date(2021, 1, 1),
  },
  {
    idTitulacion: '00002',
    idExpediente: '24000001',
    numeroMatricula: '240000012',
    estadoMatriculacion: "Anulada",
    fechaMatriculacion: new Date(2021, 1, 1),
  }
]

