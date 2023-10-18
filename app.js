function createInstructor(firstName, lastName) {
    return {
      firstName,
      lastName
    };
  }
  

  const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};


const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };

  
  function createAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        return noise;
      }
    };
  }
  
  const d = createAnimal("dog", "bark", "Woooof!");
  console.log(d.bark()); // Output: "Woooof!"
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
  console.log(s.bleet()); // Output: "BAAAAaaaa"
  