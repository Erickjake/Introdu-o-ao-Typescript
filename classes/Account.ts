export abstract class Account {
    private name :string
    private readonly accountNumber :number
    saldoDis:number = 20
    private status:boolean = true

    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name:string):void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = ():string =>{
        return this.name
    }

    deposito = (depositar:number):void =>{
        if(this.validateStatus()){
            console.log(this.saldoDis += depositar) 
        }
        else{
            console.log('Não foi possivel')
        }

    }

    saque = (valor:number):void =>{
        if(this.validateStatus() === true && this.saldoDis >= valor){
            console.log(this.saldoDis -= valor)
            console.log("Você sacou!!")
        }
        else{
            console.log('Não foi possivel')
        }
        
    }

    saldo = ():void =>{
        console.log(this.saldoDis)
    }

    private validateStatus = ():boolean => {
        if(this.status){
            return this.status
        }
        throw new Error("Conta Inválida");
        
    }

    readonly getStatus = ():boolean =>{
        if(this.status === true){
            return this.status
        }
        throw new Error("Falha");
        
    }
}


