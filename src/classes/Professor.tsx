interface dadosProfessor {
  professor_id: string;
  nome: string;
  apelido: string;
  data_nascimento: string;
  email: string;
  nr_telemovel: string;
  disciplinas: string;
}


export class Professor {
    professores : Array<dadosProfessor>
    constructor() {
        this.professores = [];
     
    }

createProfessor (data : dadosProfessor) {
    const professor = {
        "professor_id": data.professor_id,
        "nome": data.nome,
        "apelido": data.apelido,
        "data_nascimento": data.data_nascimento,
        "email": data.email,
        "nr_telemovel": data.nr_telemovel,
        "disciplinas": data.disciplinas
    }

    this.professores.push(professor)
    return professor
}

readProfessor(id : string) {
    return this.professores.find(item => item.professor_id === id);
}


updateProfessor (id : string, data : dadosProfessor) {
    const professor = this.readProfessor(id);
    if (data) {
        if(data.nome) professor.nome = data.nome;
        if(data.apelido) professor.apelido = data.apelido;
        if(data.data_nascimento) professor.data_nascimento = data.data_nascimento;
        if(data.email) professor.email = data.email;
        if(data.nr_telemovel) professor.nr_telemovel = data.nr_telemovel;
        if(data.disciplinas) professor.disciplinas = data.disciplinas;
    return professor
    }
}

deleteProfessor (id : string) {
    this.professores = this.professores.filter (item => item.professor_id !== id);
}


}