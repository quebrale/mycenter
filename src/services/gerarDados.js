export function gerarDadosAluno (obj) {
    return {
    "aluno_id": obj.aluno_id[Math.floor(Math.random()*obj.aluno_id.length)],
    "nome": obj.nome[Math.floor(Math.random()*obj.nome.length)],
    "apelido": obj.apelido[Math.floor(Math.random()*obj.apelido.length)],
    "data_nascimento": obj.data_nascimento[Math.floor(Math.random()*obj.data_nascimento.length)],
    "email": obj.email[Math.floor(Math.random()*obj.email.length)],
    "nr_telemovel": obj.nr_telemovel[Math.floor(Math.random()*obj.nr_telemovel.length)],
    "encarregado_educacao": obj.encarregado_educacao[Math.floor(Math.random()*obj.encarregado_educacao.length)],
    "nr_encarregado": obj.nr_encarregado[Math.floor(Math.random()*obj.nr_encarregado.length)],
    "data_inscricao": obj.data_inscricao[Math.floor(Math.random()*obj.data_inscricao.length)],
    "morada":  obj.morada[Math.floor(Math.random()*obj.morada.length)],
    "codigo_postal": obj.codigo_postal[Math.floor(Math.random()*obj.codigo_postal.length)],
  };
}

export function gerarDadosAula (obj) {
    return {
        "aula_id":obj.aula_id[Math.floor(Math.random()*obj.aula_id.length)],
        "professor_id":obj.professor_id[Math.floor(Math.random()*obj.professor_id.length)],
        "alunos_id":obj.alunos_id[Math.floor(Math.random()*obj.alunos_id.length)],
        "startdate":obj.startdate[Math.floor(Math.random()*obj.startdate.length)],
        "enddate":obj.enddate[Math.floor(Math.random()*obj.enddate.length)],
        "disciplina":obj.disciplina[Math.floor(Math.random()*obj.disciplina.length)],
        "tipo_aula":obj.tipo_aula[Math.floor(Math.random()*obj.tipo_aula.length)]
    };
}

export function gerarDadosProfessor (obj) {
    return {
        "professor_id":obj.professor_id[Math.floor(Math.random()*obj.professor_id.length)],
        "nome":obj.nome[Math.floor(Math.random()*obj.nome.length)],
        "apelido":obj.apelido[Math.floor(Math.random()*obj.apelido.length)],
        "data_nascimento":obj.data_nascimento[Math.floor(Math.random()*obj.data_nascimento.length)],
        "email":obj.email[Math.floor(Math.random()*obj.email.length)],
        "nr_telemovel":obj.nr_telemovel[Math.floor(Math.random()*obj.nr_telemovel.length)],
        "disciplinas":obj.disciplinas[Math.floor(Math.random()*obj.disciplinas.length)],
    };
}

export function gerarDadosPagamento (obj) {
    return {
        "pagamento_id":obj.pagamento_id[Math.floor(Math.random()*obj.pagamento_id.length)],
        "aluno_id":obj.aluno_id[Math.floor(Math.random()*obj.aluno_id.length)],
        "valor":obj.valor[Math.floor(Math.random()*obj.valor.length)],
        "modo":obj.modo[Math.floor(Math.random()*obj.modo.length)],
        "data_pagamento":obj.data_pagamento[Math.floor(Math.random()*obj.data_pagamento.length)],
    };
}