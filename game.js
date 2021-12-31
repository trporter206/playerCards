function Player(firstName, lastName, gender, age, city, primarySport) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
  this.city = city;
  this.primarySport = primarySport;

  this.getFirstName = function() { return this.firstName };
  this.setFirstName = function(value) { this.firstName = value };

  this.getLastName = function() { return this.lastName };
  this.setLastName = function(value) { this.lastName = value };

  this.getGender = function() { return this.gender };
  this.setGender = function(value) { this.gender = value };

  this.getCity = function() { return this.city };
  this.setCity = function(value) { this.city = value };

  this.getPrimarySport = function() { return this.primarySport };
  this.setPrimarySport = function(value) { this.primarySport = value };

  this.getAge = function() { return this.age };
  this.setAge = function(value) { this.age = value };

  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

function Game(type, team1, team2) {
  this.type = type;
  this.team1 = team1;
  this.team2 = team2;
  this.score = [0,0]

  this.getGameType = function() { return this.type };
  this.setGameType = function(value) { this.type = value };
  this.getTeams = function() { return [this.team1, this.team2] };
  this.getScore = function() { return this.score }

  this.setTeams = function(value1, value2) {
                    this.team1 = value1;
                    this.team2 = value2;
  }

  this.addPlayer = function(player) {
    this.playerList.push(player);
    return this.playerList;
  }

  this.removePlayer = function(player) {
    this.playerList.splice(this.playerList.indexOf(player), 1)
    return this.playerList;
  }

  this.generateScore = function() {
    const score1 = Math.floor(Math.random() * 10)
    const score2 = Math.floor(Math.random() * 10)
    this.score = [score1, score2]
  }

  this.determineWinners = function() {
    if (this.score[0] === this.score[1]){
      return `It's a tie game with a score of ${this.score[0]} - ${this.score[1]}`
    } else if (this.score[0] > this.score[1]) {
      return `${this.score[0]} - ${this.score[1]}, ${this.team1[0].firstName} wins!`
    } else {
      return `${this.score[0]} - ${this.score[1]}, ${this.team2[0].firstName} wins!`
    }
  }
}















const p1 = new Player('Torri', 'Porter', 'male', 26, 'vancouver', 'basketball');
const p2 = new Player('Nikki', 'Layson', 'male', 29, 'vancouver', 'running');

const g1 = new Game('basketball', [p1], [p2])
g1.generateScore()
console.log(g1.determineWinners())
