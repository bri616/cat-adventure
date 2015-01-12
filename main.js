// Write a cat model HERE!

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
  this.description = new_description;
  this.exits = new_exits;
  this.points = new_points;
  this.getDescription = function(){
    return this.name + ": " + this.description;
  };
};

var Cat = function(new_name, escape_points ) {
  this.name = new_name;
  this.escape_points = escape_points;
  this.deleteEscapePoint = function(){
    this.escape_points = this.escape_points - 1;
  };
};

//
// Begin fixture data!
//
var kitchen = new Room(
  "Kitchen",
  "A nice roomy kitchen. Not very safe. There may be dogs nearby.",
  ["Living Room", "Dining Room"],
  0
);

var living_room = new Room(
  "Living Room",
  "Lots of perches, but frequently full of dogs. Kind of safe, but not a good spot for naps!",
  ["Kitchen"],
  2
);

var dining_room = new Room(
  "Dining Room",
  "There's a big table and some chairs and OH NO IT'S A DOG",
  ["Kitchen", "Bedroom"],
  -4
);

var bedroom = new Room(
  "Bedroom",
  "YAY! We finally found the nice toasty warm sunbeam!",
  ["Stairs"],
  20
);

//
// End fixture data!
//

// don't forget to populate this with data!
var starbuck = new Cat(
  "Starbuck",
  5
);

$(document).ready(function(){
  // should be replaced with your beginning/end game logic
    $("#dining-room").click(function() {
      alert( dining_room.getDescription() );
    });

    $("#living-room").click(function() {
      alert( living_room.getDescription() );
    });

    $(".run").click(function() {
      alert(starbuck.name+ " ,you have decided to "+$(this).html()+"\nThis costs you one escape point");
      starbuck.deleteEscapePoint();
      $("#escape_points").text(starbuck.escape_points);
    });
});
