//constructor function for creating enemies
function Enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;
  this.currentX = x;
  this.inc = 1;
  this.isLeft = true;
  this.isRight = true;

  //makes enemy patrol left to right
  this.update = function() {
    this.currentX += this.inc;
    if (this.currentX > this.x + this.range) {
      this.inc = -1;
      this.isLeft = false;
      this.isRight = true;
    } else if (this.currentX < this.x) {
      this.inc = 1;
      this.isLeft = true;
      this.isRight = false;
    }
  }

  //draw enemy walking left or right based on patrol position
  this.draw = function() {
    this.update();
    fill(255, 0, 0);
    if (this.isLeft == false) {
      enemyWalkingLeft(this.currentX, this.y);
    } else {
      enemyWalkingRight(this.currentX, this.y);
    }
  }

  //returns true if gameChar is in contact with enemy
  this.checkContact = function(gc_x, gc_y) {
    var d = dist(this.currentX, this.y, gc_x, gc_y);
    if (d < 20) {
      return true;
    }
    return false;


  }

  //returns true if bullet strikes enemy's body
  this.checkIfKilled = function(bullet_x, bullet_y) {

    //check if bullet's y position in range of enemy's height
    //else value is false
    if (bullet_y > this.y - 100 && bullet_y < this.y) {

      let bulletDist_toEnemy = abs(bullet_x - this.currentX);
      //check if bullet x position 20 less than enemy's body
      if (bulletDist_toEnemy < 20) {
        return true;
      }
    } else {
      return false;
    }
  }
}

//append enemies to enemies array
function appendEnemies() {

  //increase amount  of enemies as level becomes more difficult
  while (enemies.length < 3 * levelDifficulty) {
    var x = random(600, levelLength);
    var enemy = new Enemy(x, floorPos_y, 100);
    //only append to array if enemies are not on canyon and enemy patrols dont overlap
    if (!OverlappCheckerEnemies(enemy) && !EnemyOnCanyon(enemy)) {
      enemies.push(enemy);
    }
  }
}


// append enemies on platforms
function appendEnemiesOnPlatforms() {
  for (i in platforms) {
    if (platforms[i].length > 150) {

      // variable to decide if enemy should be placed on platform through random function
      let enemyDecider = round(random(2));
      if (enemyDecider == 2) {
        let enemy = new Enemy(platforms[i].x, platforms[i].y, 100);
        enemies.push(enemy);
      }
    }
  }
}


//returns true if two enemies patrol range overlap
//only for appending at game startm, not for in game logic
function OverlappCheckerEnemies(enemy) {
  var overlapping = false;
  for (var j = 0; j < enemies.length; j++) {
    var tempEnemy = enemies[j];
    var d = dist(enemy.x, floorPos_y - 10, tempEnemy.x, floorPos_y - 10);
    if (d < 3 * enemy.range) {
      overlapping = true;
    }
  }
  return overlapping;
}



//returns true if enemy on top of canyon while appending
//not for when game is running
function EnemyOnCanyon(enemy) {
  var overlapping = false;
  for (var j = 0; j < canyons.length; j++) {
    var canyon = canyons[j];
    var d = dist(canyon.x_pos, floorPos_y, enemy.x, floorPos_y - 10);
    if (d < 2 * canyon.width) {
      overlapping = true;
    }
  }
  return overlapping;
}


// draw enemies by looping through enemies array
function drawEnemies() {
  for (i in enemies) {
    var enemy = enemies[i];
    enemy.draw();
  }
}

//drawing code for enemies
function enemyWalkingLeft(xPos, yPos) {
  /*hoodie*/
  fill(0, 0, 0);
  ellipse(xPos + 3, yPos - 50 - 4, 25, 40);

  /*head*/
  fill(200, 150, 150);
  ellipse(xPos, yPos - 50 - 4, 20, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(xPos - 8, yPos - 56 - 4, 3, 5);
  line(xPos - 8, yPos - 60 - 4, xPos + 8, yPos - 55 - 4);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(0, 0, 0);
  rect(xPos - 10, yPos - 39, 20, 30);

  /*right arm*/
  fill(0);
  rect(xPos + 5, yPos - 35 - 4, 12, 5);

  /*left arm*/
  rect(xPos - 20, yPos - 35 - 4, 12, 5);

  /*right foot*/
  rect(xPos, yPos - 9, 10, 10);

  /*left foot*/
  rect(xPos - 15, yPos - 9, 10, 10);
}



function enemyWalkingRight(xPos, yPos) {
  /*hoodie*/
  fill(0, 0, 0);
  fill(0, 0, 0);
  ellipse(xPos - 3, yPos - 53, 25, 40);

  /*head*/
  fill(200, 150, 150);
  ellipse(xPos, yPos - 53, 20, 35);

  /*eye patch*/
  fill(0);
  stroke(0);
  strokeWeight(2);
  line(xPos - 8, yPos - 58, xPos + 8, yPos - 63);
  strokeWeight(1);
  noStroke();

  /*body*/
  fill(0, 0, 0);
  rect(xPos - 10, yPos - 38, 20, 30);

  /*sling*/
  stroke(0)
  strokeWeight(2);
  line(xPos - 10, yPos - 33, xPos + 10, yPos - 8);
  strokeWeight(1);
  noStroke();

  /*right arm*/
  fill(0);
  rect(xPos + 10, yPos - 38, 12, 5);

  /*left arm*/
  rect(xPos - 15, yPos - 38, 12, 5);

  /*right foot*/
  rect(xPos - 10, yPos - 8, 10, 10);

  /*left foot*/
  rect(xPos + 5, yPos - 8, 10, 10);

}
