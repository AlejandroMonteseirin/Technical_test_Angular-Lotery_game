// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ballNumber:10, // number of balls that you can choose (default 10)
  arrayColours:["#f79256","#fbd1a2","#7dcfb6","#00b2ca","#ff99c8"], // colour array that alternate in the balls
  maxNumberOfBalls:8,  //Max number of ball you can select in one round
  profit:1.5, //Profit in case of wining (Per ball)
  minimunBet:5.0, //minimun bet per ball (NOT TOTAL)
};


