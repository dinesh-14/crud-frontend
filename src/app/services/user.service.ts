import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _isModalSource = new BehaviorSubject({})
  isModal$ = this._isModalSource.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/getAllUsers`);
  }

  addUser(payload: object): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/users/addUser`, payload);
  }

  updateUser(payload: object): Observable<any> {
    return this.http.put(`${environment.BASE_URL}/users/updateUser`, payload);
  }

  deleteUser(payload: object): Observable<any> {
    return this.http.put(`${environment.BASE_URL}/users/deleteUser`, payload);
  }

}
