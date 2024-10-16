import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deleta from "./deleta";

export default class DeletaCliente extends Deleta {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`                       \nDeletar cliente`)
        console.log(`--------------------------------------------------------------------`)
        let busca = this.entrada.receberTexto(`Digite o CPF: `)
        let cliente = this.clientes.filter(cliente => cliente.getCpf.getValor === busca)
        if (!cliente || cliente.length === 0){
            console.log(`Nenhum cliente encontrado!`)
            return
        } 

        let index = this.clientes.indexOf(cliente[0]);
        this.clientes.splice(index,1);
    }
}