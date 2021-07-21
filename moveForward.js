function moveForward(marsRover){
    var listOfObstacles = [[1,4],[3,5],[7,4],[-3,-2]];
    var marsRover = {
        X:0,
        Y:0,
        Direction:"N",
        State:0
    }
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
            return marsRover.Y;

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
            return marsRover.X;

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
            return marsRover.Y;

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
            return marsRover.X;
        default:
            return ;
    }
}
module.exports = moveForward;