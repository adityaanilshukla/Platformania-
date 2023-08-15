function saveScores() {
  const storedScores = localStorage.getItem("playerScores");

  if (storedScores) {
    const storedStats = JSON.parse(storedScores);

    if (oldScores.highScore > storedStats.highScore) {
      storedStats.highScore = oldScores.highScore;
    }

    if (oldScores.highestLevel > storedStats.highestLevel) {
      storedStats.highestLevel = oldScores.highestLevel;
    }

    localStorage.setItem("playerScores", JSON.stringify(storedStats));
    console.log("Updated scores saved to local storage.");
  } else {
    localStorage.setItem("playerScores", JSON.stringify(oldScores));
    console.log("Scores saved to local storage.");
  }
}

//checks if player has exceeded old scores
function updateLocalStorageStats(currentGameStats) {
  if (!oldScores) return;

  if (currentGameStats.gameScore > oldScores.highScore) {
    oldScores.highScore = currentGameStats.gameScore;
  }

  if (currentGameStats.level > oldScores.highestLevel) {
    oldScores.highestLevel = currentGameStats.level;
  }

  saveScores();
}

// Update the player's stats during gameplay.
function updateCurrentGameStats() {
  currentGameStats.level += 1;
}

function loadOldScores() {
  let storedScores = localStorage.getItem("playerScores");
  if (storedScores) {
    oldScores = JSON.parse(storedScores);
  } else {
    createLocalStorageScores();
    storedScores = localStorage.getItem("playerScores");
    oldScores = JSON.parse(storedScores); // Update oldScores
  }
}
//code for testing
function changeLocalScore(property, value) {
  if (!oldScores) {
    console.error("No oldScores found.");
    return;
  }

  if (oldScores.hasOwnProperty(property)) {
    oldScores[property] = value;
    saveScores();
    console.log(`Updated ${property} in local storage.`);
  } else {
    console.error(`Property ${property} does not exist in oldScores.`);
  }
}

function createLocalStorageScores() {
  initialScores = {
    highestLevel: 1,
    highScore: 0,
    // ...other stats...
  };
  localStorage.setItem("playerScores", JSON.stringify(initialScores));
  console.log("Initial scores created in local storage.");
}

function fileLoaded(data) {
  try {
    oldScores = JSON.parse(data.join(""));
  } catch (error) {
    console.error("Error parsing player stats:", error);
  }
}

function deleteLocalStorageScores() {
  localStorage.removeItem("playerScores");
  console.log("Player scores removed from local storage.");
}
