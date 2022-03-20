import { async, TestBed, waitForAsync } from '@angular/core/testing';

import { MainServiceService } from './main-service.service';

describe('MainServiceService', () => {
  let service: MainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Send a ball to the subject and receive it', waitForAsync((done:any) => {   
    const ballSended = 4;
    service.subjectBalls.subscribe(ball => {
        expect(ball.number).toEqual(ballSended);
        expect(ball.number==7).toBeFalse();
    })   
    service.sendBall(4);
  }));     

  it('Send a clear ball call to reset', waitForAsync(() => {   
    const ballSended = null;
    service.subjectBalls.subscribe(ball => {
        expect(ball).toEqual(ballSended);
        expect(ball!=null).toBeFalse();
    })   
    service.clearBalls();
  }));     

  
  it('Send a disable call and receive it', waitForAsync(() => {   
    service.subjectDisable.subscribe(disable => {
        expect(disable.disable).toBeTrue;
        expect(disable==null).toBeFalse();
    })   
    service.disableMorePicks(true);
  }));     

  it('Send a playing call and receive it', waitForAsync(() => {   
    service.subjectPlaying.subscribe(playing => {
        expect(playing.state==3).toBeTrue;
        expect(playing==null).toBeFalse();
    })   
    service.changePlaying(3); //a 0 is the loading
  }));     
});
