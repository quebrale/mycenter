interface dadosPagamento {
  pagamento_id: string;
  aluno_id: string;
  valor: string;
  modo: string;
  data_pagamento: string;
}


export class Pagamento {
    pagamentos : Array<dadosPagamento>
    constructor() {
        this.pagamentos = [];
       
}


createPagamento(data : dadosPagamento) {
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

readPagamento(id : string) {
    return this.pagamentos.find(item => item.pagamento_id === id);
    }

updatePagamento (id : string, data : dadosPagamento) {
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

deletePagamento (id : string) {
    this.pagamentos = this.pagamentos.filter(item => item.pagamento_id !== id);
}



    }