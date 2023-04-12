/////////////////////////////////Display Screens When You switch between modes/////////////////////////////////
// mode 0 is start of game
// mode 1 is game running
// mode 2 is when player runs out of lives
// mode 3 is when player completes level

//Game menu when you first launch game
function mode0() {

  // draw background screen
  menuBackground();

  textSize(70);
  //random function to create shimmering text effect
  fill(random(0, 255), 0, 0);
  text('PLATFORMANIA!', width / 4.5, height / 5);
  fill(255, 255, 255);

  textSize(30);
  // prompt player to either play game or look at controls
  text('press enter to start game', width / 3, height / 2.5);
  textSize(20);
  text('press space to shoot enemies', width / 2.8, height / 3 + 150);
  text('press arrow keys to move character', width / 3, height / 3 + 200);
}

// menu when player loses all lives
function mode2() {

  // draw background screen
  menuBackground();
  fill(255, 255, 255);
  textSize(50);
  text('You Died', 250, 140);
  text('Level Reached: ' + gameLevel, 250, 200);
  text('Score: ' + gameScore, 250, 260);
  text('Press enter to restart', 250, 320);
  backgroundMusic.stop();


  // ensure that sadTune is only played once
  //varible is reset to false when reset sketch is called
  if (runOut_lives_played == false) {
    sadTune.play();
    runOut_lives_played = true;
  }
}

//menu when player completes level
function mode3() {

  // draw background screen
  menuBackground();
  fill(255, 255, 255);
  textSize(50);
  text('Level Complete!', 250, 180);
  text('Press enter to start next level', 250, 260);
  backgroundMusic.stop();

  // ensure that levelComplete is only played once
  // varible is reset to false when reset sketch is called
  if (levelComplete_Played == false) {
    levelComplete.play();
    levelComplete_Played = true;
  }

}

//background for menu screens
function menuBackground() {
  drawSky();
  drawGround();
}
