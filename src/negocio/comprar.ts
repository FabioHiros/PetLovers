 
import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";

export default class Compra {

    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
       
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public comprar(): void {
        if (this.produtos.length === 0 && this.servicos.length === 0) {
            console.log("Não há produtos nem serviços disponíveis no momento.\n");
            return
        }
        let cpf = this.entrada.receberTexto('Digite o CPF do comprador: ')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)
        if (!cliente){
            console.log('Cliente não encontrado')
            return;
        }

        cliente.getPets.forEach((pet,idx)=>{
            console.log(`Index:${idx} Nomer:${pet.getNome}`)
        })
        let idxpet = this.entrada.receberNumero('Digie o index do Pet: ')
        if(idxpet > cliente.getPets.length || idxpet < 0 || cliente.getPets.length === 0){
            console.log('Pet não encontrado')
            return
        
        }
        const pet = cliente.getPets[idxpet]
        if (this.produtos.length>0 || this.servicos.length>0 ) {
        console.log(`Iniciando o registro de uma compra`);
        console.log('Deseja comprar:\n[1] - Produto\n[2] - Serviço')
        switch(this.entrada.receberNumero('')){
            case 2:{
                this.servicos.forEach((serviço,idx) =>{
                    console.log(`Index:${idx} Serviço:${serviço.nome} Preço:${serviço.preco}`)
                })
                let servIdx= this.entrada.receberNumero(`Digite o número do serviço: `)
                if(servIdx>this.servicos.length || servIdx<0){
                    console.log('Serviço Não Encontrado')
                    return
                }
                const servico = this.servicos[servIdx];
                cliente.getServicosConsumidos.push({ servico, petId: pet.id_pet });
                break
            }
            case 1:{
                this.produtos.forEach((produto,idx)=>{
                    console.log(`Index:${idx}\nNome:${produto.nome}\nPreço:${produto.preco}`)
                })
                let prodIdx = this.entrada.receberNumero('Digite o número do Produto:')
                if(prodIdx>this.produtos.length||prodIdx<0){
                    console.log('Produto Não ENcontrado')
                    return;
                }
                let produto = this.produtos[prodIdx]
                cliente.getProdutosConsumidos.push({ produto, petId: pet.id_pet });
                console.log(`Produto "${produto.nome}" registrado para o pet "${pet.getNome}".`);
                break
            }
            default:
                console.log('Comando não Entendido')
        }


        }
    
    
    }
    
    
    
    
    }