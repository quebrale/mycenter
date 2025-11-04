import { Aluno } from "./classAluno.js";

let clientes = []
console.log(clientes)
function carregarAluno (aluno) {
    return new Promise((resolve) => {
       resolve(clientes.push(aluno))
    })
    .then(console.log(aluno.nomeCompleto ()));
}

async function main () {
    console.log("A Carregar Aluno...");
    const novoAluno = new Aluno("Teresa","Jesus","teresa@gmail.com",12,7,['matematica','ciencias'],"Joana Jesus","2025-11-02",true)
    await carregarAluno(novoAluno);

}


main();

const {primeiroNome, ultimoNome, email, dataInscricao} = clientes[0]; // Desestruturação do objeto Aluno, lembra-se dos parametros da classe
console.log(primeiroNome, ultimoNome, email, dataInscricao);

const atualizarAno = {...clientes[0],'ano': 8}; // Operador Spread para atualizar o ano do aluno
console.log(atualizarAno); // Cria um novo objeto com o ano atualizado ja nao e uma instancia da classe Aluno
console.log(clientes[0]); // Continua a ser uma instancia da classe Aluno com o ano original e mantem todos os metodos da classe
