//draws a mountain
function drawMountain(mountain) {
  fill(130, 70, 36);
  triangle(mountain.x_pos, floorPos_y, mountain.x_pos + ((4 / 5) * mountain.width), floorPos_y, mountain.x_pos + ((2 / 5) * mountain.width), floorPos_y - mountain.height);
  triangle(mountain.x_pos + (2 / 5) * mountain.width, floorPos_y, mountain.x_pos + mountain.width, floorPos_y, mountain.x_pos + ((3.5 / 5) * mountain.width), floorPos_y - mountain.height * 3 / 4);
}

//appends number of required mountains to mountains array
//increases no of mountains as level difficulty increases
//only for appending at game start, not for in game logic
function appendMountains() {
  while (mountains.length < 3 + 1 * levelDifficulty) {
    var x = random(200, levelLength);
    var mountain = {
      x_pos: x,
      width: 400,
      height: 320
    };
    if (!isMountainOnCanyon(mountain) && !OverlappCheckerMountian(mountain)) {
      mountains.push(mountain);
    }
  }
}

//returns true if mountains overlapp canyons
//only for appending at game start, not for in game logic
function isMountainOnCanyon(mountain) {
  var onCanyon = false;
  for (i in canyons) {
    var canyon = canyons[i];
    var x1_limit = canyon.x_pos - mountain.width;
    var x2_limit = canyon.x_pos + canyon.width + mountain.width;
    if (mountain.x_pos > x1_limit && mountain.x_pos < x2_limit) {
      onCanyon = true;
      break; //exit the for loop
    }

  }
  return onCanyon;
}


//returns true if mountains overlapp each other
//only for appending at game startm, not for in game logic
function OverlappCheckerMountian(mountain) {
  var overlapping = false;
  for (var j = 0; j < mountains.length; j++) {
    var other = mountains[j];
    var d = dist(mountain.x_pos, floorPos_y, other.x_pos, floorPos_y);
    if (d < 2 * mountain.width) {
      overlapping = true;
    }
  }
  return overlapping;
}
