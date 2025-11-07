export class Aluno {
  constructor({aluno_id,nome, apelido,data_nascimento, email, nr_telemovel,encarregado_educacao,nr_encarregado,data_inscricao, morada, codigo_postal}){
    this.aluno_id = aluno_id;
    this.nome = nome;
    this.apelido = apelido;
    this.data_nascimento = data_nascimento;
    this.email = email;
    this.nr_telemovel = nr_telemovel;
    this.encarregado_educacao = encarregado_educacao;
    this.nr_encarregado = nr_encarregado;
    this.data_inscricao = data_inscricao;
    this.morada = morada;
    this.codigo_postal = codigo_postal;
  }
}