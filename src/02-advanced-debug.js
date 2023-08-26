console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      console.log(gameKey)
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()
function numPointsScored(playerName) {
  let playerStats = getPlayerStats(playerName);
  return playerStats.points;
}

function shoeSize(playerName) {
  let playerStats = getPlayerStats(playerName);
  return playerStats.shoe;
}

function teamColors(teamName) {
  let team = getTeamByName(teamName);
  return team.colors;
}

function teamNames() {
  return [homeTeamName(), awayTeamName()];
}

function playerNumbers(teamName) {
  let team = getTeamByName(teamName);
  let playerNumbers = [];
  for (let playerName in team.players) {
    playerNumbers.push(team.players[playerName].number);
  }
  return playerNumbers;
}

function playerStats(playerName) {
  let player = getPlayerByName(playerName);
  return {
    number: player.number,
    shoe: player.shoe,
    points: player.points,
    rebounds: player.rebounds,
    assists: player.assists,
    steals: player.steals,
    blocks: player.blocks,
    slamDunks: player.slamDunks
  };
}

function bigShoeRebounds() {
  let playerWithLargestShoe = getPlayerWithLargestShoe();
  return playerWithLargestShoe.rebounds;
}

function mostPointsScored() {
  let mostPoints = 0;
  let playerName = "";

  for (let teamKey in game) {
    let team = game[teamKey];
    for (let playerKey in team.players) {
      let player = team.players[playerKey];
      if (player.points > mostPoints) {
        mostPoints = player.points;
        playerName = playerKey;
      }
    }
  }

  return playerName;
}

console.log(mostPointsScored());
