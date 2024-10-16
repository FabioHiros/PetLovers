import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.clientes.forEach(cliente => {
            const petsCliente = this.pets.filter(pet => pet.getCpfDono === cliente.getCpf.getValor);
            if (petsCliente.length > 0) {
                console.log(`Dono: ${cliente.nome} CPF:(${cliente.getCpf.getValor})`);
                petsCliente.forEach((pet, index) => {
                    console.log(`Pet ${index + 1}:`);
                    console.log(`ID: ` + pet.id_pet);
                    console.log(`Nome: ` + pet.getNome);
                    console.log(`Raça: ` + pet.getRaca);
                    console.log(`Gênero: ` + pet.getGenero);
                    console.log(`Tipo: ` + pet.getTipo);
                    console.log(`--------------------------------------`);
                });
            }
            else{
                console.log(`Cliente ${cliente.nome} CPF: ${cliente.getCpf.getValor}
                        Sem Pets registrados`)
            }
        });
        console.log(`\n`);
    }
}