// draw platforms by looping through platforms array
function drawPlatforms() {
  for (const p of platforms) {
    p.update();
    p.draw();
  }
}

//append platforms to level
//only for appending at game start, not for in game logic
function appendPlatforms() {

  // append elevator platform at start of level
  platforms.push(new VerticalMovePlatform(200, floorPos_y - 150, 150, 400 / 4));

  // append platform with incremental x position with refrence to x position of elevator platform
  while (platforms.length < (18 + 5 * levelDifficulty)) {

    //randomly generate y values to create platforms at varrying height
    yPosition = platforms.at(-1).y - floor(random(-60, 60));

    // append only if platform is higher than floorPos_y -80
    if (yPosition < floorPos_y - 80) {
      platforms.push(new Platform(
        platforms.at(-1).x + 300,
        yPosition, 200));
    }
  }

}

// constructor function for static platform
class Platform {

  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
  }


  // code for drawing platforms
  draw() {
    noStroke(0);
    fill(255, 140, 0);
    rect(this.x, this.y, this.length, 20);
  }

  // this update function will be updated by HorizontalMovePlatform and VerticalMovePlatform
  update() {

  }

  // check if gameChar is in contact with platforms,
  // if within platform limits return true.
  // If not within platform limits return return false
  checkContact(gc_x, gc_y) {
    if (gc_x > this.x && gc_x < this.x + this.length) {
      const d = this.y - gc_y;

      if (d < 5 && d >= 0) {
        return true;
      }
    }

    return false;
  }
}

// constructor function for HorizontalMovePlatform
class HorizontalMovePlatform extends Platform {
  constructor(x, y, length, range) {
    super(x, y, length);
    this.range = range;
    this.anchor = x;
    this.direction = 3;
  }

  // if HorizontalMovePlatform exceeds range, change its direction
  update() {
    if (abs(this.anchor - this.x) > this.range) {
      this.direction *= -1;
    }
    this.x += this.direction;
  }
}


class VerticalMovePlatform extends Platform {
  constructor(x, y, length, range) {
    super(x, y, length);
    this.range = range;
    this.anchor = y;
    this.direction = 0.85;
  }

  // if VerticalMovePlatform exceeds range, change its direction
  update() {
    if (abs(this.anchor - this.y) > this.range) {
      this.direction *= -1;
    }
    this.y += this.direction;
  }
}
