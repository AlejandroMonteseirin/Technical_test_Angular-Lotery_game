import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



//Main service to comunicate with betSlip
export class MainServiceService {

  constructor() { }

  public subjectBalls = new Subject<any>();
  public subjectDisable = new Subject<any>();
  public subjectPlaying = new Subject<any>();

  sendBall(number: Number) {
      this.subjectBalls.next({  number });
  }

  clearBalls() {
      this.subjectBalls.next(null);//send a null ball, that delete all balls of the betslip component
  }

  getBalls(): Observable<any> {
      return this.subjectBalls.asObservable();
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
