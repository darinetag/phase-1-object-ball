function gameObject() {
  const blocks =  {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {number: 0,shoe: 16,points: 22,rebounds: 12,assists: 12,steals: 3,blocks: 1,slamDunks: 1,},
        "Reggie Evans": {number: 30,shoe: 14,points: 12,rebounds: 12,assists: 12,steals: 12,blocks: 12,slamDunks: 7,},
        "Brook Lopez": {number: 11,shoe: 17,points: 17,rebounds: 19,assists: 10,steals: 3,blocks: 1,slamDunks: 15,},
        "Mason Plumlee": {number: 1,shoe: 19,points: 26,rebounds: 12,assists: 6,steals: 3,blocks: 8,slamDunks: 5,},
        "Jason Terry": {number: 31,shoe: 15,points: 19,rebounds: 2,assists: 2,steals: 4,blocks: 11,slamDunks: 1,},
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {number: 4,shoe: 18,points: 10,rebounds: 1,assists: 1,steals: 2,blocks: 7,slamDunks: 2,},
        "Bismak Biyombo": {number: 0,shoe: 16,points: 16,rebounds: 7,assists: 7,steals: 12,blocks: 15,slamDunks: 10,},
        "DeSagna Diop": {number: 2,shoe: 14,points: 24,rebounds: 12,assists: 12,steals: 4,blocks: 5,slamDunks: 5,},
        "Ben Gordon": {number: 8,shoe: 15,points: 33,rebounds: 3,assists: 2,steals: 1,blocks: 1,slamDunks: 0,},
        "Brendan Haywood": {number: 33,shoe: 15,points: 6,rebounds: 12,assists: 12,steals: 22,blocks: 5,slamDunks: 12,},
      },
    },
  };
  return blocks;
}


function numPointsScored(playerName){

  Object.values(gameObject()).map(team => {
      if (team.players[playerName]){
        point = team.players[playerName].points;
      }
  });
 return point;

}

function shoeSize(playerName){

  Object.values(gameObject()).map(team => {
      if (team.players[playerName]){
        shoes = team.players[playerName].shoe;
      }
  });
 return shoes;

}

function teamColors(teamN){

  Object.values(gameObject()).map(team => {
      if (team.teamName === teamN){
      return clrs = team.colors;
      }
  });
 return clrs;

}


function teamNames(){

  const teamnames = Object.values(gameObject()).map(team => {
   return team.teamName;

  });
 return teamnames;
}


function playerNumbers(teamN){

  Object.values(gameObject()).map(team => {
      if (team.teamName === teamN){
       numbers = Object.values(team.players).map(item => item.number)

      }

  });
 return numbers
}


function playerStats(playerName){

   Object.values(gameObject()).map(team => {
      if (team.players[playerName]){
        stats = team.players;
      }
  });
  return stats;

}

function bigShoeRebounds() {
  const Arr = [];
  const rebounds =[];

  Object.values(gameObject()).forEach(team => {
    Object.values(team.players).forEach(player => {
      Arr.push(player.shoe);
      rebounds.push(player.rebounds)
    });
  });

  const max = Math.max(...Arr); 
  const i = Arr.indexOf(max);
  return rebounds[i];
}

function mostPointsScored() {
  let maxP = 0;
  let playerMax;

  Object.values(gameObject()).forEach(team => {
      Object.keys(team.players).forEach(playerN => {
      const player = team.players[playerN]
      if (player.points > maxP) {
        maxP = player.points;
        playerMax = playerN;
      }
      });
  });

  return playerMax;

}




function winningTeam (){
let teamPoints = [];
Object.values(gameObject()).forEach(team => {
  const totalP = Object.values(team.players).reduce((pre,current)=> pre + current.points,0);
  teamPoints.push({ teamName: team.teamName, points: totalP });


});

const teamN = Object.values(teamPoints).reduce((a, b) => (a.points > b.points ? a : b));
return teamN.teamName

}

function playerWithLongestName() {
let maxN = 0;
let playerMax;

Object.values(gameObject()).forEach(team => {
    Object.keys(team.players).forEach(playerN => {
    if (playerN.length > maxN) {
      maxN = playerN.length;
      playerMax = playerN;
    }
    });
});

return playerMax;

}


function doesLongNameStealATon(){
const longName = playerWithLongestName();
let maxS = 0;
  let playerMax;

  Object.values(gameObject()).forEach(team => {
      Object.keys(team.players).forEach(playerN => {
      const player = team.players[playerN]
      if (player.steals> maxS) {
        maxS = player.steals;
        playerMax = playerN;
      }
      });
  });

   return (longName === playerMax) ? true : false;





}
// loved every bit of this assignment, that was a lie. 