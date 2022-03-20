import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallComponent } from './ball.component';

describe('BallComponent', () => {
  let component: BallComponent;
  let fixture: ComponentFixture<BallComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(BallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('If clicked selected change value', () => {
    expect(component.selected).toBeFalse();
    const ball1: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#bola0');
    ball1.click();
    fixture.detectChanges();
    expect(component.selected).toBeTrue();

  });

  it('If clicked call to the selected function and selected change value', () => {
    const ball1: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#bola0');
    const componentSpy = spyOn(component, 'select').and.callThrough();
    expect(componentSpy).not.toHaveBeenCalled();
    ball1.click();
    fixture.detectChanges();
    expect(componentSpy).toHaveBeenCalledTimes(1);

  });

});
