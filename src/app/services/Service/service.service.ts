import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
//  private apiUrl = 'http://localhost:2603/Service';
  private apiUrl = `${environment.apiUrl}/Service`;

  constructor(private http:HttpClient) { }

  AllServices():Observable<Service[]>{
    return this.http.get<Service[]>(`${this.apiUrl}/AllServices`);
  }
}
