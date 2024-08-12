


import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../Services/login.service";
import {Erole} from "../Models/Erole";
import {jwtDecode} from "jwt-decode";

import {LoginRequest} from "./app.login";




@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{
  loginForm!:FormGroup
  username!:string

  constructor(private srv:LoginService,private fb:FormBuilder,private route:Router , private router: Router){}
  ngOnInit(): void {

    this.loginForm=this.fb.group({
      username:'',
      password:''
    })


  }

  onSubmit() {
    if (this.loginForm.valid) {
      const person:LoginRequest  = this.loginForm.value;
      this.srv.Login(person).subscribe({
        next: (res: any) => {

          let result = JSON.stringify(res.token)
          localStorage.setItem('jwt', (result.substring(1,result.length-1)));

          const decodedToken: any = jwtDecode(res.token);
          const roleMap = decodedToken.role
          console.log("dkheeeeeeeeeeeeeel")
          console.log(decodedToken)
          console.log(roleMap)
          if (decodedToken.role.includes(Erole.ADMIN)) {
            this.router.navigate(['/admin']);
          }else if (decodedToken.role.includes(Erole.TECHNICIEN)) {
            this.router.navigate(['/technicien']);
          }
          else if (decodedToken.role.includes(Erole.USER)){
            console.log("useeeeeeeeeeeerf")
            this.router.navigate(['/user']);
          }
        },
        error: (err) => {
          alert(this.username = 'Login failed , try again.');
          console.error('Login error:', err);
        }
      });
    } else {
      this.username = 'all required fields.';
      console.log('Form is invalid.');
    }
  }
}
