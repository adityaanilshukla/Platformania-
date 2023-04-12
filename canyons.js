// draws a canyon
function drawCanyon(t_Canyon) {
  rect(t_Canyon.x_pos, floorPos_y, t_Canyon.width, 600);
}


// returns true if character is below canyon while appending Canyons
// not for falling logic
function isCanyonBelowChar(canyon) {
  var onCanyon = false;
  var x1_limit = canyon.x_pos;
  var x2_limit = canyon.x_pos + canyon.width;
  if (gameChar_world_x > x1_limit && gameChar_world_x < x2_limit) {
    onCanyon = true;
  }
  return onCanyon; //true or false
}

//appends number of required canyons to canyons array
function appendCanyons() {
  //increase no of canyons with level difficulty
  while (canyons.length < (3 + 2 * levelDifficulty)) {
    var x = random(600, levelLength);

    // variable that randomly generates number that determines if canyon is 100 or 400 wide
    var CanyonWidthSelector = random(3);
    if (CanyonWidthSelector <= 2) {
      var canyon = {
        x_pos: x,
        width: 100
      };
    } else {
      var canyon = {
        x_pos: x,
        width: 600
      };
    }
    //only append canyons if canyons dont overlap and gameChar is not above canyon
    if (!OverlappCheckerCanyon(canyon) && !isCanyonBelowChar(canyon)) {
      canyons.push(canyon);
      if (!(CanyonWidthSelector <= 2) && canyon.width != 100) {
        platforms.push(new HorizontalMovePlatform(canyon.x_pos + 225, (floorPos_y - 60), 150, (canyon.width / 4)));
      }
    }
  }
}

//returns true if canyons overlapp
function OverlappCheckerCanyon(canyon) {
  var overlapping = false;
  for (var j = 0; j < canyons.length; j++) {
    var other = canyons[j];
    var d = dist(canyon.x_pos, floorPos_y, other.x_pos, floorPos_y);
    if (d < 2 * canyon.width) {
      overlapping = true;
    }
  }
  return overlapping;
}
