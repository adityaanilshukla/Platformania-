/////////////////////////////////Display Screens When You switch between modes/////////////////////////////////
// drawGameMenu is start of game
// drawOutOfLivesPage is when player runs out of lives
// drawCompleteLevelPage is when player completes level
// displayPlayerStatsPage displays player stats

function drawGameMenu() {

  // draw background screen
  menuBackground();

  textSize(70);
  textAlign(CENTER); // Set text alignment to center
  //random function to create shimmering text effect
  fill(random(0, 255), 0, 0);
  text('PLATFORMANIA!', width / 2, height / 5); // Center the text on the x-axis
  fill(255, 255, 255);
  textSize(30);
  // prompt player to either play game or look at controls
  text('press enter to start game', width / 2, height / 2.5); // Center the text on the x-axis
  textSize(20);

  verticalSpace = 0.269 * height //vertical grows in proportion to height

  text('press space to shoot enemies', width / 2, height / 4 + verticalSpace); // Center the text on the x-axis
  text('press arrow keys to move character', width / 2, height / 4 + verticalSpace*1.3); // Center the text on the x-axis
  text('press / to view your stats', width / 2, height / 4 + verticalSpace*1.6); // Center the text on the x-axis
  textAlign(LEFT); //reset textAlign
}



// menu when player loses all lives
function drawOutOfLivesPage() {

  // draw background screen
  menuBackground();
  fill(255, 255, 255);
  textSize(50);
  text('You Died', 250, 140);
  text('Level Reached: ' + currentGameStats.level, 250, 200);
  text('Score: ' + currentGameStats.gameScore, 250, 260);
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
function drawCompleteLevelPage() {

  // draw background screen
  menuBackground();
  fill(255, 255, 255);
  textSize(50);
  textAlign(CENTER,CENTER);
  text('Level Complete!', width/2, 180);
  text('Press enter to start next level', width/2 , 260);
  backgroundMusic.stop();

  // ensure that levelComplete is only played once
  // varible is reset to false when reset sketch is called
  if (levelComplete_Played == false) {
    levelComplete.play();
    levelComplete_Played = true;
  }

  //reset textAlign
  textAlign(LEFT);

}

function displayPlayerStats() {
  // Set up the player stats data
  const thisPageStats = {
    "highestLevel": 23,
    "highScore": 2350,
    "totalMoneyEarned": 550,
    "totalLevelsCompleted": 12,
    "totalEnemiesKilled": 32,
    "totalEnemiesAvoided": 18,
    "totalDistanceTraveled": 12000,
    "totalTimesDied": 5
  };

  // Clear the screen
  menuBackground(0);

  // Set up text display
  textSize(30);
  textAlign(CENTER);
  fill(255);

  // Display each player stat
  let yPos = height / 4;
  for (let key in thisPageStats) {
    text(`${key}: ${thisPageStats[key]}`, width / 2, yPos);
    yPos += 50; // Adjust the y-position for the next line
  }

  // Prompt to return to menu
  textSize(20);
  text('Press Enter to return to the menu', width / 2, height - 50);
  
  textAlign(LEFT); // Reset textAlign
}



//background for menu screens
function menuBackground() {
  drawSky();
  drawGround();
}
