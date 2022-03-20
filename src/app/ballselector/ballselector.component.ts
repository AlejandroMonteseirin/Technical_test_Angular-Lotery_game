import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-ballselector',
  templateUrl: './ballselector.component.html',
  styleUrls: ['./ballselector.component.css']
})
export class BallselectorComponent  {


  ballNumber;
  arrayColours:Array<string>;

  playing:boolean=false;//spinner
  winMessage:any=null;//win ball
  subscriptionPlaying;
  constructor(conf:ConfigurationService, mainService:MainServiceService) { 
    this.ballNumber=conf.getBallArray();
    this.arrayColours=conf.getArrayColours();

    //
    this.subscriptionPlaying = mainService.getPlaying().subscribe({
      next: (playing) => {
        if(playing.state==0){
          this.playing=true;
        }else{
          this.playing=false;
          console.log(playing);
          this.winMessage=playing;
        }
      }
    });
  }

  //restart the app
  reset(){
    window.location.reload();
  }

}
