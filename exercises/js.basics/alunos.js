const alunos = [
  { nome: "Ana", idade: 20, nota: 8.5 },
  { nome: "Bruno", idade: 22, nota: 6.0 },
  { nome: "Carla", idade: 19, nota: 9.0 },
  { nome: "Daniel", idade: 21, nota: 5.5 },
  { nome: "Eva", idade: 20, nota: 7.0 },
];


// 1. Criar novo array com so com as raparigas

const raparigas = alunos.map((aluno) => `${aluno.nome} - nota: ${aluno.nota}`);
console.log(raparigas);


// 2. Filtrar alunos com notas superior ou igual a 7
const bonsAlunos = alunos.filter((aluno) => aluno.nota >= 7.0 )
console.log(bonsAlunos)


// 3. Calcular a media das notas e de idades
const somaNotas = alunos.reduce((accumulator, aluno) => accumulator + aluno.nota,0);
const mediaNotas = somaNotas / alunos.length
console.log(mediaNotas)