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

const getAddressCity = (person: Person): string | undefined => {
  if (person?.address?.city) {
    return person.address.city;
  } else {
    undefined;
  }
};
const person: Person = {
  name: "rakib",
  age: 25,
  address: {
    city: "dhaka",
    street: "102",
  },
  phone: "Samsung",
};
console.log(getAddressCity(person));

// problem2
