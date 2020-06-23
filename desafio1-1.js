/* 1- Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;
A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura);
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso;*/

function pessoa(nome,peso,altura){
    this.nome = nome
    this.peso = peso
    this.altura = altura
}

var paciente = new pessoa("Carlos", 84 ,1.88)

function calcIMC(pessoa){
    var imc = pessoa.peso/(pessoa.altura*pessoa.altura)
    if(imc >= 30){ 
        return (imc + `  ${pessoa.nome} você está acima do peso`)
    } else{
        return (imc + `  ${pessoa.nome} você NÃO está acima do peso`)
    }

    return imc
}

console.log(calcIMC(paciente))

/*Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;*/

function aposentado(nome,sexo,idade,contribuicao){
    this.nome = nome
    this.sexo = sexo
    this.idade = idade
    this.contribuicao = contribuicao
}

var cliente = new aposentado("Silvana","F",48,23)

function aposentar(aposentado){
    if (aposentado.idade+aposentado.contribuicao >= 85){
        return (`${aposentado.nome} , você pode se aposentar!`)
    } else{
        return (`${aposentado.nome} , você NÃO pode se aposentar!`)
    }
}
console.log(aposentar(cliente))