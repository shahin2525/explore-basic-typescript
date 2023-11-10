# My TypeScript Project

## Questions

1.  Question-1?

    - Answer: Typescript helps us to handle error and bug fixing in our project . It also helps us to maintain code readability and clarity

2.  Question-2?
    - Answer: (?) = Optional chaining helps us to handle undefine .
      (??) = nullish coalescing operator helps us when we have to make decision depend on null or undefine value .
      example : const isAuthenticated = null;
      const result = isAuthenticated?? "Guest"
3.  Question-3?

    - Answer: There are several way to handle asynchronous operation in typescript . for example async/await or Promise or callback. The advantage of using async/await is more readable and it can handle error easily and its code is like synchronous

4.  Question-4?

    - Answer: An enum is a special class that represent group of constant.
      Enum-Advantage: Enum helps to maintain code effeiently . It also helps to handle error properly at running time . It also produces code readability and clarity.

5.  Question-5?

    - Answer:Type guard is a powerful feature of typescript .It checks value type in block scope .

6.  Question-6?

        - Answer: Readonly properties can be used to make your code more robust and prevent accidental changes to important data.
         example :

          interface Number{

    readonly x: number;
    readonly y: number;
    }

const point: Number = {
x: 10,
y: 20,
};

if i try to change my assigned value
point.x = 30 (it will not run)

7.  Question-7?

    - Answer: union type can be used to make code more flexible and expressive .

    Example : type Color = string|number;
    const color:Color = "red" (valid)
    const color:Color = 10 (valid)
