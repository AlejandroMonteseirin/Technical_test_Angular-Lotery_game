import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

import {  ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { BallselectorComponent } from '../ballselector/ballselector.component';
import { BetslipComponent } from '../betslip/betslip.component';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { BallComponent } from '../ball/ball.component';
import { AppComponent } from '../app.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent,BallselectorComponent,BallComponent],
      providers: [
        MessageService 
      ], imports: [ToastModule,ReactiveFormsModule,InputMaskModule,InputTextModule,InputNumberModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
