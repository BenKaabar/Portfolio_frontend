import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private apiUrl = 'http://localhost:2603/Contact';
  private apiUrl = environment.apiUrl+"/Contact";

  constructor(private http:HttpClient) { }

  CreateContact(contactRequestDTO: any):Observable<string>{
    return this.http.post(`${this.apiUrl}/CreateContact`, contactRequestDTO,{
      responseType :'text'
    })
  }
  AllContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.apiUrl}/AllContact`);
  }
  deleteContact(idContact: string):Observable<string>{
    return this.http.delete(`${this.apiUrl}/DeleteContact/${idContact}`, {
      responseType: 'text'
    });
  }
}
