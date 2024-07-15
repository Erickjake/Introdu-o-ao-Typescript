import { ContaCorporativa } from "./classes/contaCorporativa"
import { ContaPessoal } from "./classes/contaPessoal"
import { ContaPoupanca } from "./classes/contaPoupaca"


// Instacia da Conta Pessoal 
const pessoa = new ContaPessoal(10, "Erickson", 100 )
pessoa.deposito(500)
pessoa.saque(100)
console.log(pessoa)

// Instacia da Conta Corporativa
const empresa = new ContaCorporativa("Erickson", 1)
console.log(empresa)
empresa.emprestimo(500)
empresa.deposito(100)


// Instacia da Conta Poupança 
const poupanca = new ContaPoupanca("Erickson", 2)
console.log(poupanca)
poupanca.deposito(500)
poupanca.saque(50)