import Servico from "../modelo/servico";
import Listagem from "./listagem";


export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`-----------------------------------`)
        console.log(`       \nLista de serviços:`);
        console.log(`-----------------------------------`)
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.preco);
            console.log(`--------------------------------------------------------------------`)
        });
        console.log(`\n`);
    }
}