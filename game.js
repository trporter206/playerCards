const playerFactory = (firstName, lastName, gender, age, city, primarySport, maxLevel) => {
  return {
    //about the player
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    city: city,
    primarySport: primarySport,
    maxLevel: maxLevel,
    //game stats
    wins: 0,
    losses: 0,
    ties: 0,
    wlRatio: 0,
    //list of team objects player is a member of
    teams: [],
    //ranking stats
    reviews: [],
    rating: 0,
    //get and set functions
    getFirstName() { return firstName },
    setFirstName(value) { firstName = value },
    getLastName() { return lastName },
    setLastName(value) { lastName = value },
    getGender() { return gender },
    setGender(value) { gender = value },
    getCity() { return city },
    setCity(value) { city = value },
    getPrimarySport() { return primarySport },
    setPrimarySport(value) { primarySport = value },
    getAge() { return age },
    setAge(value) { age = value },
    getTeam() { return team },
    setTeams(value) { team = value },
    getwlRatio() { return wlRatio },
    //return full name
    fullName() {
      return `${firstName} ${lastName}`
    },
    //add win after game victory
    addWin(){
      wins += 1
    },
    //add loss after losing game
    addLoss(){
      losses += 1
    },
    //add tie after a tie game
    addTie(){
      ties += 1
    },
    //return wins-losses-ties
    showRecord(){
      return `${wins} - ${losses} - ${ties}`
    },
    //update w/l ratio after completing a game
    updateRatio(){
      const ratio = wins / losses
      wlRatio = ratio
    },
    //leave review for other player after game
    leaveReview(review, player){
      player.reviews.push([review, thisfulName()]);
    },
    //rate other player after game
    leaveRating(rating, player){
      player.rating += rating
    }
  }
}

function Team(name, players, city) {
  //about the team
  this.name = name;
  this.players = players;
  this.city = city;
  this.wins = 0;
  this.losses = 0;
  this.ties = 0;
  this.wlRatio = 0;
  // get and set functions
  this.getPlayers = function() { return this.players }
  this.getCity = function() { return this.city }
  this.setCity = function(newCity) { this.city = newCity }
  // return team record in wins-losses-ties format
  this.getRecord = function() {
    return `${this.wins} - ${this.losses} - ${this.ties}`
  }
  //  update win/loss ratio after game
  this.updateRatio = function() {
    const ratio = this.wins / this.losses
    this.wlRatio = ratio
  }
  // add a player (object) to the team
  this.addPlayer = function(player) {
    this.players.push(player)
  }
  // remove a player (object) from the team
  this.removePlayer = function(player) {
    this.players.splice(this.players.indexOf(player), 1)
  }
  // add win after game
  this.addWin = function(){
    this.wins += 1
  }
  // add loss after game
  this.addLoss = function(){
    this.losses += 1
  }
  // add tie after game
  this.addTie = function(){
    this.ties += 1
  }

}

function Game(type, team1, team2) {
  //about the game
  this.type = type;
  this.team1 = team1;
  this.team2 = team2;
  this.score = [0,0]
  this.winner = ''
  // get and set functions
  this.getGameType = function() { return this.type };
  this.setGameType = function(value) { this.type = value };
  this.getTeams = function() { return [this.team1, this.team2] };
  this.getScore = function() { return this.score }
  this.setTeams = function(value1, value2) {
                    this.team1 = value1;
                    this.team2 = value2;
  }
  // generate a random score for the game, update eventually
  this.generateScore = function() {
    const score1 = Math.floor(Math.random() * 10)
    const score2 = Math.floor(Math.random() * 10)
    this.score = [score1, score2]
  }
  //update player/team records
  this.updateStats = function(winningTeam, losingTeam){
    winningTeam.addWin()
    losingTeam.addLoss()
    for(i=0;i<winningTeam.players.length;i++){
      winningTeam.players[i].addWin()
      winningTeam.players[i].updateRatio()
      losingTeam.players[i].addLoss()
      losingTeam.players[i].updateRatio()
    }
  }
  //determine winner of game based on score
  this.determineWinners = function() {
    if (this.score[0] === this.score[1]){
      this.team1.ties+=1
      this.team2.ties+=1
      for(i=0;i<this.team1.players.length;i++){
        this.team1.players[i].addTie()
        this.team2.players[i].addTie()
      }
      this.winner = 'Tie'
      return `It's a tie game with a score of ${this.score[0]} - ${this.score[1]}`
    } else if (this.score[0] > this.score[1]) {
      this.updateStats(this.team1, this.team2)
      this.winner = team1
      return `${this.score[0]} - ${this.score[1]}, ${this.team1.name} wins!`
    } else {
      this.updateStats(this.team2, this.team1)
      this.winner = team2
      return `${this.score[0]} - ${this.score[1]}, ${this.team2.name} wins!`
    }
  }
}

playerList = []

function getFormInfo(){
  var form = document.getElementById('player-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    var firstName = this.elements.firstname.value
    var lastName = this.elements.lastname.value
    var gender = this.elements.gender.value
    var age = this.elements.age.value
    var city = this.elements.city.value
    var primarySport = this.elements.sport.value
    var maxLevel = this.elements.maxlevel.value
    let newPlayer = playerFactory(firstName, lastName, gender, age, city, primarySport, maxLevel)
    playerList.push(newPlayer)
    console.log(playerList)
  })
}

getFormInfo()






















// const p1 = new Player('Torri', 'Porter', 'male', 26, 'vancouver', 'basketball');
// const p2 = new Player('Nikki', 'Layson', 'male', 29, 'vancouver', 'running');
// const p3 = new Player('Alison', 'Parker', 'female', 24, 'singapore', 'baseball');
// const p4 = new Player('Indigo', 'Ward', 'female', 22, 'LA', 'rollerblading');
// const p5 = new Player('Manny', 'Sign', 'male', 25, 'India', 'cricket');
// const p6 = new Player('Rachel', 'Lui', 'female', 26, 'Phillipines', 'soccer');
//
// const players = [p1,p2,p3,p4,p5,p6]
//
// const team1 = new Team('Hawks', [p1,p2,p3], 'Seattle')
// const team2 = new Team('Bears', [p4,p5,p6], 'Chicago')
//
// let count = 20
// while(count>0){
//   for(i=0;i<3;i++){
//     const g1 = new Game('basketball', team1, team2)
//     g1.generateScore()
//     console.log(g1.determineWinners())
//     count-=1
//   }
// }
//
// console.log(p1.wlRatio)
