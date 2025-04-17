import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeEducation } from 'src/app/models/ResumeEducation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeEducationService {
  // private apiUrl = 'http://localhost:2603/ResumeEducation';
  private apiUrl = `${environment.apiUrl}/ResumeEducation`;

  constructor(private http:HttpClient) { }

  CreateResumeEducation(ResumeEducationRequestDTO: any):Observable<string>{
    return this.http.post(`${this.apiUrl}/CreateResumeEducation`, ResumeEducationRequestDTO,{
      responseType :'text'
    })
  }
  AllResumeEducation():Observable<ResumeEducation[]>{
    return this.http.get<ResumeEducation[]>(`${this.apiUrl}/AllResumeEducation`);
  }
  DeleteResumeEducation(idResumeEducation: string):Observable<string>{
    return this.http.delete(`${this.apiUrl}/DeleteResumeEducation/${idResumeEducation}`, {
      responseType: 'text'
    });
  }
}
