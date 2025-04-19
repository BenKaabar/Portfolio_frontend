import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/Auth`;
  accessToken!: any;
  isAuthenticated : boolean = false;
  roles :any;
  username: any;

  constructor(private http:HttpClient, private router: Router) { }

  Login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .toString();
    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("jwt-token");
    return !!token;
  }

  LoadProfile(data: any){
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
    window.localStorage.setItem("jwt-token",this.accessToken);
  }

  Logout(){
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    localStorage.removeItem("jwt-token");
  }

  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("jwt-token");
    if(token){
      this.LoadProfile({"access-token": token});
    }
  }
}  
