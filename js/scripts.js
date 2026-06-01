alert("Bem-vindo!");

//let idade = 20;
//idade = 21;
//console.log(idade)

//const cidade = "Fortaleza";
//const nome = "Ana";
//nome = "Maria";

//Ex
//let estado
//if (true) {
//estados = "BA"
//}
//console.log(estado)

//Jeito Errado
//if (true) {
//var nome = "João";
//}
//console.log(nome);

//Jeito Certo
//if (true) {
//let nome ="João;"
//}
//console.log(nome);

//Jeito Errado
//var nome = "Ana";
//nome = "Maria";
//console.warn(nome);

//Jeito Certo
//let nomeUser = "Ana";
//   nomeUser = "Maria";
//console.warn(nomeUser);

//Jeito Certo
//var nome;
//console.log(nome);
//nome = "João";

//Jeito Errado
//console.log(nome);
//nome = "João";

//Jeito Errado
//console.log(nome)
//let nome; = "João"

console.log(prompt("Digite seu nome"));

//let soma = prompt("Deseja sair");
//console.log(resposta);

//---------------------------------------
//let numero1 = 10;
//let numero2 = 5;
// Operações e saídas no console
//console.log(numero1 + numero2); // 15
//console.log(numero1 - numero2); // 5
//console.log(numero1 * numero2); // 50
//console.log(numero1 / numero2); // 2

//let n1 = Number(prompt("N1"));
//let n2 = Number(prompt("N2"));
//console.log(n1 + n2);

//let nome = "João";
//console.log("Ola" + nome);

//let nome = "Maria";
//console.log(`Olá $(nome)`);

// Coleta de dados
let nome = prompt("Seu nome");
let idade = Number(prompt("Sua idade"));

// Exibição
alert(`Olá ${nome}`);
console.log(`Idade: ${idade}`);

// Cálculo e Saída
let proximo = idade + 1;
alert(`Próximo ano: ${proximo}`);

//Mini Projeto 1:
if (idade >= 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade");
}

//Mini Projeto 2:
let nota = Number(prompt("Digite sua nota"));
if (nota >= 7) {
  alert("Aprovado");
} else if (nota >= 5) {
  alert("Recuperação");
} else {
  alert("Reprovado");
}

//Mini Projeto 3:
let numero = Number(prompt("Digite um número"));
if (numero % 2 === 0) {
  alert("Número par");
} else {
  alert("Número ímpar");
}

//Mini Projeto 4:
let n1 = Number(prompt("N1"));
let n2 = Number(prompt("N2"));
let operacao = prompt("Digite a operação (+, -, *, /)");
let resultado;

if (operacao === "+") {
  alert(n1 + n2);
} else if (operacao === "-") {
  alert(n1 - n2);
} else if (operacao === "*") {
  alert(n1 * n2);
} else if (operacao === "/") {
  alert(n1 / n2);
} else {
  alert("Inválido");
}


