function exercicio1() {
    console.log("Olá, Mundo!");
}

function exercicio2() {
    const nome = prompt("Digite seu primeiro nome");
    const sobrenome = prompt("Digite seu sobrenome");

    const resultado = ('Olá ' + nome + sobrenome);

    console.log(resultado);
}

function exercicio3() {
    const num1 = parseFloat(prompt("Digite um numero"))
    const num2 = parseFloat(prompt("Digite um numero"))

    console.log(`O resultado é: ${num1 + num2}`)
}

function exercicio4() {
    const nota1 = parseFloat(prompt("Insira sua primeira nota"))
    const nota2 = parseFloat(prompt("Insira sua segunda nota"))
    const nota3 = parseFloat(prompt("Insira sua terceira nota"))

    console.log(`A sua média é ${nota1 + nota2 + nota3 / 3}`)
}

function exercicio5() {
    const num1 = parseFloat(prompt("Digite um numero"))

    const suce = num1 + 1
    const ante = num1 - 1

    console.log("O numero sucessor é: " + suce)
    console.log("O numero antecessor é: " + ante)
}

function exercicio6() {
    const salario = parseFloat(prompt("Digite o seu salário"))

    const novoSalario = salario * 1.15

    console.log("O valor do salário reajustado é: " + Number(novoSalario.toFixed(2)))
}

function exercicio7() {
    const valor = parseFloat(prompt("Digite um valor em Reais"))

    const cotacaoDolar = 5.19;
    const conversao = valor / cotacaoDolar

    console.log("O valor em Dolares é: " + Number(conversao.toFixed(2)))
}

function exercicio8() {
    const num = parseFloat(prompt("Digite um numero"))

    if (num % 2 === 0) {
        console.log(`O numero ${num} é par`)
    } else {
        console.log(`O numero ${num} é impar`)
    }
}

function exercicio9() {
    const idade = parseFloat(prompt("Digite sua idade"))

    if (idade >= 18) {
        console.log("Você é maior de idade")
    } else {
        console.log("Você é menor de idade")
    }

}

function exercicio10() {
    const num1 = parseFloat(prompt("Digite um numero"))
    const num2 = parseFloat(prompt("Digite um numero"))

    if (num1 > num2) {
        console.log(`O numero ${num1} é maior que ${num2}`)
    } else if (num1 < num2) {
        console.log(`O numero ${num2} é maior que ${num1}`)
    } else {
        console.log(`Os numeros são iguais `)
    }
}

function exercicio11() {
    const nota1 = parseFloat(prompt("Insira sua primeira nota"))
    const nota2 = parseFloat(prompt("Insira sua segunda nota"))

    const media = (nota1 + nota2) / 2

    if (media >= 7) {
        console.log(`Sua média é ${media}, você foi aprovado parabéns!!`)
    } else {
        console.log(`Sua média é ${media}, você foi reprovado `)
    }
}

function exercicio12() {
    const num1 = parseFloat(prompt("Digite um numero"))

    if (num1 >= 1) {
        console.log(`O numero ${num1} é positivo`)
    } else if (num1 == 0) {
        console.log(`O numero ${num1} é zero`)
    } else {
        console.log(`O numero ${num1} é negativo`)
    }
}

function exercicio13() {
    const idade = parseFloat(prompt("Digite sua idade"))

    if (idade < 5) {
        console.log("Idade inválida!");
    } else if (idade <= 7) {
        console.log("Sua categoria de nadador é infantil A");
    } else if (idade <= 11) {
        console.log("Sua categoria de nadador é infantil B");
    } else if (idade <= 13) {
        console.log("Sua categoria de nadador é juvenil A");
    } else if (idade <= 17) {
        console.log("Sua categoria de nadador é juvenil B");
    } else {
        console.log("Sua categoria de nadador é Adulto");
    }
}

function exercicio14() {
    const nomeUsuario = prompt("Insira seu nome de usuário");
    const senha = prompt("Insira sua senha");

    if (nomeUsuario === "admin" && senha === "1234") {
        console.log("Login efetuado com sucesso");
    } else {
        console.log("Falha na autenticação");
    }
}

function exercicio15() {
    const peso = prompt("Digite seu peso em kg");
    const altura = prompt("Digite sua altura em metros");

    const imc = peso / (altura * altura)
    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
}

exercicio15()