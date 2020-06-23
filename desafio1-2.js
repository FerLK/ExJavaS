/*Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 
Os dados a serem armazenados são:
Nome: Rocketseat
Cor: Roxo
Foco: Programação
Endereço:
Rua: Rua Guilherme Gembala
Número: 260
Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260 */

function empresa(nome,cor,foco,rua,numero){
    this.nome = nome
    this.cor = cor
    this.foco = foco
    this.ende = {
        rua : rua,
        numero : numero
    }

}

const rocket = new empresa("RocketSeat","Roxo","Programação","Rua Guilherme Gembala",260)

function retornaEnder(empresa){
    return (`A empresa ${empresa.nome} está localizada em ${empresa.ende.rua}, ${empresa.ende.numero}`)
}

console.log(retornaEnder(rocket))

/*Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias 
que trabalha. Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias 
em um array.
As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:
const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop*/

var tecnologia = [{ nome: 'C++', especialidade: 'Desktop' },{ nome: 'Python', especialidade: 'Data Science' },
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }]

console.log(tecnologia[2])

function programador (nome,idade,tecnologia){
    this.nome = nome
    this.idade = idade
    this.tecnologia = tecnologia
}

var programador1 = new programador("Carlos",32,tecnologia)

function buscaProgramador(programador){
    return (`O ${programador.nome} tem ${programador.idade}  anos e usa a tecnologia ${programador.tecnologia[0].nome}  com especialidade em ${programador.tecnologia[0].especialidade}`)
}

console.log(buscaProgramador(programador1))
