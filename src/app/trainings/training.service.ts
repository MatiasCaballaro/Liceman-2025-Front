import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseDTO {
  ok: boolean;
  mensaje: string;
  contenido: any;
}

export interface TrainingCreationRequestDTO {
  area: 'BACKEND' | 'FRONTEND' | 'DEVOPS' | 'DATA' | 'SALESFORCE';
  title: string;
  comment: string;
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

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private baseUrl = '/api/v1/trainings';

  constructor(private http: HttpClient) {}

  getTrainings(pageNumber: number = 0, pageSize: number = 10, sortBy: string = 'id', orderBy: string = 'DESC'): Observable<ResponseDTO> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy)
      .set('orderBy', orderBy);

    return this.http.get<ResponseDTO>(this.baseUrl, { params });
  }

  getTrainingById(id: number): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createTraining(training: TrainingCreationRequestDTO): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(this.baseUrl, training);
  }

  updateTrainingByUser(id: number, updateData: UpdateTrainingByUserDTO): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(`${this.baseUrl}/${id}/user`, updateData);
  }

  updateTrainingByMentor(id: number, updateData: UpdateTrainingByMentorDTO): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(`${this.baseUrl}/${id}/mentor`, updateData);
  }

  updateTrainingByAdmin(id: number, updateData: UpdateTrainingByAdminDTO): Observable<ResponseDTO> {
    return this.http.put<ResponseDTO>(`${this.baseUrl}/${id}/admin`, updateData);
  }
}