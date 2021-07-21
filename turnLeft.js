function turnLeft(marsRover){
    var marsRover = {
        X:0,
        Y:0,
        Direction:"N"
    }
    switch (marsRover.Direction){
        case "N":
            marsRover.Direction = "W";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return "W";
        case "W":
            marsRover.Direction = "S";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return "S";
        case "S":
            marsRover.Direction = "E";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return "E";
        case "E":
            marsRover.Direction = "N";
            console.log (`Mars Rover turned left, current position is (${marsRover.X},${marsRover.Y}),${marsRover.Direction}`);
            return "N";
        default:
            return ;
    }
}
module.exports = turnLeft;