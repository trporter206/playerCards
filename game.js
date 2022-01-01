function Player(firstName, lastName, gender, age, city, primarySport) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
  this.city = city;
  this.primarySport = primarySport;
  this.wins = 0;
  this.losses = 0;
  this.ties = 0;
  this.wlRatio = 0;

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

  this.getwlRatio = function() { return this.wlRatio };

  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

  this.addWin = function(){
    this.wins += 1
  }

  this.addLoss = function(){
    this.losses += 1
  }

  this.addTie = function(){
    this.ties += 1
  }

  this.showRecord = function(){
    return `${this.wins} - ${this.losses} - ${this.ties}`
  }

  this.updateRatio = function(){
    const ratio = this.wins / this.losses
    this.wlRatio = ratio
  }
}

function Game(type, team1, team2) {
  this.type = type;
  this.team1 = team1;
  this.team2 = team2;
  this.score = [0,0]
  this.winner = ''

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
      for(i=0;i<this.team1.length;i++){
        this.team1[i].addTie()
        this.team2[i].addTie()
      }
      this.winner = 'Tie'
      return `It's a tie game with a score of ${this.score[0]} - ${this.score[1]}`
    } else if (this.score[0] > this.score[1]) {
      for(i=0;i<this.team1.length;i++){
        this.team1[i].addWin()
        this.team1[i].updateRatio()
        this.team2[i].addLoss()
        this.team2[i].updateRatio()
      }
      this.winner = team1
      return `${this.score[0]} - ${this.score[1]}, ${this.team1[0].firstName} wins!`
    } else {
      for(i=0;i<this.team1.length;i++){
        this.team1[i].addLoss()
        this.team1[i].updateRatio()
        this.team2[i].addWin()
        this.team2[i].updateRatio()
      }
      this.winner = team2
      return `${this.score[0]} - ${this.score[1]}, ${this.team2[0].firstName} wins!`
    }
  }
}








const p1 = new Player('Torri', 'Porter', 'male', 26, 'vancouver', 'basketball');
const p2 = new Player('Nikki', 'Layson', 'male', 29, 'vancouver', 'running');
const p3 = new Player('Alison', 'Parker', 'female', 24, 'singapore', 'baseball');
const p4 = new Player('Indigo', 'Ward', 'female', 22, 'LA', 'rollerblading');
const p5 = new Player('Manny', 'Sign', 'male', 25, 'India', 'cricket');
