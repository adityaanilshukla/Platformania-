// commentary
//
// Platforms Extension
// I implemented the platforms extension into my game using constructor functions. In my game
// there are three types of platforms, static, horizontally moving and vertically moving platforms.
//
// vertically moving platforms
// At the start of the game level, a vertically moving platform brings the player to an altitude at which static platforms are found.
// These static platforms are evenly spaced and extend till the end of the game level. This gives the player the option of compleating the level by
// avoiding most of the ground obstacles.
//
// horizontally moving platforms
// Secondly, I added horizontally moving platforms across wide canyons. These canyons are too wide for the player to jump across. To cross these wide canyons,
// the player must jump onto the horizontally moving platforms and hitch a ride across. If the player does not time his/her jump properly, they will fall into the canyon.
//
//
// challenging portions
// I found the moving platforms extension particulary challenging to implement. This was primarily due to the different syntax used by constructor functions.
// Not being used to the syntax, lead to bugs that took hours to correct. A particualr bug that I faced was the platform not changing direction upon reacahing its maximum
// range. This was occuring as I was passing the platform three arguments instead of four. Since the update function did not have enough information, the platform did not change
// direction. Debugging these errors ultimately improved my understanding of constructor functions.
//
// Skills I learnt
// I learnt how to debug and work around problems in my code. This helped me understand how a programmer must think. Futhermore I learnt how to write code intelligently using commets
// and constructor functions.

// Refrences
// body falling sound
// nathanolson. (2015, September 9). Body Falls Various Sound FX
//   [Video]. YouTube. https://www.youtube.com/watch?v=IMIC_Ttf3NU&ab_channel=nathanolson
//
// Gunshot sound
// Mister Sound. (2018, September 17). Realistic Gunshot Sound Effect
//   [Video]. YouTube. https://www.youtube.com/watch?v=f53fti1kwgc&ab_channel=MisterSound
//
// Nostalgia
// xmasbell
// backgroundMusic
// Boss_Time
// Royalty Free 8-Bit Background Music Downloads. (n.d.). Royalty Free 8-Bit Background Music Downloads. Fesliyanstudios. Retrieved March 27, 2022,
//   from https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6

// object for switching between various game modes
const mode = {
  gameMenu: false,
  statsPage: false,
  gamePlaying: false,
  playerOutOfLives: false,
  playerCompletedLevel: false,
};

//change all modes to false except the one passed as argument
function changeMode(modeObject, exceptionMode) {
  for (let modeKey in modeObject) {
    if (modeKey === exceptionMode) {
      modeObject[modeKey] = true;
    } else {
      modeObject[modeKey] = false;
    }
  }
}

// game character variables
let gameChar_x;
let gameChar_y;
let cameraPos_x;
let cameraPos_y;
let gameChar_world_x;
let gameChar_world_y;
let gameChar_width;
let gameCharLives;
let gameScore;

//declaring bullets array
let bullets = [];

// declaring y position of floor throughout game
let floorPos_y = 450;

// damp letiable used for one pole filter
const damp = 0.9;

//sound effect letiables
let runSound;
let jumpSound;
let collectableSound;
let flagPoleSound;
let fallingDeath;
let gunshot;
let backgroundMusic;
let levelComplete;
let sadTune;

// boolean variables used to check if menu screen sounds have been played
let levelComplete_Played;
let runOut_lives_played;

// player interaction boolean variables
let isLeft, isRight, isFalling, isPlummeting, hitByEnemy, onPlatform;

// in game objects
let collectables;
let canyons;
let clouds;
let trees;
let levelLength;
let levelDifficulty;
let platforms;
let enemies;
let flagPole;

//load sounds and volumes
function preload() {
  soundFormats("mp3", "wav");
  collectableSound = loadSound("assets/ChimeBellMuted1.mp3");
  //runSound = loadSound("assets/FootstepsGrass3.mp3");
  jumpSound = loadSound("assets/BootsJump1.mp3");
  flagPoleSound = loadSound("assets/xmasbell");
  fallingDeath = loadSound("assets/Body Falling Sound.mp3");
  gunshot = loadSound("assets/gunshot.mp3");
  backgroundMusic = loadSound("assets/backgroundMusic.mp3");
  levelComplete = loadSound("assets/Boss_Time.mp3");
  sadTune = loadSound("assets/Nostalgia.mp3");

  collectableSound.setVolume(0.1);
  //runSound.setVolume(0.4);
  jumpSound.setVolume(0.5);
  flagPoleSound.setVolume(0.03);
  fallingDeath.setVolume(0.8);
  gunshot.setVolume(0.2);
  backgroundMusic.setVolume(0.05);
  levelComplete.setVolume(0.1);
  sadTune.setVolume(0.1);
}

