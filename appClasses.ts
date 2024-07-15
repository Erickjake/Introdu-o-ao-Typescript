// Forma Simples para construi uma classe com metodo constructor e atributos e metodos de funções 

class User {
    name:string = 'Erickson'
    age:number = 24

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
        console.log(this.age)
    }
}

const user:User = new User('Erickson', 24)
user.showName()