import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { MainServiceService } from '../main-service.service';

import { BetslipComponent } from './betslip.component';

describe('BetslipComponent', () => {
  let component: BetslipComponent;
  let fixture: ComponentFixture<BetslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetslipComponent ]
      ,providers: [
        MessageService ,MainServiceService
      ], imports: [InputNumberModule,ButtonModule,FormsModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when reset is called reset and refreshTotal are called', () => {
    component.selectedBalls=[2];
    fixture.detectChanges();
    const componentSpyReset = spyOn(component, 'reset').and.callThrough();
    const componentSpyrefresh = spyOn(component, 'refreshTotal').and.callThrough();

    expect(componentSpyReset).not.toHaveBeenCalled();
    expect(componentSpyrefresh).not.toHaveBeenCalled();

    component.reset(false);
    fixture.detectChanges();
    expect(componentSpyReset).toHaveBeenCalledTimes(1);
    expect(componentSpyrefresh).toHaveBeenCalledTimes(1);
  });
  it(`If number entered is less than minimun bet, it dont get saved`, () => {
    
    component.euros=3;
    expect(component.euros).toBe(3);

    component.refreshTotal(true);
    fixture.detectChanges() ;

    expect(component.euros).toBe(0);



    
  });
});
