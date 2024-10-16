import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(pets: Array<Pet>,clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`                    \nCadastro de Pet`);
        console.log(`--------------------------------------------------------------------`)
        
        let cpfDono =this.entrada.receberTexto('Digite o CPF do dono: ')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfDono)
        if(!cliente){
            console.log('Cliente não encontrado!')
        }
        else{
            let nome = this.entrada.receberTexto(`Nome do Pet: `)
            let tipo = this.entrada.receberTexto(`Tipo do Pet: `)
            let raca = this.entrada.receberTexto(`Tipo do Raça: `)
            let genero = this.entrada.receberTexto(`Gênero: `)
            let id_pet = Number(this.pets.length+1)
            let pet = new Pet(nome,raca,genero,tipo,id_pet,cpfDono);
            this.pets.push(pet)      
            cliente.setPet(pet)
        }
    }
    
}