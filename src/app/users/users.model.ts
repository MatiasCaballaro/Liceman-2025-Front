export interface UserRequestDTO {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  role: 'USER' | 'ADMIN' | 'MENTOR';
  area: 'BACKEND' | 'FRONTEND' | 'DEVOPS' | 'DATA' | 'SALESFORCE';
  phone: string;
  hasTeams: boolean;
}

export interface ResponseDTO {
  ok: boolean;
  mensaje: string;
  contenido?: any; 
}

export interface UpdateTrainingByUserDTO {
  status: 'PENDING_MENTOR' | 'PENDING_USER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'FINISHED';
}

export interface UpdateTrainingByMentorDTO {
  days: number;
  link: string;
  comment: string;
  status: 'PENDING_MENTOR' | 'PENDING_USER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'FINISHED';
}

export interface UpdateTrainingByAdminDTO {
  status: 'PENDING_MENTOR' | 'PENDING_USER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'FINISHED';
}

export interface TrainingCreationRequestDTO {
  area: 'BACKEND' | 'FRONTEND' | 'DEVOPS' | 'DATA' | 'SALESFORCE';
  title: string;
  comment: string;
}