import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BallComponent } from '../ball/ball.component';
import { BetslipComponent } from '../betslip/betslip.component';

import { BallselectorComponent } from './ballselector.component';

describe('BallselectorComponent', () => {
  let component: BallselectorComponent;
  let fixture: ComponentFixture<BallselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallselectorComponent,BallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
