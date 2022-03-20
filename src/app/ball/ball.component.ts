import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
  @Input() number = 0
  @Input() color:string = "red"
  animation="paused"


  selected:boolean=false;
  subscriptionBalls: Subscription;
  subscriptionDisable: Subscription;

  disabled=false;
  
  constructor(private mainService:MainServiceService) { 

    //Animate the reset of the balls 
    this.subscriptionBalls = mainService.getBalls().subscribe({
      next: (ball) => {
        if (ball==null) {
          this.selected=true;
          this.animate();
        }
      }
    });


    //if max balls reached, disable the balls
    this.subscriptionDisable = mainService.maxBallsReached().subscribe({
      next: (disable) => {
        var div=document.getElementById('bola'+this.number);
        console.log(disable);
        if (disable.disable) {
            this.disabled=true;
            if(div){
              div.style.backgroundColor= "#dddddd";
            }
        }else{
          this.disabled=false;
          if(div){
            div.style.backgroundColor= this.color;
          }
        }
      }
    });
  }

  //unsubscribe in destroy
  ngOnDestroy() {
    this.subscriptionBalls.unsubscribe()
    this.subscriptionDisable.unsubscribe()
  }
  
  ngOnInit(): void {
  }


  //when clicked
  select(){
    if(!this.disabled || this.selected){
      this.mainService.sendBall(this.number);
      this.animate();
    }
  }


  //animation of clicked or reset
  animate(){
    var div=document.getElementById('bola'+this.number);
    this.selected=!this.selected;
    if(this.selected){
      if(div){
        div.style.borderColor= "black";
      }
    }else{
      if(div){
        div.style.borderColor= "white";
      }
    }
    //animation in click
    if(div){
      div.style.animationPlayState="running";
      setTimeout(() => {this.stopAnimation(div)}, 800);
    }

  }


  

  //stop the animation
  stopAnimation(element:any){
    element.style.animationPlayState="paused";
    element.style.borderStyle= "groove";
  }
  
}
