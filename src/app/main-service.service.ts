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
  private subjectPlaying = new Subject<any>();

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

  getPlaying(){
    return this.subjectPlaying.asObservable();
  }

  changePlaying(state:any){ //it can be a 0 for start the spinner or the winning object
    this.subjectPlaying.next({  state });
  }

}
