import data from './randomData.json' assert { type: 'json' };
import { gerarDadosAluno, gerarDadosAula, gerarDadosPagamento, gerarDadosProfessor } from './services/gerarDados.js'
import { Aluno } from './classes/Aluno.js';
import { Aula } from './classes/Aula.js';
import { Pagamento } from './classes/Pagamento.js';
import { Professor } from './classes/Professor.js';


const novoAluno = new Aluno ({...gerarDadosAluno(data)});
const novoProfessor = new Professor ({...gerarDadosProfessor(data)});
const novoAula = new Aula ({...gerarDadosAula(data)});
const novoPagamento = new Pagamento ({...gerarDadosPagamento(data)});

console.log(novoAluno);
console.log(novoProfessor);
console.log(novoAula);
console.log(novoPagamento);