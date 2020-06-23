/*Intro
Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

;*/

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }

/*Adicionar transações
Crie uma função createTransaction para adicionar uma nova transação no array de transações 
de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte 
formato:*/

function createTransaction(transaction){

    user.transactions.push(transaction)

    if(transaction.type == 'credit'){
        user.balance += transaction.value
    } else{
        user.balance -= transaction.value
    }

    return user.balance
}


var transacaoCredit = {
  type: 'credit',
  value: 50.5
}

var transacaoDebit = {
    type: 'debit',
    value: 10.5
  }

var transacaoDebit2 = {
type: 'debit',
value: 20.5
}

/* O type pode ser credit para créditos e debit para débitos da conta do usuário. Quanto uma 
transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.
Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.*/
console.log(createTransaction(transacaoCredit))
console.log(createTransaction(transacaoDebit))
console.log(createTransaction(transacaoDebit2))
console.log(user)

/*Relatórios
Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
*/

function getHigherTransactionByType(parametroTransacao){
    var maiorValor = [{type:'', value:0}]
    for(x of user.transactions){
        if(x.type == parametroTransacao && maiorValor[0].value < x.value){
            
            maiorValor.pop()
            maiorValor.push(x)           
        }
    }
    return maiorValor
}

console.log(getHigherTransactionByType("debit"))
console.log(getHigherTransactionByType("credit"))

/*Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
getAverageTransactionValue(); // 83.3
*/

function getAverageTransactionValue(user){
    
    var total = 0
    for(x of user.transactions){ 
        total += x.value
    }
    total = total/user.transactions.length
   
    return console.log(total)

}

getAverageTransactionValue(user)

/*Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, 
o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
getTransactionsCount(); // { credit: 5, debit: 3 }*/

function getTransactionsCount(user){
    var cred = 0
    var deb = 0
    for(x of user.transactions){
        if(x.type == 'credit')cred += 1
        else deb += 1
    }
    totalTran = {
        credit: cred,
        debit: deb
    }
    return totalTran

}

console.log(getTransactionsCount(user))