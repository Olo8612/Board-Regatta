var Boat = function(posX, posY, direction, colour, player){
	this.posX = posX; //
	this posY = posY; //positions of boat at pixel grid
	this direction = direction;
	this colour = colour;
	this player = player;
};
Boat.prototype.draw = function(){
	var board = "canvas"; // board placement 
	var boatImg = '<img src="images/boat.png">'; // Remember to upload graphic file
	this.boatElement = $(boatImg); //selector for jQuery

	this.boatElement.css({
		position: "relative",
		left: this.posX,
		top: this.posY
	});

	$(board).append(this.boatElement);
};
