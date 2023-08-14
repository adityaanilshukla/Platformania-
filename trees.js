// code to draw tree
function drawTree(tree) {
  fill(100, 70, 36);
  // draw tree
  fill(100, 70, 36);
  rect(tree.x_pos, tree.y_pos, tree.width, tree.height);
  fill(0, tree.greenessFactor, 0);
  triangle(tree.x_pos + tree.width / 2, tree.y_pos - tree.height - 50, tree.x_pos - 50, tree.y_pos, tree.x_pos + tree.width + 50, tree.y_pos);
  triangle(tree.x_pos + tree.width / 2, tree.y_pos - tree.height - 100, tree.x_pos - 50, tree.y_pos - 50, tree.x_pos + tree.width + 50, tree.y_pos - 50);
}


//appends tree positions to tree array
//increases amount of trees with game difficulty
//add comment here
function appendTrees() {
  while (trees.length < (7 + 4 * levelDifficulty)) {
    var x = random(200, levelLength);
    var height = random(80, 120);
    var tree = {
      x_pos: x,
      y_pos: floorPos_y - height,
      width: 40,
      height: height,
      //randomly generate a shade of green to add more natural look
      greenessFactor: random(50, 200)
    };
    // only append trees if it is not on canyon and not overlapping
    if (!isTreeOnCanyon(tree) && !OverlappCheckerTree(tree)) {
      trees.push(tree);
    }
  }
}

//returns true if tree on canyon
function isTreeOnCanyon(tree) {
  var onCanyon = false;
  for (i in canyons) {
    var canyon = canyons[i];
    var x1_limit = canyon.x_pos - tree.width;
    var x2_limit = canyon.x_pos + canyon.width + tree.width;
    if (tree.x_pos > x1_limit && tree.x_pos < x2_limit) {
      onCanyon = true;
      break; //exit the for loop
    }
  }
  return onCanyon; //true or false
}


//returns true if trees overlapp each other
function OverlappCheckerTree(tree) {
  var overlapping = false;
  for (var j = 0; j < trees.length; j++) {
    var other = trees[j];
    var d = dist(tree.x_pos, floorPos_y, other.x_pos, floorPos_y);
    if (d < 2 * tree.width) {
      overlapping = true;
    }
  }
  return overlapping;
}
