export class Aula {
    constructor({aula_id,professor_id,alunos_id,startdate,enddate,disciplina,tipo_aula}) {
        this.aula_id = aula_id;
        this.professor_id = professor_id;
        this.alunos_id = alunos_id;
        this.startdate= startdate;
        this.enddate = enddate;
        this.disciplina = disciplina;
        this.tipo_aula = tipo_aula; 
    }
}