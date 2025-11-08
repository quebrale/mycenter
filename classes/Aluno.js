export class Aluno {
  constructor(){
    this.alunos = [];
  };

  // Object creation via a service layer instead of using class methods to facilitate scalability and API calls

createAluno (data) {

  const aluno = { 
    "aluno_id": data.aluno_id,
    "nome": data.nome,
    "apelido": data.apelido,
    "data_nascimento": data.data_nascimento,
    "email": data.email,
    "nr_telemovel": data.nr_telemovel,
    "encarregado_educacao": data.encarregado_educacao,
    "nr_encarregado": data.nr_encarregado,
    "data_inscricao": data.data_inscricao,
    "morada": data.morada,
    "codigo_postal": data.codigo_postal
  };
  this.alunos.push(aluno)
  return aluno
}

  readAluno (id) {
    return this.alunos.find( item => item.id === id )
  }

  updateAluno (id,aluno) {
    const aluno_id = this.readAluno(id)
    if (aluno_id) {
     if (aluno.nome) aluno_id.nome = aluno.nome;
     if (aluno.apelido) aluno_id.apelido = aluno.apelido;
     if (aluno.data_nascimento) aluno_id.data_nascimento = aluno.data_nascimento;
     if (aluno.email) aluno_id.email = aluno.email;
     if (aluno.nr_telemovel) aluno_id.nr_telemovel = aluno.nr_telemovel;
     if (aluno.encarregado_educacao) aluno_id.encarregado_educacao = aluno.encarregado_educacao;
     if (aluno.nr_encarregado) aluno_id.nr_encarregado = aluno.nr_encarregado;
     if (aluno.data_inscricao) aluno_id.data_inscricao = aluno.data_inscricao;
     if (aluno.morada) aluno_id.morada = aluno.morada;
     if (aluno.codigo_postal) aluno_id.codigo_postal = aluno.codigo_postal;
    };
    return aluno_id
  }

  deleteAluno (id) {
    this.alunos = this.alunos.filter(aluno => aluno.id !== id)
    console.log("Aluno apagado")
     
  }



   };