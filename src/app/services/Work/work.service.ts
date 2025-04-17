import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from 'src/app/models/work';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
//  private apiUrl = 'http://localhost:2603/Work';
   private apiUrl = `${environment.apiUrl}/Work`;

  constructor(private http:HttpClient) { }

  AllWorks():Observable<Work[]>{
    return this.http.get<Work[]>(`${this.apiUrl}/AllWork`);
  }
  deleteWork(idWork: string):Observable<string>{
    return this.http.delete(`${this.apiUrl}/DeleteWork/${idWork}`, {
      responseType: 'text'
    });
  }
  CreateWork(formData: FormData):Observable<string>{
    return this.http.post(`${this.apiUrl}/CreateWork`, formData,{
      responseType: 'text'
    });
  }
}
