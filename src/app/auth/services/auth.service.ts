import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  onLogin(data: any): Observable<any> {
    return this._HttpClient.post('Users/Login', data);
  }

  onRegister(data: any): Observable<any> {
    return this._HttpClient.post('Users/Register', data);
  }

  verify(data: any): Observable<any> {
    return this._HttpClient.put('Users/Verify', data);
  }

  onReset(data: any): Observable<any> {
    return this._HttpClient.post('Users/Reset', data);
  }

  onForgot(data: any): Observable<any> {
    return this._HttpClient.post('Users/Reset/Request', data);
  }
}
