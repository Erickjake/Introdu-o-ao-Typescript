import { Account } from "./Account"

export class ContaPessoal extends Account {
    private cpf:number

    constructor(cpf:number , name:string, accountNumber:number){
        super(name, accountNumber)
        this.cpf = cpf
    }
}
