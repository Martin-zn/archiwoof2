import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {


private apiUrl = 'http://localhost:8080/pet/'; 

  constructor(private http: HttpClient) {}

  getRandomNumber(): Observable<number> {
    return this.http.post<number>(this.apiUrl, {});
  }
}