function setup() {
  // initialise thse variables at start of game
  // initialise gameMenu so that player sees main menu
  mode.gameMenu = true;
  levelDifficulty = 1;
  createCanvas(1024, 576);
  gameCharLives = 3;
  levelLength = 7000;
  gameScore = 0;
  gameLevel = 1;
  resetSketch();
}

function draw() {
  //game start menu
  clear();
  if (mode.gameMenu) {
    drawGameMenu();
  }

  //game playing mode
  if (mode.gamePlaying) {
    ///////////DRAWING CODE//////////
    drawSky();

    // declaring target x and y position for one pole filter
    const targetPos_x = gameChar_world_x - gameChar_x;
    const targetPos_y = gameChar_world_y - gameChar_y;

    //one pole filter function to make camera tracking more smooth
    cameraPos_x = cameraPos_x * damp + targetPos_x * (1 - damp);
    cameraPos_y = cameraPos_y * damp + targetPos_y * (1 - damp);

    // push and pop variables to move objects golbal position with respect to gameChar
    push();
    // translate view as player moves
    translate(-cameraPos_x, -cameraPos_y);
    drawGround();
    drawClouds();
    animateClouds();
    drawCanyons();
    drawMountains();
    drawTrees();
    drawCollectables();
    renderFlagPole();
    collectCollectables();
    fallIntoCanyonCheck();
    checkIfGameCharInContactWithEnemies();
    checkIfGameCharIsOnAnyPlatforms();
    drawPlatforms();
    drawEnemies();
    CheckIfGameCharIsLeftBoundry();
    //the game character
    drawGameChar();
    moveBullets();
    checkFlagPole();
    pop();

    ///////////INTERACTION CODE//////////

    // reduce lives if player hits enemy
    // change gameMode to playerOutOfLives
    if (hitByEnemy) {
      if (gameCharLives > 0) {
        gameChar_world_x = 100;
        gameChar_world_y = floorPos_y;
        hitByEnemy = false;
      } else {
        //mode.playerOutOfLives = true;
        changeMode(mode, "playerOutOfLives");
      }
    }

    // make player fall when Plummeting
    // restrict player movement so he cant move in canyon
    if (isPlummeting == true) {
      gameChar_world_y += 10;
      isLeft = false;
      isRight = false;
      // call livesCounter to apply falling logic to player
      livesCounter();
    }

    // make falling true or false if player is below floor position
    if (gameChar_world_y < floorPos_y) {
      isFalling = true;
    } else {
      isFalling = false;
    }

    // code to move gamechar left or right based on arrow key input by player
    if (isLeft) {
      gameChar_world_x -= 5;
    }
    if (isRight) {
      gameChar_world_x += 5;
    }

    // prevent player from going beyond leftmost level boundry
    function CheckIfGameCharIsLeftBoundry() {
      if (gameChar_world_x < 100) {
        gameChar_world_x += 5;
      }
    }

    // function to check if gameChar is in contact with enemies
    function checkIfGameCharInContactWithEnemies() {
      // return from function if gameOver
      if (checkIsGameOver()) {
        return;
      }

      // loop through enemy positions and checkContact with player
      for (i in enemies) {
        let enemy = enemies[i];
        let isContact = enemy.checkContact(gameChar_world_x, gameChar_world_y);
        // if player touches enemies reduce lives
        if (isContact == true) {
          hitByEnemy = true;
          gameCharLives--;
          break;
        }
      }
    }

    //changes game mode once level is complete
    if (gameChar_world_x >= flagPole.x_pos + 200) {
      isLeft == false;
      isRight == false;
      changeMode(mode, "playerCompletedLevel");
    }

    //display game stats
    fill(0, 0, 0);
    noStroke();
    textSize(20);
    text("Lives: " + gameCharLives, 20, 20);
    text("score: " + gameScore, 140, 20);
    text("Level: " + gameLevel, 260, 20);
    text("Difficulty: " + levelDifficulty + "/5", 900, 20);
  }

  //switch to playerOutOfLives and display out of lives menu
  if (mode.playerOutOfLives) {
    drawOutOfLivesPage();
  }

  //display level complete menu when player completes a level
  if (mode.playerCompletedLevel) {
    drawCompleteLevelPage();
  }

  if (mode.statsPage) {
    displayPlayerStats();
  }
}

