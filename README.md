# Technical_test_Angular-Lotery_game
Technical Test in Angular about a lottery game. Angular12, Karma Jasmine for testing and deployed in firebase. 

Firebase deploy: https://angular-prueba-tecnica-loteria.web.app/

## Configurable parameters

The project have the following configurable attributes, you can modify the values in the enviroment file, creating multiple enviroments easily for multiple configurations
the path is "src\environments\environment.ts" and "src\environments\environment.prod.ts"  (develop and production enviroment)
- ballNumber: Number of balls (default : 10)
- arrayColours: The colors of the balls in an array, if there are more balls than colors it will iterate the array (default: ["#f79256","#fbd1a2","#7dcfb6","#00b2ca","#ff99c8"] )
- maxNumberOfBalls: Max number of balls allowed to pick (default: 8)
- profit: The profit if you win (default: 1.5)
These values are shared to the component using the configuration.service.ts

## Components:

- ParentComponent: It controls the responsive and is the enter point to the application
- BallSelectorComponent: It contains the balls component and show the results when the game is over.
- BallComponent: It is the balls that can be selected, it comunicate to the betSlipComponent adding or removing balls, also can be disabled by a subscription and have a little animation when clicked or reseted.
- BetSlipComponent: It controls the balls selected and all the currency logic. It communicates to the rest of the components, sending info about the actual status of the game.


## Component communication
For the communication between components, the application uses a main service and Subjects which are a special type of observer that allows us to communicate to multiple components simultaneously.

There are 3 subjects:
- Subjectballs : Control when a new ball is selected, and clear the balls if the reset or restart button is pressed. 
- SubjectDisable:  Control if balls have to be disabled because the max number of balls have been reached.
- SubjectPlaying: Is activate when the game is playing, just after pushing the place bet button. It also sends the results to the ball selector component.

##  Testing:

Using Karma Jasmine components and services are tested automatically.
The results are: 

![KarmaResults](https://user-images.githubusercontent.com/33956661/159177151-ae802c06-78c8-4069-99eb-18b6f16ee2a2.png)

