import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeExperience } from 'src/app/models/ResumeExperience';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeExperienceService {
      private apiUrl = `${environment.apiUrl}/ResumeExperience`;

  constructor(private http:HttpClient) { }

  CreateResumeExperience(ResumeExperienceRequestDTO: any):Observable<string>{
    return this.http.post(`${this.apiUrl}/CreateResumeExperience`, ResumeExperienceRequestDTO,{
      responseType :'text'
    })
  }
  AllResumeExperience():Observable<ResumeExperience[]>{
    return this.http.get<ResumeExperience[]>(`${this.apiUrl}/AllResumeExperience`);
  }
  DeleteResumeExperience(idResumeExperience: string):Observable<string>{
    return this.http.delete(`${this.apiUrl}/DeleteResumeExperience/${idResumeExperience}`, {
      responseType: 'text'
    });
  }
}
