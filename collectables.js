//code for drawing collectables
function drawCollectable(t_Collectable) {
  fill(255, 204, 0);
  ellipse(t_Collectable.x_pos, t_Collectable.y_pos, t_Collectable.size);
}

//code to append collectables to collectables array
//increase no of collectables with level difficulty
function appendCollectables() {
  var total_collectables = 30 + 20 * levelDifficulty;
  while (collectables.length < total_collectables) {
    var x = random(400, levelLength);
    var collectable = {
      x_pos: x,
      y_pos: floorPos_y - 15,
      size: 30,
      isFound: false
    };
    if (!isCollectableOnCanyon(collectable) && !OverlappCheckerCollectable(collectable)) {
      collectables.push(collectable);
    }
  }
}

// append collectables on canyons
function appendCollectablesOnPlatform() {
  for (i in platforms) {

    // variables to space out collectables and limit no of collectables
    let distanceIncreaser = 25;

    //only append if distanceIncreaser is less than 200
    while (distanceIncreaser < 200) {

      //since static platforms are 200 wide, we only append if width exceeds 150
      if (platforms[i].length > 150) {

        let collectable = {
          x_pos: platforms[i].x + distanceIncreaser,
          y_pos: platforms[i].y - 15,
          size: 30,
          isFound: false
        };
        collectables.push(collectable);

      }
      distanceIncreaser += 25;
    }

  }

}

//if collectable is on top of a canyon return true, else false
//only for appending at game startm, not for in game logic
function isCollectableOnCanyon(t_c) {
  var onCanyon = false;
  for (i in canyons) {
    var canyon = canyons[i];
    var x1_limit = canyon.x_pos - t_c.size;
    var x2_limit = canyon.x_pos + canyon.width;
    if (t_c.x_pos > x1_limit && t_c.x_pos < x2_limit) {
      onCanyon = true;
      break; //exit the for loop
    }
  }
  return onCanyon; //true or false

}

//returns true if collectables overlapp each other
//only for appending at game startm, not for in game logic
function OverlappCheckerCollectable(collectable) {
  var overlapping = false;
  for (var j = 0; j < collectables.length; j++) {
    var other = collectables[j];
    var d = dist(collectable.x_pos, floorPos_y, other.x_pos, floorPos_y);
    if (d < collectable.size) {
      overlapping = true;
      break; //exit the for loop
    }
  }
  return overlapping;
}