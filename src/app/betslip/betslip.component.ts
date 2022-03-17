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

  isDisabled=false;



  euros=0;
  total=0;

  constructor(private mainService:MainServiceService, private toastservice:MessageService,conf:ConfigurationService) {
    this.arrayColours=conf.getArrayColours();
    this.maxBalls=conf.getMaxNumberOfBalls()
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
        this.refreshTotal();

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
    this.mainService.clearBalls()
    if(this.isDisabled){
      this.mainService.disableMorePicks(false);
    }
  }

  //auxiliar function
  counter(i: number) {
    return new Array(i);
  }


  refreshTotal(){
    this.total=this.euros*this.selectedBalls.length;
  }


  startGame(){

  }
}
