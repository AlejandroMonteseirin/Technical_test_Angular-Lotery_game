import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { BallselectorComponent } from '../ballselector/ballselector.component';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(BallselectorComponent) ballSelector:any;


  mobile=false; //Check if mobile to activate responsive



  constructor( mainService:MainServiceService) {
   
  }
  


  //responsive check
  ngOnInit(): void {
    if (window.screen.width < 500) { 
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }


  //responsive check in case of resize
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    console.log("Resize detected: "+window.screen.width+","+window.screen.height);
    if (window.screen.width < 500) {
      this.mobile = true;
    }else{
        this.mobile = false;
      }
  }

}
