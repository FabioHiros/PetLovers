import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let id = Number(this.clientes.length + 1)
        //nome
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
       //cpf
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        
        let cliente = new Cliente(nome, nomeSocial, cpf,id);
        //rgs

        let rgs = this.entrada.receberNumero('Informe quantos Rgs deseja cadastrar: ')
        for(let i:number = 1; i <= rgs; i++){
            let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            
            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
            let rg = new RG(valorRg, dataEmissaoRg);
            cliente.adicionarRG(rg);
        }
        
        let telefones = this.entrada.receberNumero('Quantos Telefones deseja cadastrar?: ')
    for(let i:number = 1; i<=telefones; i++){
        let ddd = this.entrada.receberTexto(`Informe o DDD: `);
        let numeroTelefone = this.entrada.receberTexto(`Numero de telefone: `);
        let telefone = new Telefone(ddd, numeroTelefone)
        cliente.adicionarTelefone(telefone)
    }
        this.clientes.push(cliente)

        console.log(`\nCadastro concluído :)\n`);
    }
}