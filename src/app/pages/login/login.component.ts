import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {FakeLoadingService} from "../../shared/services/fake-loading.service";
import {Observable, Subscription} from "rxjs";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) {
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe()
  }
  /*login() {
    this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      console.log("correct password")
      this.router.navigateByUrl('/home')
    }).catch(error => {
      console.log("error")
    }).finally(() => {
      console.log("done")
    })
  }*/

  /*async login() {
    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value)
    this.loadingSubscription = this.loadingObservation.subscribe(
      {
        next: (data: boolean) => {
          this.router.navigateByUrl('/home')
        }, error: (error) => {

        }, complete: () => {}
    })
  }*/
  async login() {
    if(this.email.value && this.password.value) {
      this.authService.login(this.email.value, this.password.value).then(cred => {
        this.router.navigateByUrl('/home')
      }).catch(error => {
        //error
      });
    }
  }
}
