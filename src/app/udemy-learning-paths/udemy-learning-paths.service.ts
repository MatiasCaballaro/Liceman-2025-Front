import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ResponseDTO {
  ok: boolean;
  mensaje: string;
  contenido: any;
}

export interface CurriculumClasses {
  title: string;
  duration: string;
}

export interface CurriculumSection {
  title: string;
  summary: string;
  curriculumClasses: CurriculumClasses[];
}

export interface Curriculum {
  summary: string;
  curriculumSections: CurriculumSection[];
}


@Injectable({
  providedIn: 'root'
})
export class UdemyLearningPathsService {
  private apiUrl = `${environment.apiUrl}/api/v1/udemy/learning-paths`;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(`${this.apiUrl}`);
  }

  getCourseById(id: number): Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(`${this.apiUrl}/${id}`);
  }
}