//this page contains code that alters game sceanary items

//loop over canyon array and draw canyons
function drawCanyons() {
  fill(100, 155, 255);
  for (var i = 0; i < canyons.length; i++) {
    var canyon = canyons[i];
    drawCanyon(canyon);
  }
}

//loop over trees array and draw trees
function drawTrees() {
  for (var i = 0; i < trees.length; i++) {
    var tree = trees[i];
    drawTree(tree);
  }
}

//loop over mountains array and draw canyons
function drawMountains() {
  for (var i = 0; i < mountains.length; i++) {
    var mountain = mountains[i];
    drawMountain(mountain);
  }
}

//loop over collectables array and draw collectables
function drawCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    if (collectables[i].isFound == false) {
      drawCollectable(collectables[i]);
    }
  }
}

//loop over clouds array and draw clouds
function drawClouds() {
  for (var i in clouds) {
    drawCloud(clouds[i]);
  }
}

function drawCollectable(t_Collectable) {
  fill(197, 179, 88);
  rect(t_Collectable.x_pos, t_Collectable.y_pos - 30, 30, 30);
}

//draw green ground and extend its length as levels get higher
function drawGround() {
  noStroke();
  fill(0, 155, 0);
  rect(-600, floorPos_y, levelLength + 2000 * levelDifficulty, 600);
}

//draws a blue sky
function drawSky() {
  background(100, 155, 255);
}

//Draws flagPole at end of level
function renderFlagPole() {
  push();
  strokeWeight(5);
  stroke(180);
  line(flagPole.x_pos, floorPos_y, flagPole.x_pos, floorPos_y - 250);
  noStroke();
  checkFlagPole();

  // if player reaches flagPole
  // flagPole moves to top of pole
  if (flagPole.isReached == true) {
    fill(205, 0, 0);
    rect(flagPole.x_pos, floorPos_y - 250, 100, 50);
  } else {
    fill(205, 0, 0);
    rect(flagPole.x_pos, floorPos_y - 50, 100, 50);
  }
  pop();
}

// reset level and arrays containing in game object coordinates
// this function is called whenever a new level is to be generated
function resetSketch() {
  gameChar_x = width / 2;
  gameChar_world_x = gameChar_x;
  gameChar_y = floorPos_y;
  gameChar_world_y = gameChar_y;
  cameraPos_x = 0;
  cameraPos_y = 0;

  gameChar_width = 50;
  isLeft = false;
  isRight = false;
  isPlummeting = false;
  isFalling = false;
  onPlatform = false;
  hitByEnemy = false;

  // declare platform and append platforms to level
  platforms = [];
  appendPlatforms();

  //declare canyons and append canyons to level
  canyons = [];
  appendCanyons();

  //declare mountains and append mountains to level
  mountains = [];
  appendMountains();

  // declare trees and append trees to level
  trees = [];
  appendTrees();

  //declare collectables and append collectables to level and platforms
  collectables = [];
  appendCollectables();
  appendCollectablesOnPlatform();

  // declare and append clouds
  clouds = [];
  appendClouds();

  //declare enemies and append enemies to level and platforms
  enemies = [];
  appendEnemies();
  appendEnemiesOnPlatforms();

  // reset menu played songs variables each time new level is created
  // these variables are used to ensure that the
  // sound files on menu screen are only played once
  levelComplete_Played = false;
  runOut_lives_played = false;

  //create falgpole at end of level
  flagPole = {
    isReached: false,
    bellRung: false,
    x_pos: levelLength + 600,
  };
}
