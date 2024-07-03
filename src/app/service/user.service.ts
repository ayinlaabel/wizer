import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { IUser, IUserProps } from '../model/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUserProps[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = enviroment.baseUrl;
    return this.httpClient.get<IUserProps[]>(url + '/users');
  }

  getUser(id: number): Observable<IUserProps> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = enviroment.baseUrl;
    return this.httpClient.get<IUserProps>(url + '/users/' + id);
  }

  addNewUser(payload: IUserProps): Observable<IUserProps> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = enviroment.baseUrl;
    return this.httpClient.post<IUserProps>(url + '/users', payload);
  }

  updateUser(
    id: number | undefined,
    payload: IUserProps
  ): Observable<IUserProps> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = enviroment.baseUrl;
    return this.httpClient.put<IUserProps>(url + '/users/' + id, payload);
  }
}
