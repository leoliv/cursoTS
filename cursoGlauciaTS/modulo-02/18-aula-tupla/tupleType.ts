// ==> Exemplo 01 - Uso simples de tupla em Typescript
let pessoa: [string, string, number];
pessoa = ['Glaucia Lemos', 'Cloud Advocate Javascript', 34];
console.log(pessoa);
// pessoa = [34, 'Glaucia Lemos', 'Cloud Advocate Javascript'];
// console.log(pessoa);
//
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1: [string, string, number];
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate Javascript', 34];
console.log(pessoa1[1]);

// ==> Exemplo 03 - Outra vez de usar Tuplas em Typescript (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = [
  'Glaucia Lemos',
  'Cloud Advocate Javascript',
  34,
];

console.log(pessoa2);

// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = [
  'Abacaxi',
  'Laranja',
  'Maça',
  'Melancia',
  'Manga',
];
console.log(...listaFrutas);

// ==> Exemplo 05 - Lista heterogênia de Tupla
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ==> Exemplo 06 - Uso de função com Tuplas
function listaPessoas(nomes: string[], idade: number[]) {
  return [...nomes, ...idade];
}
const resultado = listaPessoas(['Maria', 'Gabriela'], [25, 22]);
console.log(resultado);

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa funçao
type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa('Leonardo', 'Fernandes'));
console.log(criarPessoa('Leonardo', 'Fernandes', 'Oliveira'));
