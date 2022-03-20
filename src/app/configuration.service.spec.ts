import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('it generate the correct array of colours for 2 to 100 balls', () => {
    for (let i = 2; i < 100; i++) {
      service.ballNumber=i;
      var colourArray=service.getArrayColours();
      console.log(colourArray);
      //the -1 is because the position 0 is not used
      expect((colourArray.length-1)==service.ballNumber).toBeTrue();
    }
  });
  it('it generate the array of balls using the parameter ballNumber for 2 to 100 balls', () => {
    for (let i = 2; i < 100; i++) {
      service.ballNumber=i
      var arrayBalls=service.getBallArray();
      expect((arrayBalls.length)==service.ballNumber).toBeTrue();
    }
  });

});
