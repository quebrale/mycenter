import data from '../randomData.json' assert { type: 'json' };
import { gerarDadosAluno, gerarDadosAula, gerarDadosPagamento, gerarDadosProfessor } from './services/gerarDados.js'
import { Aluno } from './classes/Aluno.js';
import { Aula } from './classes/Aula.js';
import { Pagamento } from './classes/Pagamento.js';
import { Professor } from './classes/Professor.js';



/*
// TESTING NEW ALUNO SERVICE LAYER 

const novoAluno = new Aluno()

const aluno = novoAluno.createAluno(gerarDadosAluno(data));
novoAluno.readAluno(aluno.id)

console.log("Aluno antes da alteracao:", novoAluno);

novoAluno.updateAluno(aluno.id,{nome:'Joana',apelido:'Baixaria'})

console.log("Aluno depois da alteracao:",novoAluno.updateAluno(aluno.id,{nome:'Joana',apelido:'Baixaria'}));

novoAluno.deleteAluno(aluno.id)

console.log ("Deleted:",novoAluno)


// TESTING NEW AULA SERVICE LAYER 
const newAula = new Aula();
const aula = newAula.createAula(gerarDadosAula(data));
const lerAula = newAula.readAula(aula.aula_id);
console.log(lerAula);
const atualizarAula = newAula.updateAula(aula.aula_id,{disciplina: 'Matematica', tipo_aula:'Individual (Presencial)'});
console.log("dados atualizados: ", atualizarAula);
newAula.deleteAula(aula.aula_id);
console.log(newAula);

//TESTING NEW PAGAMENTO

const newPagamento = new Pagamento();
const pagamento = newPagamento.createPagamento(gerarDadosPagamento(data));
console.log("Pagamento criado:", pagamento);
console.log("Pagamento lido:", newPagamento.readPagamento(pagamento.pagamento_id));
console.log("Pagamento alterado:'", newPagamento.updatePagamento(pagamento.pagamento_id, {valor:2000, modo:"Cash"}));

newPagamento.deletePagamento(pagamento.pagamento_id);
console.log(newPagamento);

// TESTING NEW PROFESSOR

const newProfessor = new Professor();
const professor = newProfessor.createProfessor(gerarDadosProfessor(data));
console.log("Professor criado: ", professor)
console.log("Professor lido: ", newProfessor.readProfessor(professor.professor_id));
console.log("Professor atualizado: ", newProfessor.updateProfessor(professor.professor_id,{nome: 'Beatriz'}));

newProfessor.deleteProfessor(professor.professor_id);
console.log("Professor apagado: ", newProfessor);

*/

/*

// PRIMEIRA CRIACAO DE INSTANCIAS QUANDO ESTAVAM ASSOCIADAS A CRIACAO DE OBJECTOS ATRAVES DAS CLASSES 

const novoAluno = new Aluno ({...gerarDadosAluno(data)});
const novoProfessor = new Professor ({...gerarDadosProfessor(data)});
const novoAula = new Aula ({...gerarDadosAula(data)});
const novoPagamento = new Pagamento ({...gerarDadosPagamento(data)});

console.log(novoAluno);
console.log(novoProfessor);
console.log(novoAula);
console.log(novoPagamento);*/
