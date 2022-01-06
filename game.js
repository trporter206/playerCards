const playerFactory = (firstName, lastName, gender, age, favoriteSport, maxLevel) => {
  return {
    //about the player
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    favoriteSport: favoriteSport,
    maxLevel: maxLevel,
    friends: [],

    //get and set functions
    getFirstName() { return firstName },
    setFirstName(value) { firstName = value },
    getLastName() { return lastName },
    setLastName(value) { lastName = value },
    getGender() { return gender },
    setGender(value) { gender = value },
    getCity() { return city },
    setCity(value) { city = value },
    getFavoriteSport() { return favoriteSport },
    setFavoriteSport(value) { favoriteSport = value },
    getAge() { return age },
    setAge(value) { age = value },
    getFriends() { return friends },

    //return full name
    fullName() {
      return `${firstName} ${lastName}`
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

    addFriend(playerFirstName) {
      for (i=0; i<playerList.length; i++) {
        if (playerList[i].firstName === playerFirstName) {
          this.friends.push(playerList[i])
          return `${playerList[i].firstName} has been added to your friends`;
        }
      }
      return `Could not find ${playerFirstName}`
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

    getName() { return name },
    setName(newName) { name = newName },
    getAddress() { return address },
    setAddress(newAddress) { address = newAddress },
    getActivePlayers() { return activePlayers },
    getType() { return type },
    setType(newType) { type = newType },
    getHours() { return hours },
    setHours(newHours) { hours = newHours },

  }
}

playerList = []
courtList = []

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
    playerList.push(newPlayer)
  })
}

getPlayerFormInfo()
