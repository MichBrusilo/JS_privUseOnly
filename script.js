// Zadanie 1

const string1 = 'Hello';
const string2 = 'world';
const joinStrings = (`${string1} ${string2}`);

console.log(joinStrings);

// Zadanie 2

const multiply = (a =1, b = 1) => a*b;
console.log(multiply(2));
console.log(multiply(6,5));

// Zadanie 3

const averageReduce = (...args) => args.reduce((suma, arg) => suma + arg)/args.length;

console.log(averageReduce(1,2,3)); 

// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);


// Zadanie 5

const array1 = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, ,lastName]=array1;

console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);