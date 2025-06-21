const findTheOldest = function (people) {
  let oldestPerson = "";
  let oldestAge = Number.NEGATIVE_INFINITY;

  people.forEach((person) => {
    let birthYear = person.yearOfBirth;
    let deathYear = person.yearOfDeath || new Date().getFullYear();
    let age = (deathYear - birthYear);
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
