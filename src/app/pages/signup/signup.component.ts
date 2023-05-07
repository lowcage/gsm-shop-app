import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) {

  }

  onSubmit() {
      // @ts-ignore
      this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value as string,
          username: (this.signUpForm.get('email')?.value as string).split('@')[0],
          firstName: this.signUpForm.get('firstName')?.value as string,
          lastName: this.signUpForm.get('lastName')?.value as string
        };
        this.userService.create(user).then(_ => {
          this.router.navigateByUrl('/home');
        })
      }).catch(error => {
        console.log(error)
      })
  }

  goBack() {
    this.location.back();
  }
}
