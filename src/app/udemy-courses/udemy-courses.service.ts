import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseSearchResult, Curriculum } from './udemy-courses.model';

@Injectable({
  providedIn: 'root',
})
export class UdemyCoursesService {
  private baseUrl = '/api/v1/udemy';

  constructor(private http: HttpClient) {}

  getCourses(pageNumber: number = 1, coursesQuantity: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('coursesQuantity', coursesQuantity.toString());
    return this.http.get<any>(`${this.baseUrl}/courses`, { params });
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/courses/${id}`);
  }

  getCurriculum(id: number): Observable<Curriculum> {
    return this.http.get<Curriculum>(`${this.baseUrl}/courses/${id}/curriculum`);
  }

  searchCourses(keyword: string): Observable<CourseSearchResult[]> {
    let params = new HttpParams().set('keyword', keyword);
    return this.http.get<CourseSearchResult[]>(`${this.baseUrl}/courses/search-courses`, { params });
  }

  saveCourses(coursesPerPage: number = 10): Observable<boolean> {
    let params = new HttpParams().set('coursesPerPage', coursesPerPage.toString());
    return this.http.get<boolean>(`${this.baseUrl}/courses/save-courses`, { params });
  }
}