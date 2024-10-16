import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deleta from "./deleta";

export default class DeletaServico extends Deleta {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`                         \nDeletar serviço`)
        console.log(`--------------------------------------------------------------------`)
        let query = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let servico = this.servicos.filter(serviço => serviço.nome === query)
        if (!servico || servico.length === 0){
            console.log(`Nenhum serviço encontrado!`)
            return
        } 
        let index = this.servicos.indexOf(servico[0]);
        this.servicos.splice(index,1);
    }
}