export class Aula {
    constructor() {
        this.aulas = []  
    }


createAula (data) {
    
    const aula = {
        "aula_id": data.aula_id,
        "professor_id": data.professor_id,
        "alunos_id": data.alunos_id,
        "startdate": data.startdate,
        "enddate": data.enddate,
        "disciplina": data.disciplina,
        "tipo_aula": data.tipo_aula
        }
        this.aulas.push(aula);
        return aula
    };

readAula (id) {
    return this.aulas.find(item => item.aula_id === id);
};

updateAula (id,data) {
    const aulaUpdate = this.readAula(id)
    if(data) {
        if(data.professor_id) aulaUpdate.professor_id = data.professor_id;
        if(data.alunos_id) aulaUpdate.alunos_id = data.alunos_id;
        if(data.startdate) aulaUpdate.startdate = data.startdate;
        if(data.enddate) aulaUpdate.enddate = data.enddate;
        if(data.disciplina) aulaUpdate.disciplina = data.disciplina;
        if(data.tipo_aula) aulaUpdate.tipo_aula = data.tipo_aula;
    } 
    return aulaUpdate

};

deleteAula(id) {
    this.aulas = this.aulas.filter(item => item.aula_id !== id);
};

    }

