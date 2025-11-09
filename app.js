import data from './randomData.json' assert { type: 'json' };
import { gerarDadosAluno, gerarDadosAula, gerarDadosPagamento, gerarDadosProfessor } from './services/gerarDados.js'
import { Aluno } from './classes/Aluno.js';
import { Aula } from './classes/Aula.js';
import { Pagamento } from './classes/Pagamento.js';
import { Professor } from './classes/Professor.js';

const newAula = new Aula();
const aula = newAula.createAula(gerarDadosAula(data));
const lerAula = newAula.readAula(aula.aula_id);
console.log(lerAula);
const atualizarAula = newAula.updateAula(aula.aula_id,{disciplina: 'Matematica', tipo_aula:'Individual (Presencial)'});
console.log("dados atualizados: ", atualizarAula);
newAula.deleteAula(aula.aula_id);
console.log(newAula);




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
*/

/*
const novoAluno = new Aluno ({...gerarDadosAluno(data)});
const novoProfessor = new Professor ({...gerarDadosProfessor(data)});
const novoAula = new Aula ({...gerarDadosAula(data)});
const novoPagamento = new Pagamento ({...gerarDadosPagamento(data)});

console.log(novoAluno);
console.log(novoProfessor);
console.log(novoAula);
console.log(novoPagamento);*/
