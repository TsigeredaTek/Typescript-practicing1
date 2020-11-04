// Storing first name in a variable.
let firstName: string = "Tsigereda";

//Storing the number of states in a variable.
const numbOfState: number = 50;

//Computing 5 plus 4 and storing in a variable. 
const addingNumbers: number = 5 + 4;

function sayHello(): void {
    alert("Hello World!");
}
sayHello();

const checkAge = (name: string, age: number): void => {
    if (age < 21) {
        alert(" Sorry " + name + ", you aren't old enough to view this page!");
    } else {
            alert("Welcome!");
        }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let myFavouriteVeg: string[] = ["Cabbage", "Carrot", "Spinach", "Potato", "Okra"];

for (let i = 0; i < myFavouriteVeg.length; i++) {
    console.log(myFavouriteVeg[i]);
}

let pet= {
    name:"Bobby",
    breed: "German Shepherd",
};



console.log(pet.name, pet.breed);

let people: person[] = [
    {
        name:"Daniel",
        age : 35,
    },

    {
        name: "Lily",
        age: 30,
    },

    {
        name: "Mike",
        age: 18,
    },

    {
        name: "Ruth",
        age: 20,
    },

    {
        name: "Sara",
        age: 29,
    },
];



for (let i = 0; i <people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(string: string): number
{ 
    return string.length;
}

let stringLength: number = getLength("helloWorld");

if (stringLength % 2 ===0) {
    console.log("The work is easy!");
} else {
    console.log("The work is hard!");
}

interface pet{
    name: string,
    breed: string,
}

interface person{
      name: string,
      age: number,
}