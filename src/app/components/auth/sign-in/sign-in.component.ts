import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loginError:String;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginError=null;
    this.loginForm = this.formBuilder.group({
      "userName": [null, [Validators.required]],
      "password": [null, [Validators.required, Validators.minLength(6)]],
    })
  }


  login(){
    this.userService.login(this.loginForm.value).subscribe(
      users => {
        console.log(users);
       // console.log(users[0].userName);

        if(users.length>0){
          this.loginError=null;
          this.router.navigate(['devices'])
        }
        else{
          this.loginForm.reset();
          this.loginError="Username or password is invalid.";
        }
      }
    );
  }
}
