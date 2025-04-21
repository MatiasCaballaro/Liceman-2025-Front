export interface TrainingCreationRequestDTO {
  area: 'BACKEND' | 'FRONTEND' | 'DEVOPS' | 'DATA' | 'SALESFORCE';
  title: string;
  comment: string;
}

export interface UpdateTrainingByUserDTO {
  status: 'PENDING_MENTOR' | 'PENDING_USER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'FINISHED';
}

export interface UpdateTrainingByMentorDTO {
  days?: number;
  link?: string;
  comment?: string;
  status: 'PENDING_MENTOR' | 'PENDING_USER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'FINISHED';
}

export interface UpdateTrainingByAdminDTO {
  status: 'PENDING_MENTOR' | 'PENDING_USER' | 'PENDING_ADMIN' | 'APPROVED' | 'REJECTED' | 'FINISHED';
}

export interface ResponseDTO {
  ok: boolean;
  mensaje: string;
  contenido: any; 
}