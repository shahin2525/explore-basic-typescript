// problem 1
const getLengthOrSquare = (param: number | string) => {
  if (typeof param === "string") {
    return param.length;
  } else if (typeof param === "number") {
    return param * param;
  }
};

getLengthOrSquare("rakib");

// problem1

// problem2
interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}
const person: Person = {
  name: "rakib",
  age: 25,
  address: {
    city: "mirpur",
    street: "102",
  },
  phone: "Samsung",
};
const getAddressCity = (person: Person): string | undefined => {
  if (person?.address?.city) {
    return person.address.city;
  } else {
    return undefined;
  }
};

getAddressCity(person);

// problem2

//problem3
class Cat {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
}

const cat = new Cat("pusy", "cat");
const isCat = (cat: Cat) => {
  if (cat instanceof Cat) {
    return "It is a cat";
  } else {
    return "It is not a cat";
  }
};
isCat(cat);
// problem3

// problem4
type List = [number, string, number, string];
const list: List = [10, "two", 30, "four"];

const getTotalNumber = (array: List): number => {
  let total = 0;
  for (const item of array) {
    if (typeof item === "number") {
      total = total + item;
    }
  }

  return total;
};
getTotalNumber(list);
// problem4

// problem5

interface Car {
  make: string;
  model: string;
  releaseYear: number;
}
interface Driver {
  name: string;
  licenseNumber: number;
}
const car: Car = { make: "Toyta", model: "l-2012", releaseYear: 2022 };
const driver: Driver = { name: "Rakib", licenseNumber: 10011 };
const getPropertiesFromAllObject = (car: Car, driver: Driver): object => {
  return { ...car, ...driver };
};
getPropertiesFromAllObject(car, driver);

// problem5

// problem6
const numbers1: number[] = [1, 2, 3, 4, 5];
const numbers2: (number | string)[] = [1, 2, 3, "four"];
const checkArrayOfNumber = (param: unknown) => {
  if (Array.isArray(param) && param.every((item) => typeof item === "number")) {
    const total = param.reduce((acc, current) => {
      return acc + current;
    }, 0);
    console.log(total);
  } else {
    console.log("this is not array");
  }
};
checkArrayOfNumber(numbers2);

// problem6

// problem7
const numbers: number[] = [1, 2, 3, 4, 5, 2];
const fruits: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber: number = 2;
const targetString: string = "date";

const findFirstOccurrence = <T>(param: T[], target: T) => {
  if (Array.isArray(param)) {
    return param.indexOf(target);
  }
  return -1;
};
findFirstOccurrence(fruits, targetString);

// problem7
