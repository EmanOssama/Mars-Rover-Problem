function moveBackward(marsRover){
    var marsRover = {
        X:0,
        Y:0,
        Direction:"N"
    }
    switch (marsRover.Direction){
        case "N":
            marsRover.Y++;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return marsRover.Y;

        case "E":
            marsRover.X--;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return marsRover.X;

        case "S":
            marsRover.Y--;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return marsRover.Y;

        case "W":
            marsRover.X++;
            console.log (`Mars Rover moved backward, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return marsRover.X;
        default:
            return ;
    }
}
module.exports = moveBackward;