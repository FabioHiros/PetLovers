import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualiza from "./atualiza";


export default class AtualizaServico extends Atualiza {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`-----------------------------------`)
        console.log(`       \nEdição do serviço`)
        console.log(`-----------------------------------`)
        let query = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let servico = this.servicos.filter(servico => servico.nome === query)
        if (!servico || servico.length === 0){
            console.log(`Nenhum serviço encontrado!`)
            return
        } 
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
        let index = this.servicos.indexOf(servico[0])
        let servicoNovo = new Servico(nome, preco)
        this.servicos[index] = servicoNovo
    }
}