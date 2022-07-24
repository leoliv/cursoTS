// ==> Exemplo 01 - Uso de Colchetes:
const frutas: string[] = ['Abacaxi', 'Laranja', 'Maça', 'Melancia', 'Manga'];
console.log(frutas[2]);

// ==> Exemplo 02 - Array Object:
const frutas1: Array<string> = [
  'Abacaxi',
  'Laranja',
  'Maça',
  'Melancia',
  'Manga',
];
console.log(frutas1[3]);

// ==> Exemplo 03 - Adicionando mais strings com o método 'push':
const idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarin');
console.log(idiomas);

// ==> Exemplo 04 - Identificar tamanho do array - método 'length':
let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);

// ==> Exemplo 05 - Exemplo de Array com Spread Operator:
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

// ==> Exemplo 06 - Exemplo de Array com laço de iteração:
let linguagensArray: string[] = new Array(
  'Javascript',
  'Python',
  'Java',
  'PHP',
  'C#',
);

function funcaoLinguagens(linguagens: string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagensArray[i]);
  }
}

funcaoLinguagens(linguagensArray);
