//["F","L","L","F","F","R","B","L","L"]
//["F","L","f","F","F","r","F","L","B","z"]
var listOfCommands = ["F","L","f","F","F","r","F","L","B","z"];
var listOfObstacles = [[1,4],[3,5],[7,4]];
// N => North
// S => South
// E => East
// W => West
// State = 0 no obstacle
// State = 1 obstacle was found
var marsRover = {
    X:0,
    Y:0,
    Direction:"N",
    State:0
}

function moveForward(marsRover){
    switch (marsRover.Direction){
        case "N":
            //check for obstacles
            for(var i=0; i<listOfObstacles.length; i++){
                if(marsRover.Y-1 == listOfObstacles[i][1]){
                    marsRover.State=1;
                }
                else{
                    marsRover.State=0;
                }
            }
            if(marsRover.State==1){
                console.log ("Mars Rover will crash with an obstacle! STOP.");
                console.log (`Mars Rover current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            }
            else{
                marsRover.Y--;
                console.log (`Mars Rover moved forward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
                marsRover.State=0;
            }
            break;

        case "E":
            //check for obstacles
            for(var i=0; i<listOfObstacles.length; i++){
                if(marsRover.X+1 == listOfObstacles[i][0]){
                    marsRover.State=1;
                }
                else{
                    marsRover.State=0;
                }
            }
            if(marsRover.State==1){
                console.log ("Mars Rover will crash with an obstacle! STOP.");
                console.log (`Mars Rover current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            }
            else{
                marsRover.X++;
                console.log (`Mars Rover moved forward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
                marsRover.State=0;
            }
            break;

        case "S":
            //check for obstacles
            for(var i=0; i<listOfObstacles.length; i++){
                if(marsRover.Y+1 == listOfObstacles[i][1]){
                    marsRover.State=1;
                }
                else{
                    marsRover.State=0;
                }
            }
            if(marsRover.State==1){
                console.log ("Mars Rover will crash with an obstacle! STOP.");
                console.log (`Mars Rover current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            }
            else{
                marsRover.Y++;
                console.log (`Mars Rover moved forward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
                marsRover.State=0;
            }
            break;

        case "W":
            //check for obstacles
            for(var i=0; i<listOfObstacles.length; i++){
                if(marsRover.X-1 == listOfObstacles[i][0]){
                    marsRover.State=1;
                }
                else {
                    marsRover.State=0;
                }
            }
            if(marsRover.State==1){
                console.log ("Mars Rover will crash with an obstacle! STOP.");
                console.log (`Mars Rover current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            }
            else{
                marsRover.X--;
                console.log (`Mars Rover moved forward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
                marsRover.State=0;
            }
            break;
        default:
    }
}

function moveBackward(marsRover){
    switch (marsRover.Direction){
        case "N":
            marsRover.Y++;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;

        case "E":
            marsRover.X--;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;

        case "S":
            marsRover.Y--;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;

        case "W":
            marsRover.X++;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        default:
    }
}

// move left by 90 degrees = anticlockwise
function turnLeft(marsRover){
    switch (marsRover.Direction){
        case "N":
            marsRover.Direction = "W";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        case "W":
            marsRover.Direction = "S";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        case "S":
            marsRover.Direction = "E";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        case "E":
            marsRover.Direction = "N";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        default:
    }
}

// move right by 90 degrees = clockwise
function turnRight(marsRover){
    switch (marsRover.Direction){
        case "N":
            marsRover.Direction = "E";
            console.log (`Mars Rover turned right, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        case "E":
            marsRover.Direction = "S";
            console.log (`Mars Rover turned right, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        case "S":
            marsRover.Direction = "W";
            console.log (`Mars Rover turned right, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        case "W":
            marsRover.Direction = "N";
            console.log (`Mars Rover turned right, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            break;
        default:
    }
}

function commands(listOfCommands){
    for(var i=0; i<listOfCommands.length; i++){
        switch (listOfCommands[i]){
            case "F":
            case "f":
                moveForward(marsRover);
                break;
            case "B":
            case "b":
                moveBackward(marsRover);
                break;
            case "L":
            case "l":
                turnLeft(marsRover);
                break;
            case "R":
            case "r":
                turnRight(marsRover);
                break;
            default:
                console.log("Invalid Command! \n" +
                    "Please, Enter F/f => to move forward. \n" +
                    "Please, Enter B/b => to move backward. \n" +
                    "Please, Enter L/l => to turn left. \n" +
                    "Please, Enter R/r => to turn right.")
        }
    }
}

commands(listOfCommands);