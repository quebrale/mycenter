export class Pagamento {
    constructor() {
        this.pagamentos = [];
       
}


createPagamento(data) {
    const pagamento = {
        "pagamento_id": data.pagamento_id,
        "aluno_id": data.aluno_id,
        "valor": data.valor,
        "modo": data.modo,
        "data_pagamento": data.data_pagamento
        };
        
    this.pagamentos.push(pagamento)
    return pagamento
    }

readPagamento(id) {
    return this.pagamentos.find(item => item.pagamento_id === id);
    }

updatePagamento (id,data) {
    const pagamento = this.readPagamento(id);
    if (data) {
        if (data.aluno_id) pagamento.aluno_id = data.aluno_id;
        if (data.valor) pagamento.valor = data.valor;
        if (data.valor) pagamento.valor = data.valor;
        if (data.modo) pagamento.modo = data.modo;
        if (data.data_pagamento) pagamento.data_pagamento = data.data_pagamento;
    }

    return pagamento
}

deletePagamento (id) {
    this.pagamentos = this.pagamentos.filter(item => item.pagamento_id !== id);
}



    }