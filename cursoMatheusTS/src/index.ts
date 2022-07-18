let x: number = 10;
x = 10;
console.log(x);

let n = 12;
n = 26;
console.log(n);

let firstName: string = 'Leonardo';
let age: number = 26;
const isAdmin: boolean = true;

console.log(typeof firstName);

firstName = 'Fernandes';
console.log(firstName);

// array
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(firstName.toUpperCase());

// Tuplas
let myTuple: [number, string, string[]];
myTuple = [4, 'Leo', ['my', 'project']];

// objects literals -> {prop: value}
const user: { name: string; age: number } = {
  name: 'Leonardo',
  age: 28,
};

console.log(user);
