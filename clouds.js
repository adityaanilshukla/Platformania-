function appendClouds() {
  //increase no of clouds as level difficulty increases
  for (var i = 0; i < (50 + 10*levelDifficulty); i++) {
    var x = random(-400, levelLength);
    var y = random(20, 80);
    var w = random(30, 90);
    var s = random(0.5, 1.5);

    var cloud = {
      x_pos: x,
      y_pos: y,
      width: w,
      speed: s
    };
    clouds.push(cloud);
  }
}

//moves clouds across canvas
function animateClouds() {
  for (i in clouds) {
    var cloud = clouds[i];
    cloud.x_pos += cloud.speed;
    //make clouds appear behind level start if they exceed level length
    if (cloud.x_pos > levelLength + levelDifficulty*2000) {
      cloud.x_pos = -500;
    }
  }
}

// code for drawing clouds
function drawCloud(cloud) {
  //draw a cloud
  fill(255, 255, 255);
  ellipse(cloud.x_pos, cloud.y_pos, cloud.width);
  ellipse(cloud.x_pos + cloud.width / 2, cloud.y_pos, (3 / 4) * cloud.width);
  ellipse(cloud.x_pos - cloud.width / 2, cloud.y_pos, (3 / 4) * cloud.width);
  ellipse(cloud.x_pos + cloud.width / 2 + (3 / 8) * cloud.width, cloud.y_pos, (3 / 8) * cloud.width);
  ellipse(cloud.x_pos - cloud.width / 2 - (3 / 8) * cloud.width, cloud.y_pos, (3 / 8) * cloud.width);
}
