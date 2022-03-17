import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  ballNumber=10; // number of balls that you can choose
  arrayColours=["#f79256","#fbd1a2","#7dcfb6","#00b2ca","#ff99c8"] // colour array that alternate in the balls
  maxNumberOfBalls=8;





  constructor() { }

  //generate the array of balls using the config parameter
  getBallNumber(){
    return Array.from({length:this.ballNumber},(v,k)=>k+1);
  }

  //generate colours using the config parameter
  getArrayColours(){
    let balls=this.getBallNumber();
    let arrayResponse:Array<string>=[];
    let index=0;
    for (var i = 0; i <= this.ballNumber; i++) {
      if(index>=this.arrayColours.length){
        index=0;
      }
      arrayResponse.push(this.arrayColours[index]);
      index++;
      
    }
    return arrayResponse;
  }

  //generate the array of balls
  getMaxNumberOfBalls(){
    return this.maxNumberOfBalls;
  }


}
