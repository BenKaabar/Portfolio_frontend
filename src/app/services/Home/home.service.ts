import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from 'src/app/models/Home';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = `${environment.apiUrl}/Home`;

  constructor(private http:HttpClient) { }

  AllHome():Observable<Home[]>{
    return this.http.get<Home[]>(`${this.apiUrl}/AllHome`);
  }
}
