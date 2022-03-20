# Technical_test_Angular-Lotery_game
Technical Test in Angular about a lotery game. Angular12, Karma Jasmine for testing and deployed in firebase. 

Firebase deploy: https://angular-prueba-tecnica-loteria.web.app/


The project have the following configurable attributes, you can modify the values in the enviroment file, creating multiple enviroments easily for multiple configurations
the path is "src\environments\environment.ts" and "src\environments\environment.prod.ts"  (develop and production enviroment)
- ballNumber: Number of balls (default : 10)
- arrayColours: The colours of the balls in an array, if there are more balls than colours it will iterate the array (default: ["#f79256","#fbd1a2","#7dcfb6","#00b2ca","#ff99c8"] )
- maxNumberOfBalls: Max number of balls allowed to pick (default: 8)
- profit: The profit if you win (default: 1.5)
