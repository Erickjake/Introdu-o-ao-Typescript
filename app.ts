// interface Pessoa {
//     nome:string,
//     idade:number,
//     profissao?:string
// }

// const pessoa:Pessoa = {
//     nome:'Erick',
//     idade: 24,
//     profissao: "REP"
// }
// console.log(pessoa)

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Voce é um estudante',
    viewer: 'voce pode vizualizar'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')