import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { ConfigurationService } from '../configuration.service';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent  {


  selectedBalls:Array<number>=[]
  subscriptionBalls: Subscription;
  arrayColours;
  maxBalls:number=0;
  numberOfBalls; // total ball number (default 10)
  isDisabled=false;
  profitconfig=0;


  euros=0;
  total=0;

  minimumBet=0;
  end=false;//the game ended


  constructor(private mainService:MainServiceService, private toastservice:MessageService,conf:ConfigurationService) {
    this.arrayColours=conf.getArrayColours();
    this.maxBalls=conf.getMaxNumberOfBalls();
    this.numberOfBalls=conf.getNumberOfBalls();
    this.minimumBet=conf.getMinimunBet();
    this.profitconfig=conf.getProfit();

    this.subscriptionBalls = mainService.getBalls().subscribe({
      next: (ball) => {
      if (ball) {
        console.log(this.selectedBalls);
        if(this.selectedBalls.includes(ball.number)){
          this.toastservice.add({severity:'info', summary: 'Removing ball '+ball.number, detail: '',life:1500});
          this.selectedBalls = this.selectedBalls.filter(item => item !== ball.number)
          if(this.isDisabled){
            console.info("Enabling BALLS");
            this.mainService.disableMorePicks(false);
          }
        }else{
          if(this.selectedBalls.length>this.maxBalls-2){
            console.info("DISABLING BALLS, max balls reached")
            this.mainService.disableMorePicks(true);
            this.isDisabled=true;
          }
          this.selectedBalls.push(ball.number);
        }
        this.refreshTotal(false);
        

      } else {
        // clear balls when null message received
        this.selectedBalls = [];
      }},
      error: (e) => console.error(e)
    });
  }

  
  ngOnDestroy() {
    this.subscriptionBalls.unsubscribe()
  }

  

 

  reset(){
    this.refreshTotal(false)
    this.mainService.clearBalls()
    if(this.isDisabled){
      this.mainService.disableMorePicks(false);
    }
  }

  //auxiliar function
  counter(i: number) {
    return new Array(i);
  }


  refreshTotal(isFromButon:boolean){
    if(this.euros<this.minimumBet){
      if(isFromButon){
        this.toastservice.add({severity:'error', summary: 'The minimin bet per ball is '+this.minimumBet+"€", detail: '',life:3000});
      }
      this.euros=0;
      this.total=0;
    }else{
      this.total=this.euros*this.selectedBalls.length;
    }

  }


  async startGame(){
    if(this.total>0 && this.euros>=this.minimumBet){
      this.mainService.changePlaying(0); //0 is start the spinner
    }
    await this.delay(3000);
    console.log("fin");
    var winner=this.chooseWinner();
    if(winner==false){
      return ;
    }
    this.mainService.changePlaying(winner); //the winner ball

  }

  chooseWinner(){
    if(this.numberOfBalls<2){
      this.toastservice.add({severity:'error', summary: 'No enough balls in configuration, change ballNumber in the config', detail: '',life:3000});
      return false;
    }
    this.end=true;

    const winnerBall = Math.floor(Math.random() * this.numberOfBalls) + 1
    console.log("selected ball is "+winnerBall);


    var profit=-this.total;
    var win=this.selectedBalls.includes(winnerBall);
    if(win){
      profit=profit+this.euros*this.profitconfig;
    }

    return {ball:winnerBall,win:win,profit:profit};
  }



  //auxiliar delay function
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
