import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada"
import Atualiza from "./atualiza";

export default class AtualizaPet extends Atualiza {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log("Atualizando Pets")
        let cpfDonoAtualiza = this.entrada.receberTexto('Insira o Cpf do dono: ')
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfDonoAtualiza)
        if (!cliente){
            console.log('Cliente Não Encontrado!')
            return
        }
        let petz = cliente.getPets
        console.log(`Cliente: ${cliente.nome}`)
        if(petz.length<=0){
            console.log('Sem registro de pets para este Cliente')
            return
        }
        console.log(`Pets`)
        petz.forEach((pet,idx)=>{
            console.log(`Index: ${idx}\nId:${pet.id_pet}\nNome:${pet.getNome}\nTipo:${pet.getTipo}\nRaça:${pet.getRaca}`)
            console.log("---------------------------------------------------------")
        })
        let petIdx = this.entrada.receberNumero(`Digite o Index do animal que deseja alterar: `)
        let pet = this.pets[petIdx]
        console.log('Caso Não queria Atualizar o campo deixe em branco')
        let novoNome= this.entrada.receberTexto(`Digite o NOVO NOME: `)
        if (novoNome){
            pet.setNome(novoNome)
        }

        let novaRaca = this.entrada.receberTexto(`Digite a NOVA RAÇA: `)
        if(novaRaca){
            pet.setRaca(novaRaca)
        }
        let novoTipo = this.entrada.receberTexto(`Digite o NOVO TIPO: `)
        if(novoTipo){
            pet.setTipo(novoTipo)
        }
        let novoGenero = this.entrada.receberTexto(`Digite o NOVO GÊNERO: `)
        if(novoGenero){
            pet.setTipo(novoGenero)
        }
        let novoDono = this.entrada.receberTexto(`Digite o NOVO CPF DO DONO: `)
        

        if (novoDono && novoDono !== cpfDonoAtualiza) {
            let novoCliente = this.clientes.find(cliente => cliente.getCpf.getValor === novoDono);
    
            if (!novoCliente) {
                console.log('Novo dono não encontrado!');
                return;
            }
    
            // Remove the pet from the old owner's list
            cliente.removerPet(pet.id_pet);
    
            // Add the pet to the new owner's list
            novoCliente.setPet(pet);
    
            // Update the pet's owner CPF
            pet.setCpfDono(novoDono);
    
            console.log(`O pet ${pet.getNome} foi transferido para ${novoCliente.nome}.`);
        } else {
            console.log('Dono não alterado ou CPF inválido.');
        }


        
    }
    
    }