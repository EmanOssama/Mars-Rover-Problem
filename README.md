# Mars-Rover-Problem
Develop an API that moves a rover around on a grid.
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is heading.
Start with (0,0) N.
The rover receives a list of commands.
Implement commands that move the rover forward/backward (F/f,B/b).
Check the heading in case of North or south then move in Y-direction otherwise in case of West or East move in X-direction.
Implement commands that turn the rover left/right (L/l,R/r).
turn left means to move anticlockwise, while turning right means to move clockwise.
Implement obstacle detection before each move to a new position. If a given sequence of commands encounters an obstacle, the rover stops at the last position and reports the obstacle.

# Input Example
List of commands as follow: ["F","L","f","F","F","r","F","L","B","z"]
It will check only valid commands and neglect others.
List of obstacles positions: [1,4],[3,5],[7,4],[-3,-2]

# Output Example
Mars Rover moved forward, current position is (0,-1),N
Mars Rover turned left, current position is (0,-1),W
Mars Rover moved forward, current position is (-1,-1),W
Mars Rover moved forward, current position is (-2,-1),W
Mars Rover will crash with an obstacle! STOP.
Mars Rover current position is (-2,-1),W
Mars Rover turned right, current position is (-2,-1),N
Mars Rover will crash with an obstacle! STOP.
Mars Rover current position is (-2,-1),N
Mars Rover turned left, current position is (-2,-1),W
Mars Rover moved backward, current position is (-1,-1),W
Invalid Command!
Please, Enter F/f => to move forward.
Please, Enter B/b => to move backward.
Please, Enter L/l => to turn left.
Please, Enter R/r => to turn right.

# How to Use
Change "listOfCommands" list in the code with the list of commands you want.
Change "listOfObstacles" list in the code with the list of obstacles you want to be avoided by mars rover.

# Code & Logic
The solution is developed using 4 functions in main file (Part1.js), which is the entry point of the application where code is executed.
Data of Mars Rover is stored in a global variable to save its X,Y positions and the current heading.
1- Function "turnLeft" works anticlockwise & works on mars rover heading only.
2- Function "turnRight" works clockwise & works on mars rover heading only.
3- Function "moveForward" works on the positions X & Y through IF and CASE conditions & chech whether is there an obstacle or not.
4- Function "moveBackward" works on the positions X & Y through IF and CASE conditions.

# Unit Test
For unit testing, I chose Jest which is a JavaScript test framework running on Node.js.
Functions from the Part1.js were used for testing, as an example of unit testing.
Find the written tests in "turnLeft.test.js", "turnRight.test.js", "moveForward.test.js" and "moveBackward.test.js" files.
To execute test, simply run "npm test" in the terminal.
