import { Account } from "./Account";

export class ContaPoupanca extends Account{
    
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    deposito = (depositar: number):void => {
        if(this.getStatus() === true){
            console.log(this.saldoDis += (depositar + 10))
            console.log('Deposito Realizado com sucesso em sua conta poupança')
        }
        else{
            console.log('Houve algum problema!!')
        }
    }
}