
// code for drawing character jumping left
function drawJumpingLeft() {
  /*hoodie*/
  fill(255, 0, 0);
  ellipse(gameChar_world_x + 3, gameChar_world_y - 50, 25, 40);

  /*head*/
  fill(200, 150, 150);
  ellipse(gameChar_world_x, gameChar_world_y - 50, 20, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(gameChar_world_x - 8, gameChar_world_y - 56, 3, 5);
  line(gameChar_world_x - 8, gameChar_world_y - 60, gameChar_world_x + 8, gameChar_world_y - 55);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(255, 0, 0);
  rect(gameChar_world_x - 10, gameChar_world_y - 35, 20, 30);

  /*right arm*/
  fill(0);
  rect(gameChar_world_x + 5, gameChar_world_y - 35, 12, 5);

  /*left arm*/
  rect(gameChar_world_x - 20, gameChar_world_y - 35, 12, 5);

  /*right foot*/
  rect(gameChar_world_x, gameChar_world_y - 5, 10, 10);

  /*left foot*/
  rect(gameChar_world_x - 15, gameChar_world_y - 5, 10, 10);
}

// code for drawing character jumping right
function drawJumpingRight() {
  /*hoodie*/
  fill(255, 0, 0);
  ellipse(gameChar_world_x - 3, gameChar_world_y - 50 - 8, 25, 40);

  /*head*/
  fill(200, 150, 150);
  ellipse(gameChar_world_x, gameChar_world_y - 50 - 8, 20, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  strokeWeight(2);
  line(gameChar_world_x - 8, gameChar_world_y - 55 - 8, gameChar_world_x + 8, gameChar_world_y - 60 - 8);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(255, 0, 0);
  rect(gameChar_world_x - 10, gameChar_world_y - 35 - 8, 20, 30);

  /*sling*/
  stroke(0)
  strokeWeight(2);
  line(gameChar_world_x - 10, gameChar_world_y - 30 - 8, gameChar_world_x + 10, gameChar_world_y - 5 - 8);
  strokeWeight(1);
  noStroke();

  /*right arm*/
  fill(0);
  rect(gameChar_world_x + 10, gameChar_world_y - 35 - 8, 12, 5);

  /*left arm*/
  rect(gameChar_world_x - 15, gameChar_world_y - 35 - 8, 12, 5);

  /*right foot*/
  rect(gameChar_world_x - 10, gameChar_world_y - 5 - 8, 10, 10);

  /*left foot*/
  rect(gameChar_world_x + 5, gameChar_world_y - 5 - 8, 10, 10);
}

// code for drawing character walking left
function drawWalkingLeft() {
  /*hoodie*/
  fill(255, 0, 0);
  ellipse(gameChar_world_x + 3, gameChar_world_y - 50 - 4, 25, 40);

  /*head*/
  fill(200, 150, 150);
  ellipse(gameChar_world_x, gameChar_world_y - 50 - 4, 20, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(gameChar_world_x - 8, gameChar_world_y - 56 - 4, 3, 5);
  line(gameChar_world_x - 8, gameChar_world_y - 60 - 4, gameChar_world_x + 8, gameChar_world_y - 55 - 4);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(255, 0, 0);
  rect(gameChar_world_x - 10, gameChar_world_y - 39, 20, 30);

  /*right arm*/
  fill(0);
  rect(gameChar_world_x + 5, gameChar_world_y - 35 - 4, 12, 5);

  /*left arm*/
  rect(gameChar_world_x - 20, gameChar_world_y - 35 - 4, 12, 5);

  /*right foot*/
  rect(gameChar_world_x, gameChar_world_y - 9, 10, 10);

  /*left foot*/
  rect(gameChar_world_x - 15, gameChar_world_y - 9, 10, 10);
}

function drawWalkingRight() {
  /*hoodie*/
  fill(255, 0, 0);
  fill(255, 0, 0);
  ellipse(gameChar_world_x - 3, gameChar_world_y - 53, 25, 40);

  /*head*/
  fill(200, 150, 150);
  ellipse(gameChar_world_x, gameChar_world_y - 53, 20, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  strokeWeight(2);
  line(gameChar_world_x - 8, gameChar_world_y - 58, gameChar_world_x + 8, gameChar_world_y - 63);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(255, 0, 0);
  rect(gameChar_world_x - 10, gameChar_world_y - 38, 20, 30);

  /*sling*/
  stroke(0)
  strokeWeight(2);
  line(gameChar_world_x - 10, gameChar_world_y - 33, gameChar_world_x + 10, gameChar_world_y - 8);
  strokeWeight(1);
  noStroke();

  /*right arm*/
  fill(0);
  rect(gameChar_world_x + 10, gameChar_world_y - 38, 12, 5);

  /*left arm*/
  rect(gameChar_world_x - 15, gameChar_world_y - 38, 12, 5);

  /*right foot*/
  rect(gameChar_world_x - 10, gameChar_world_y - 8, 10, 10);

  /*left foot*/
  rect(gameChar_world_x + 5, gameChar_world_y - 8, 10, 10);

}

function drawJumpingFacingForwards() {
  /*hoodie*/
  fill(255, 0, 0);
  ellipse(gameChar_world_x, gameChar_world_y - 50 - 8, 38, 45);

  /*head*/
  fill(200, 150, 150);
  ellipse(gameChar_world_x, gameChar_world_y - 50 - 8, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  ellipse(gameChar_world_x + 5, gameChar_world_y - 55 - 8, 10, 10);
  strokeWeight(2);
  line(gameChar_world_x - 16, gameChar_world_y - 55 - 8, gameChar_world_x + 14, gameChar_world_y - 60 - 8);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(255, 0, 0);
  rect(gameChar_world_x - 13, gameChar_world_y - 35 - 8, 26, 30);

  /*sling*/
  stroke(0)
  strokeWeight(2);
  line(gameChar_world_x - 13, gameChar_world_y - 35 - 8, gameChar_world_x - 13 + 26, gameChar_world_y - 35 + 30 - 8);
  strokeWeight(1);
  noStroke();

  /*right arm*/
  fill(0);
  rect(gameChar_world_x + 13, gameChar_world_y - 35 - 8, 12, 5);

  /*left arm*/
  rect(gameChar_world_x - 13 - 12, gameChar_world_y - 35 - 8, 12, 5);

  /*right foot*/
  rect(gameChar_world_x + 5, gameChar_world_y - 5 - 8, 10, 10);

  /*left foot*/
  rect(gameChar_world_x - 15, gameChar_world_y - 5 - 8, 10, 10);
}

// code for drawing character standing front facing
function drawStandingFrontFacing() {
  //standing facing forwards
  /*hoodie*/
  fill(255, 0, 0);
  ellipse(gameChar_world_x, gameChar_world_y - 50, 38, 45);

  /*head*/
  fill(200, 150, 150);
  ellipse(gameChar_world_x, gameChar_world_y - 50, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  ellipse(gameChar_world_x + 5, gameChar_world_y - 55, 10, 10);
  strokeWeight(2);
  line(gameChar_world_x - 16, gameChar_world_y - 55, gameChar_world_x + 14, gameChar_world_y - 60);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(255, 0, 0);
  rect(gameChar_world_x - 13, gameChar_world_y - 35, 26, 30);

  /*sling*/
  stroke(0)
  strokeWeight(2);
  line(gameChar_world_x - 13, gameChar_world_y - 35, gameChar_world_x - 13 + 26, gameChar_world_y - 35 + 30);
  strokeWeight(1);
  noStroke();

  /*right arm*/
  fill(0);
  rect(gameChar_world_x + 13, gameChar_world_y - 35, 5, 12);

  /*left arm*/
  rect(gameChar_world_x - 13 - 5, gameChar_world_y - 35, 5, 12);

  /*right foot*/
  rect(gameChar_world_x + 5, gameChar_world_y - 5, 10, 10);

  /*left foot*/
  rect(gameChar_world_x - 15, gameChar_world_y - 5, 10, 10);

}
