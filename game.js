const playerFactory = (firstName, lastName, gender, age, favoriteSport, maxLevel) => {
  return {
    //about the player
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    favoriteSport: favoriteSport,
    maxLevel: maxLevel,
    friends: {},

    //get and set functions
    getFirstName() { return this.firstName },
    setFirstName(value) { this.firstName = value },
    getLastName() { return this.lastName },
    setLastName(value) { this.lastName = value },
    getGender() { return this.gender },
    setGender(value) { this.gender = value },
    getCity() { return this.city },
    setCity(value) { this.city = value },
    getFavoriteSport() { return this.favoriteSport },
    setFavoriteSport(value) { this.favoriteSport = value },
    getAge() { return this.age },
    setAge(value) { this.age = value },
    getFriends() { return this.friends },

    //return full name
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    addCourt(name, address, type, hours) {
      let newCourt = courtFactory(name, address, type, hours)
      courtList.push(newCourt)
    },

    removeCourt(courtName) {
      for (court in courtList) {
        if (court.name = courtName) {
          courtList.splice(courtList.indexOf(court), 1)
          return;
        }
      }
      return `Could not find ${courtName}`
    },

    addFriend(playerName) {
      const players = Object.keys(playerList)
      for (i=0; i<players.length; i++) {
        const currentPlayer = playerList[players[i]]
        console.log(currentPlayer.fullName())
        if (currentPlayer.fullName() === playerName) {
          this.friends[`${currentPlayer.fullName()}`] = currentPlayer
          return `${currentPlayer.fullName()} has been added to your friends`;
        }
      }
      return `Could not find ${playerName}`
    }
  }
}

const courtFactory = (name, address, activePlayers, type, hours) => {
  return {
    name: name,
    address: address,
    activePlayers: activePlayers,
    type: type,
    hours: hours,

    getName() { return this.name },
    setName(newName) { this.name = newName },
    getAddress() { return this.address },
    setAddress(newAddress) { this.address = newAddress },
    getActivePlayers() { return this.activePlayers },
    getType() { return this.type },
    setType(newType) { this.type = newType },
    getHours() { return this.hours },
    setHours(newHours) { this.hours = newHours },

  }
}

playerList = {}
courtList = {}

function getPlayerFormInfo(){
  var form = document.getElementById('player-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    var firstName = this.elements.firstname.value
    var lastName = this.elements.lastname.value
    var gender = this.elements.gender.value
    var age = this.elements.age.value
    var favoriteSport = this.elements.sport.value
    var maxLevel = this.elements.maxlevel.value
    let newPlayer = playerFactory(firstName, lastName, gender, age, favoriteSport, maxLevel)
    playerList[`${newPlayer.fullName()}`] = newPlayer
  })
}

getPlayerFormInfo()

function getCourtFormInfo(){
  var form = document.getElementById('court-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    var courtName = this.elements.courtname.value
    var address = this.elements.address.value
    var type = this.elements.type.value
    var hours = this.elements.hours.value
    let newCourt = courtFactory(courtName, address, type, hours)
    courtList[`${newCourt.name}`] = newCourt
  })
}

getCourtFormInfo()
