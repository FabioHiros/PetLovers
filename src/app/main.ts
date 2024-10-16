import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizaCliente from "../negocio/atualizaCliente";
import AtualizaPet from "../negocio/atualizaPet";
import AtualizaProduto from "../negocio/atualizaProduto";
import AtualizaServico from "../negocio/atualizaServiço";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServiço";
import Compra from "../negocio/comprar";
import DeletaPet from "../negocio/deletaPet";
import DeletaCliente from "../negocio/deletarCliente";
import DeletaServico from "../negocio/deletarServiço";
import DeletarProduto from "../negocio/deletarServiço";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPet";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServiços";
import Relatorio from "../negocio/relatorio";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true




while (execucao) {
    
    console.log(`                 [1] - Clientes
                 [2] - Produtos
                 [3] - Serviços
                 [4] - Pets
                 [5] - Relatorios   
                 [6] - Comprar`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
    switch(opcao){
        case 1:
            console.log(`Opções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Atualizar dados de clientes`);
            console.log(`4 - Deletar Cliente`);
            console.log(`0 - Sair`);
            switch (entrada.receberNumero(``)) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                
                case 3:
                    let atualiza = new AtualizaCliente(empresa.getClientes)
                    atualiza.atualizar()
                break;
                case 4:
                    let deleta = new DeletaCliente(empresa.getClientes)
                    deleta.deletar()
                break;
                
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
            case 2:
                console.log(`Opções:`);
                console.log(`1 - Cadastrar Produto`);
                console.log(`2 - Listar todos os Produtos`);
                console.log(`3 - Atualizar dados de Produto`);
                console.log(`4 - Deletar Produto`);
                console.log(`0 - Sair`);
                switch(entrada.receberNumero('')){
                    case 1:
                        let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                        cadastroProduto.cadastrar()
                        break;
                    case 2:
                        let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
                        listagemProdutos.listar()
                        break;
                    case 3:
                        let atualizaProduto = new AtualizaProduto(empresa.getProdutos)
                        atualizaProduto.atualizar()
                        break;
                    case 4:
                        let deletaProduto = new DeletarProduto(empresa.getProdutos)
                        deletaProduto.deletar()
                        break;
                    case 0:
                        // execucao=false
                        break;
                    default:
                        console.log('Comando não entendido') 
                }
                break;
            case 3:
                console.log(`Opções:`);
                console.log(`1 - Cadastrar Serviço`);
                console.log(`2 - Listar todos os Serviços`);
                console.log(`3 - Atualizar dados de Serviço`);
                console.log(`4 - Deletar Serviço`);
                console.log(`0 - Sair`);
                switch(entrada.receberNumero('')){
                    case 1:
                        let cadastraServiço = new CadastroServico(empresa.getServicos)
                        cadastraServiço.cadastrar()
                        break;
                    case 2:
                        let listagemServiço = new ListagemServicos(empresa.getServicos)
                        listagemServiço.listar();
                        break;
                    case 3:
                        let atualizaServiço = new AtualizaServico(empresa.getServicos)
                        atualizaServiço.atualizar()
                        break;
                    case 4:
                        let deletaServiço = new DeletaServico(empresa.getServicos)
                        deletaServiço.deletar()
                        break;
                    default:
                        console.log('Comando não entendido')
                }
                break
                case 4:
                    console.log(`Opções:`);
                    console.log(`1 - Cadastrar Pet`);
                    console.log(`2 - Listar todos os Pets`);
                    console.log(`3 - Atualizar dados de Pet`);
                    console.log(`4 - Deletar Pet`);
                    console.log(`0 - Sair`);
                    switch(entrada.receberNumero('')){
                        case 1:
                            let cadastraPet = new CadastroPet(empresa.getPets,empresa.getClientes)
                            cadastraPet.cadastrar()
                            break;
                        case 2:
                            let listagemPets = new ListagemPets(empresa.getClientes,empresa.getPets)
                            listagemPets.listar()
                            break;
                        case 3:
                            let atualizaPet = new AtualizaPet(empresa.getPets,empresa.getClientes)
                            atualizaPet.atualizar();
                            break;
                        case 4:
                            let deletaPet = new DeletaPet(empresa.getPets,empresa.getClientes)
                            deletaPet.deletar();
                            break;
                        default:
                            console.log('Comando não entendido')
                    }
                    break;
                case 5:
                    console.log(`Opções:`);
                    console.log(`1 - Produtos mais consumidos Por raça`);
                    console.log(`2 - Produtos mais consumidos Por Tipo`);
                    console.log(`3 - Produtos mais consumidos (Geral)`);
                    console.log(`4 - Serviços mais consumidos (Geral)`);
                    console.log(`5 - Melhores Clientes`);
                    console.log(`0 - Sair`);
                    switch(entrada.receberNumero('')){
                        case 1:
                            let listaRaca = new Relatorio(empresa.getClientes)
                            listaRaca.produtosMaisConsumidosPorRaca()
                            break;
                        case 2:
                            let listaTipo = new Relatorio(empresa.getClientes)
                            listaTipo.servicosMaisConsumidosPorTipo()
                            break;
                        case 3:
                            let listaProdutoGeral = new Relatorio(empresa.getClientes)
                            listaProdutoGeral.produtosMaisConsumidos()
                            break;
                        case 4:
                            let listaServicoGeral = new Relatorio(empresa.getClientes)
                            listaServicoGeral.servicosMaisConsumidos()
                            break
                        case 5:
                            let topdez = new Relatorio(empresa.getClientes)
                            topdez.top10ClientesMaisConsumidores()
                            break
                        default:
                            console.log('Comando não entendido')
                        
                    }
                    break;
                    case 6:
                        let comprarProduto = new Compra(empresa.getClientes,empresa.getProdutos,empresa.getServicos)
                        comprarProduto.comprar()
                        break;
                    break
            
            
            
            case 0:
                execucao=false
                break;
            default:
                console.log('Comando não entendido')
    }
    
}