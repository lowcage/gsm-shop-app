import { Injectable } from '@angular/core';
import {interval, Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  loadingWithPromise(email: string | null, password: string | null) : Promise<boolean>{
    return new Promise((resolve, reject) => {
      let i = 0;
      const interval = setInterval(() => {
        i++
        if (i == 3) {
            clearInterval(interval);
            if(email === 'asd@gmail.com' && password === 'asd') {
              resolve(true);
            } else {
              reject(false);
            }
          }
      }, 1000);
    });
  }

  loadingWithObservable(email: string | null, password: string | null): Observable<boolean> {
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        //subscriber.next(i);
        if (i === 3) {
          if(email === 'asd@gmail.com' && password === 'asd') {
            subscriber.next(true);
            subscriber.complete();
          } else {
            subscriber.error(false)
          }
        }
      }, 1000)
    })
  }
}
