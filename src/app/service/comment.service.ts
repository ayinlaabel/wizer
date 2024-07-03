import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { IComment } from '../model/icomment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<IComment[]> {
    const url = enviroment.baseUrl + '/comments';
    return this.httpClient.get<IComment[]>(url);
  }

  getComment(id: number): Observable<IComment> {
    const url = enviroment.baseUrl + '/comments/' + id;
    return this.httpClient.get<IComment>(url);
  }

  addComment(payload: IComment): Observable<IComment> {
    const url = enviroment.baseUrl + '/comments';
    return this.httpClient.post<IComment>(url, payload);
  }
  updateComment(id: number, payload: IComment): Observable<IComment> {
    const url = enviroment.baseUrl + '/comments/' + id;
    return this.httpClient.put<IComment>(url, payload);
  }
}
