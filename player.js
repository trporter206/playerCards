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

const p1 = new Player('Torri', 'Porter', 'male', 26, 'vancouver', 'basketball')
console.log(p1.fullName())
