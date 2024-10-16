import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`ID: ` + cliente.id);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);            
            console.log(`RGs:`)
            cliente.getRgs.forEach((rg,idx) =>{
                console.log(`Index ${idx} \nRg: ${rg.getValor} \nDataEmissão: ${rg.getDataEmissao}\n`)
            })
            console.log(`Telefones `    );
            cliente.getTelefones.forEach((telefone,idx) =>{
                console.log(`Telefone ${idx} : (${telefone.getDdd})${telefone.getNumero}`)
            })
            if(cliente.getPets.length>0){
                cliente.getPets.forEach(pet=>{
                    console.log(`ID:${pet.id_pet} Pet: ${pet.getNome}`)
                })
            }
            if(cliente.getProdutosConsumidos.length>0){
                console.log('Produtos Consumidos:')
                cliente.getProdutosConsumidos.forEach(produto =>{
                    console.log(`Produto:${produto.produto.nome} Preço:${produto.produto.preco}`)
                })
                console.log('\n')
            }
            if(cliente.getServicosConsumidos.length>0){
                console.log('Serviços Consumidos')
                cliente.getServicosConsumidos.forEach(servico =>{
                    console.log(`Serviço:${servico.servico.nome} Preço:${servico.servico.preco}`)
                })
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
