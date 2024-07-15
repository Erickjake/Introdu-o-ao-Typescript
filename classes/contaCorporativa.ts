import { Account } from "./Account";

export class ContaCorporativa extends Account{
    
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    emprestimo = (valor:number)=> {
        if(this.getStatus() === true){
            console.log(this.saldoDis += valor ) 
        console.log("Voce pegou um emprestimo!!")
    }
    else{
        console.log('Não foi possivel concluir a operação')
    }

    this.deposito = (depositar:number):void =>{
        if(this.getStatus() === true){
            console.log(this.saldoDis += depositar) 
            console.log("Empresa Depositou com sucesso")
        }
        else{
            console.log('Não foi possivel')
        }

    }}
}