// bullet creation code
// called when player presses spacebar
function createBullets() {
  let bullet_x = gameChar_world_x;
  let bullet_y = gameChar_world_y - 30;

  // if character is facing left bullets move in negative direction
  let bulletSpeed = 8;
  if (isLeft == true) {
    bulletSpeed = -8;
  }

  // create object with bullet position and speed properties
  let bullet = {
    x_pos: bullet_x,
    y_pos: bullet_y,
    speed: bulletSpeed,
  };

  // push bullet object to bullets array
  bullets.push(bullet);

  // play gunshot sound
  gunshot.play();
}

// move bullets across sceane
function moveBullets() {
  // loop through bullet positions and draw bullets
  for (i in bullets) {
    let bullet = bullets[i];
    fill(0, 0, 0);
    noStroke();
    ellipse(bullet.x_pos, bullet.y_pos, 10, 10);

    // update bullets position using speed property
    bullet.x_pos += bullet.speed;
  }

  // if bullet is 400pixels infront or behind gameChar splice bullet
  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];
    if (
      bullet.x_pos > gameChar_world_x + 400 ||
      bullet.x_pos < gameChar_world_x - 400
    ) {
      bullets.splice(i, 1);
    }
  }
  //code for checking if bullet has struck enemy
  for (i in enemies) {
    let enemy = enemies[i];
    for (j in bullets) {
      // check if is bullet strikes usign enemy constructor function
      let isShot = enemy.checkIfKilled(bullets[j].x_pos, bullets[j].y_pos);
      if (isShot == true) {
        enemies.splice(i, 1);
        bullets.splice(j, 1);
        gameScore += 10;
        break;
      }
    }
  }
}

function drawGameChar() {
  if (onPlatform && isLeft) {
    drawWalkingLeft();
  } else if (onPlatform && isRight) {
    drawWalkingRight();
  } else if (isLeft && isFalling) {
    drawJumpingLeft();
  } else if (isRight && isFalling) {
    drawJumpingRight();
  } else if (isLeft) {
    drawWalkingLeft();
  } else if (isRight) {
    drawWalkingRight();
  } else if (onPlatform) {
    drawStandingFrontFacing();
  } else if (isFalling || isPlummeting) {
    drawJumpingFacingForwards();
  } else {
    drawStandingFrontFacing();
  }
}

// if player runs out of lives end game
function checkIsGameOver() {
  let gameOver = false;

  if (gameCharLives < 1) {
    gameOver = true;
  }
  return gameOver;
}

//check if gameChar is on any Platforms
//if so update gameChars positions based on platform movement
// function checkIfGameCharIsOnAnyPlatforms() {
function checkIfGameCharIsOnAnyPlatforms() {
  if (isFalling) {
    var isContact = false;
    onPlatform = false;
    for (i in platforms) {
      var platform = platforms[i];
      var isContact = platform.checkContact(gameChar_world_x, gameChar_world_y);
      if (isContact == true) {
        onPlatform = true;
        if (platform instanceof HorizontalMovePlatform) {
          gameChar_world_x += platform.direction;
        } else if (platform instanceof VerticalMovePlatform) {
          gameChar_world_y += platform.direction;
        }
        break;
      }
    }
    // if not on any platforms make gameChar continue falling
    if (isContact == false) {
      gameChar_world_y = floor((gameChar_world_y += 1));
    }
  }
}

