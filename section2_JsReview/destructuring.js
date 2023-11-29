const person = {
  name: "Hugo",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// const printName = (personData) => {
//   console.log(personData.name);
// };

// printName(person);

const printName = ({ name }) => {
    console.log(name);
  };
  
  printName(person);
  