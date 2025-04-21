import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../model/authenticationRequest';
import { AuthenticationResponse } from '../model/authenticationResponse';
import { BASE_PATH } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationControllerService {

  constructor(private httpClient: HttpClient) {}

  public authenticate(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<AuthenticationResponse>(`${BASE_PATH}/api/v1/auth/authenticate`, authenticationRequest, { headers });
  }

  public logout(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` });
    return this.httpClient.post(`${BASE_PATH}/api/v1/auth/logout`, {}, { headers });
  }

  public refreshToken(): Observable<AuthenticationResponse> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('refreshToken')}` });
    return this.httpClient.post<AuthenticationResponse>(`${BASE_PATH}/api/v1/auth/refresh-token`, {}, { headers });
  }
}