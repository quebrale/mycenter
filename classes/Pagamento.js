export class Pagamento {
    constructor({pagamento_id,aluno_id,valor,modo,data_pagamento}) {
        this.pagamento_id = pagamento_id;
        this.aluno_id = aluno_id;
        this.valor = valor;
        this.modo = modo;
        this.data_pagamento = data_pagamento;
    }
}