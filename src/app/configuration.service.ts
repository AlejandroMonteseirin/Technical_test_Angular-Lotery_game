import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  ballNumber:number=environment.ballNumber; // number of balls that you can choose
  arrayColours=environment.arrayColours; // colour array that alternate in the balls
  maxNumberOfBalls=environment.maxNumberOfBalls;;  //Max number of ball you can select in one round
  profit=environment.profit; //Profit in case of wining (Per ball)
  minimunBet=environment.minimunBet; //minimun bet per ball (NOT TOTAL)



  constructor() { }

  //generate the array of balls using the config parameter
  getBallArray(){
    return Array.from({length:this.ballNumber},(v,k)=>k+1);
  }

  //generate colours using the config parameter
  getArrayColours(){
    let balls=this.getBallArray();
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

  getProfit(){
    return this.profit;
  }
  getMinimunBet(){
    return this.minimunBet;
  }
  getNumberOfBalls(){
    return this.ballNumber;
  }

}
