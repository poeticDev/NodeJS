const person = {
  name: "Hugo",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const { name, age } = person;

console.log(name, age);

const hobbies = ["Sports", "Cooking"];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

const arrayDestruct = ([hobby1, hobby2]) => {
  console.log(hobby1, hobby2);
};

arrayDestruct(hobbies);
