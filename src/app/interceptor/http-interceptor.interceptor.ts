import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/auth/login")
      &&!request.url.includes("/Contact/CreateContact")
      &&!request.url.includes("/Home/AllHome")
      &&!request.url.includes("/ResumeEducation/AllResumeEducation")
      &&!request.url.includes("/ResumeExperience/AllResumeExperience")
      &&!request.url.includes("/ResumeSkills/AllResumeSkills")
      &&!request.url.includes("/Service/AllServices")
      &&!request.url.includes("/Work/AllWork")
      &&!request.url.includes("/Home/UpdatedHome")
    ) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authService.accessToken)
      })
      return next.handle(newRequest).pipe(
        catchError(err => {
          if(err.status == 401){
            this.authService.Logout();
          }
          return throwError(() => new Error(err.message));
        })
      );
    } else
      return next.handle(request);

  }
}