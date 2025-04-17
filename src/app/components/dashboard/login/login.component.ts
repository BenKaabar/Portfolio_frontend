import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router ){ }
  
  ngOnInit(): void {
   this.initializeLoginform();
  }

  // ********************************************************************** Login **********************************************************************
  initializeLoginform(): void {
    this.formLogin = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(){
    if(this.formLogin.valid){
      let username = this.formLogin.value.username;
      let password = this.formLogin.value.password;
      this.authService.Login(username, password).subscribe({
        next: (response : any)=> {
          this.authService.LoadProfile(response);
          this.router.navigateByUrl("/DashboardEducation")
        },
        error: (err)=>{
          console.error(err.error)
        }
      })
    } else{
      console.log("No data found")
    }
  }
}
