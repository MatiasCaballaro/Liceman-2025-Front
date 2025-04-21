import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseDTO {
  ok: boolean;
  mensaje: string;
  contenido: any;
}

@Injectable({
  providedIn: 'root'
})
export class UdemyStatisticsService {
  private baseUrl = '/api/v1/udemy/statistics';

  constructor(private http: HttpClient) { }

  getUserStatistics(email: string): Observable<ResponseDTO> {
    const params = new HttpParams().set('email', email);
    return this.http.get<ResponseDTO>(`${this.baseUrl}/activity`, { params });
  }

  getUserCourseStatistics(email: string): Observable<ResponseDTO> {
    const params = new HttpParams().set('email', email);
    return this.http.get<ResponseDTO>(`${this.baseUrl}/activity-courses`, { params });
  }
}