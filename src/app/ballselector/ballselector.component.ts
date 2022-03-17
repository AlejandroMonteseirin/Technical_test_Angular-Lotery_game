import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-ballselector',
  templateUrl: './ballselector.component.html',
  styleUrls: ['./ballselector.component.css']
})
export class BallselectorComponent  {


  ballNumber;
  arrayColours:Array<string>;
  constructor(private conf:ConfigurationService) { 
    this.ballNumber=conf.getBallNumber();
    this.arrayColours=conf.getArrayColours();

  }

 

  

}
