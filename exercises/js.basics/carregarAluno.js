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
    console.log(clientes);
}


main();

