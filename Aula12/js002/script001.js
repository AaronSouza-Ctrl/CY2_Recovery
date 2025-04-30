let Guilherme = document.createElement('h4');
Guilherme.textContent = "Olá, Guilherme";
document.body.appendChild(Guilherme);

document.getElementById('Guilherme').textContent = "Olá, Guilherme";

let nome = prompt("Qual é o seu nome?");

//Concatenação
document.getElementById('Linha1').textContent = "Bem vindo, " +nome+ "!";

//Concatenação
document.getElementById('Linha2').textContent = `Bem vindo, ${nome}!`;

//Operações matemáticas
let texto1 = prompt("Digite um número");
let texto2 = prompt("Digite outro número");

let numero1 = Number(texto1);
let numero2 = Number(texto2);

let soma = numero1 + numero2;
document.getElementById('Linha3').textContent = `A soma de ${numero1} + ${numero2} é igual a ${soma}`;