// loop through collectables and check if gameChar is close enough to collect it
function collectCollectables() {
  for (let i = 0; i < collectables.length; i++) {
    //check if game character is in the range of the collectable
    if (
      dist(
        gameChar_world_x,
        gameChar_world_y,
        collectables[i].x_pos + 15,
        collectables[i].y_pos
      ) < 20
    ) {
      collectables[i].isFound = true;
      gameScore += 1;
      //remove collected collectable from array
      collectables.splice(i, 1);
      // play collectable sound
      collectableSound.play();
    }
  }
}

// loop through canyon positions and check if gameChar is within its boundry
function fallIntoCanyonCheck() {
  for (let i = 0; i < canyons.length; i++) {
    let canyon = canyons[i];
    //check if game character is over the canyon
    if (
      gameChar_world_x > canyon.x_pos + gameChar_width / 2 &&
      gameChar_world_y == floorPos_y &&
      gameChar_world_x < canyon.x_pos + canyon.width - gameChar_width / 2 &&
      gameChar_world_y == floorPos_y
    ) {
      // if gameChar is within canyon boundry make character fall
      isPlummeting = true;
    }
  }
}

//reduces lives if game character dies and resets position
function livesCounter() {
  //plus 350 to add buffer time between fall and position reset
  if (gameChar_world_y > height + 350) {
    // play falling death sound
    // reduce lives by 1 and bring player to start of level
    fallingDeath.play();
    gameCharLives -= 1;
    gameChar_world_x = width / 2;
    gameChar_world_y = floorPos_y;
    isPlummeting = false;
  }

  // if player runs out of lives change mode and reset amount of lives
  if (gameCharLives == 0) {
    changeMode(mode, "playerOutOfLives");
    gameCharLives = 3;
  }
}

// function to check if player has reahed flagPole
function checkFlagPole() {
  let d = dist(gameChar_world_x, floorPos_y, flagPole.x_pos, floorPos_y);
  if (d < 10) {
    flagPole.isReached = true;

    // ensure that bell can only ring once
    if (flagPole.bellRung == false) {
      flagPoleSound.play();
      flagPole.bellRung = true;
    }
  }
}

// if statements to control game when
// keys are pressed.

function keyPressed() {
  // code to alter game mode when player preses keys
  // switch to game playing mode
  if (mode.gameMenu && keyCode === ENTER) {
    changeMode(mode, "gamePlaying");
    backgroundMusic.loop();
  }

  //switch to stats page from gameMenu
  if (mode.gameMenu && keyCode === 191) {// the / key
    changeMode(mode, "statsPage");
  }

  //switch from stats page to menu page
  if (mode.statsPage && keyCode === ENTER) {
    changeMode(mode, "gameMenu");
  }

  // switch to game playing mode after losing all lives
  if (mode.playerOutOfLives && keyCode === ENTER) {
    setup();
    resetSketch();
    changeMode(mode, "gamePlaying");
    backgroundMusic.loop();
  }
  // switch to game playing mode after completing level
  if (mode.playerCompletedLevel && keyCode === ENTER) {
    changeMode(mode, "gamePlaying");
    backgroundMusic.loop();
    //ensures level difficulty never exceeds 5
    if (levelDifficulty < 5) {
      levelDifficulty += 1;
      //used to increase the length of the level
      levelLength += 2000;
    }
    gameLevel += 1;
    resetSketch();
  }
  // if player presses spacebar call createBullets
  //bullets can only be created if game is playing
  if (keyCode == 32 && mode.gamePlaying) {
    createBullets();
  }
  if (keyCode == 37) {
    isLeft = true;
    //runSound.play();
  } else if (keyCode == 39) {
    isRight = true;
    //runSound.play();
  } else if (keyCode == 38) {
    //character can only jump when he is on the ground or on a platform
    // jumpSound only plays if game is playing
    if ((gameChar_world_y == floorPos_y || onPlatform) && mode.gamePlaying) {
      gameChar_world_y -= 100;
      jumpSound.play();
    }
  }
}

// if statements to control game when
// keys are released.
function keyReleased() {
  // return if game is over
  let isGameOver = checkIsGameOver();
  if (isGameOver == true) {
    return;
  }
  // conditional statements to control the character when
  // keys are released.
  if (keyCode == 37) {
    isLeft = false;
    //runSound.stop();
  } else if (keyCode == 39) {
    isRight = false;
    //runSound.stop();
  }
}
