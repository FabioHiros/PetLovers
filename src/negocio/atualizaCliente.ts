import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Atualiza from "./atualiza"


export default class AtualizaCliente extends Atualiza {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nAtualizando Cliente`);
        let why = true
        while (why) {
 
            let entrada = new Entrada()
            let cpf = entrada.receberNumero(`Insira o CPF do cliente: `)
            const cliente = this.clientes.find((cliente) => parseInt(cliente.getCpf.getValor) === cpf);
            
            if (cliente){
                console.log(`Editando cliente ${cliente.nome}`)
                console.log(`
                    1- Rg
                    2- Cpf
                    3- Nome
                    4- Nome Social
                    5- Telefone
                    
                    `)
                
            switch (entrada.receberNumero('escolha uma opção:')) {
                case 1:
                    console.log(`Rgs: `    );
                    cliente.getRgs.forEach((rg,idx) =>{
                    console.log(`ID:${idx}  RG:${rg.getValor}`)
                    })
                    console.log(`Deseja \n[1] - Adicionar um RG \n[2]- Editar um RG \n[3]- Deletar RG\n`)
                    let crudRg =entrada.receberNumero('')
                    switch(crudRg){
                        case 1:
                            let valorRgNovo = entrada.receberTexto(`Digite o Novo Rg: `)
                            let dataRgNovo= entrada.receberTexto(`Digite a Data no formato dd/mm/yyyy: `)
                            let partesData = dataRgNovo.split('/')
                            let ano = new Number(partesData[2].valueOf()).valueOf()
                            let mes = new Number(partesData[1].valueOf()).valueOf()
                            let dia = new Number(partesData[0].valueOf()).valueOf()
                            let dataEmissao = new Date(ano, mes, dia)
                            let novoRg = new RG(valorRgNovo, dataEmissao);
                            cliente.adicionarRG(novoRg)
                            why=false
                            
                        break;
                        case 2:
                            let rgs =cliente.getRgs
                            let idRg = entrada.receberNumero(`Digite o ID do RG que deseja alterar:`)
                            let valorRg = entrada.receberTexto('Digite o Novo Número do Rg: ')
                            let dataRg= entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy
                            caso não queira atualizar a data de emissão deixe o campo em branco: `)
                            if (dataRg){

                                let partesData = dataRg.split('/')
                                let ano = new Number(partesData[2].valueOf()).valueOf()
                                let mes = new Number(partesData[1].valueOf()).valueOf()
                                let dia = new Number(partesData[0].valueOf()).valueOf()
                                let dataEmissao = new Date(ano, mes, dia)
                                let novoRg = new RG(valorRg, dataEmissao);
                                rgs[idRg] = novoRg;
                                why = false;
                                break;
                                
                                
                            }
                            else{
                                let dataEmissao = cliente.getRgs[idRg].getDataEmissao
                                let novoRg = new RG(valorRg, dataEmissao);
                                rgs[idRg] = novoRg
                                why = false;
                                break;
                            }
                        case 3:
                            let idxRgDelete= entrada.receberNumero(`Digite o IDX do telefone que deseja deletar: `)
                            cliente.deletarRg(idxRgDelete)
                            why=false;
                        break;
                        default:
                            console.log('Escolha uma opção Válida')
                    }
                    

            why=false

                    break;
                case 2:
                    console.log(`CPF atual: ${cliente.getCpf.getValor}`)
                    let valor = entrada.receberTexto('CPF Novo: ')
                    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy
                        caso não queira atualizar a data de emissão deixe o campo em branco: `);
                    if (data){

                        let partesData = data.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        let novoCpf = new CPF(valor, dataEmissao);

                        cliente.setCpf(novoCpf)
                    }
                    else{
                        let dataEmissao = cliente.getCpf.getDataEmissao
                        let novoCpf = new CPF(valor, dataEmissao);
                        cliente.setCpf(novoCpf)
                    }
                    why = false;
                    break;
                
                case 3:
                    let novoNome = entrada.receberTexto(`Digite o Novo Nome: `)
                    cliente.nome = novoNome
                    why=false;
                break;
                case 4:
                    let novoNomeSocial = entrada.receberTexto(`Digite o Novo Nome Social: `)
                    cliente.nomeSocial = novoNomeSocial
                    why=false;
                break;
                case 5:
                    console.log(`Telefones: `    );
                    cliente.getTelefones.forEach((telefone,idx) =>{
                    console.log(`Telefone ${idx} : (${telefone.getDdd})${telefone.getNumero}`)
            })  
                    console.log(`Deseja \n[1] - Adicionar um Número \n[2]- Editar um número \n[3]- Deletar Número\n`)
                    let opcaoTel= (entrada.receberNumero(''))
                    switch(opcaoTel){
                        case 1:
                            let ddd = this.entrada.receberTexto(`Informe o DDD: `);
                            let numeroTelefone = this.entrada.receberTexto(`Numero de telefone: `);
                            let telefone = new Telefone(ddd, numeroTelefone)
                            cliente.adicionarTelefone(telefone)
                            why = false;
                            break;
                        case 2:
                            let idxTel = entrada.receberNumero(`Digite o Index do Telefone que deseja alterar: `)
                            let Novoddd = this.entrada.receberTexto(`Informe o DDD: `);
                            let NovonumeroTelefone = this.entrada.receberTexto(`Numero de telefone: `);
                            let Novotelefone = new Telefone(Novoddd, NovonumeroTelefone)
                            const telefones = cliente.getTelefones
                            telefones[idxTel]= Novotelefone;
                            why = false;
                            break;
                        case 3:
                            let idxTelDelete= entrada.receberNumero(`Digite o IDX do telefone que deseja deletar: `)
                            cliente.deletarTelefonone(idxTelDelete)
                            why=false;
                            break;
                        default:
                            console.log('Escolha uma opção válida')
                    }

                break;
                
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            }
            else{ 
                console.log('Cliente não encontrado')
                why = false
                break;
            }
            
            
        }
        
        
        // let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        // let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        // let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        // let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        // let partesData = data.split('/')
        // let ano = new Number(partesData[2].valueOf()).valueOf()
        // let mes = new Number(partesData[1].valueOf()).valueOf()
        // let dia = new Number(partesData[0].valueOf()).valueOf()
        // let dataEmissao = new Date(ano, mes, dia)
        // let cpf = new CPF(valor, dataEmissao);
        
        
        // let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        // let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        
        // let partesDataRg = dataRg.split('/')
        // let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        // let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        // let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        // let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        // let rg = new RG(valorRg, dataEmissaoRg);
        
        // let ddd = this.entrada.receberTexto(`Informe o DDD: `);
        // let numeroTelefone = this.entrada.receberTexto(`Numero de telefone: `);
        // let telefone = new Telefone(ddd, numeroTelefone)

        // let id = Number(this.clientes.length + 1)

        // let cliente = new Cliente(nome, nomeSocial, cpf,id);
        // cliente.adicionarRG(rg);
        // cliente.adicionarTelefone(telefone)
        // this.clientes.push(cliente)
        
    }
}