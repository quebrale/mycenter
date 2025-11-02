class Aluno {
    constructor(primeiroNome,ultimoNome,idade,email,ano,disciplinas,encarregado,dataInscricao,fatura) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.email = email;
        this.idade = idade;
        this.ano = ano;
        this.disciplinas = disciplinas;
        this.encarregado = encarregado;
        this.dataInscricao = dataInscricao;
        this.fatura = fatura
    };

    nomeCompleto () {
        return `${this.primeiroNome} ${this.ultimoNome}`
    };


    nomeEncarregado () {
        return `${this.encarregado}`
    }

    atualizarAno () {
        if (this.ano < 12) {
            return this.ano = this.ano + 1    
        } else {
            return "Universidade"
        }
    };

    tempoInscrito () {
        const dataAtual = new Date()
        // CUIDADO: dataInscricao deve ser um objeto Date ou o construtor falhará.
        const diferencaMs = Math.abs(dataAtual.getTime() - this.dataInscricao.getTime());
        
        // Conversão simples para dias para um resultado útil
        const MS_POR_DIA = 1000 * 60 * 60 * 24;
        const diasInscrito = Math.floor(diferencaMs / MS_POR_DIA);

        return diasInscrito;
    };

    precisaFatura () {
        return this.fatura
    }

    };


const novoAluno = new Aluno("Teresa","Jesus","teresa@gmail.com",12,7,['matematica','ciencias'],"Joana Jesus","2025-11-02",true)
const nomeCompleto = novoAluno.nomeCompleto()
const ee = novoAluno.nomeEncarregado()
const passou = novoAluno.atualizarAno() 

console.log(nomeCompleto)
console.log(ee)
console.log(novoAluno.ano)