// variáveis [type annotation]
let nome: string = 'Leo Oliveira';
console.log(nome);

// Arrays [Type Annotation]
let animais: string[] = ['Elephante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

// Object [Type Annotation]
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: 'Toyota Yasis Sedan XS', ano: 2019, preco: 80.0 };
console.log(carro);

// Function [type annotation]
function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumeros(5, 4));
