export class Professor {
    constructor({professor_id,nome,apelido,data_nascimento,email,nr_telemovel,disciplinas}) {
        this.professor_id = professor_id;
        this.nome = nome;
        this.apelido = apelido;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.nr_telemovel = nr_telemovel;
        this.disciplinas = disciplinas;
    }
}