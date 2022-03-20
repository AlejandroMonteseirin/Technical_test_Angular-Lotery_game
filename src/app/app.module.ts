import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { ParentComponent } from './parent/parent.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { BallselectorComponent } from './ballselector/ballselector.component';
import { BetslipComponent } from './betslip/betslip.component';
import { BallComponent } from './ball/ball.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    BallselectorComponent,
    BetslipComponent,
    BallComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,// animations
    InputTextModule,  //ngPrime input text 
    InputMaskModule,  //ngPrime mask validation (MM/YY in credit card)
    PasswordModule, //ngPrime CVV input
    ButtonModule, //ngPrime buttons
    ToastModule, //ngPrime Toasts
    FormsModule,
    InputNumberModule,
    ProgressSpinnerModule//spiner
  ],
  providers: [
    MessageService // ngPrimetoasts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
