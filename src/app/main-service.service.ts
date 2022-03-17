import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



//Main service to comunicate with betSlip
export class MainServiceService {

  constructor() { }

  private subject = new Subject<any>();
  private subjectDisable = new Subject<any>();

  sendBall(number: Number) {
      this.subject.next({  number });
  }

  clearBalls() {
      this.subject.next(null);//send a null ball, that delete all balls of the betslip component
  }

  getBalls(): Observable<any> {
      return this.subject.asObservable();
  }



  maxBallsReached(): Observable<any> {
    return this.subjectDisable.asObservable();
  }
  disableMorePicks(disable: boolean) {
    console.log("disable "+disable);
    this.subjectDisable.next({  disable });
  }

}
