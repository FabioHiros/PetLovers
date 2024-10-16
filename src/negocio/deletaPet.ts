import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada"
import Deleta from "./deleta";


export default class DeletaPet extends Deleta {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log("----------------Deletando Pet ------------------")
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach((pet,idx) =>{
            console.log(`Index:${idx} Nome:${pet.getNome} `)
        })
        let opt = this.entrada.receberNumero(`Digite o Index do pet que deseja Deletar: `)
        this.pets.splice(opt,1);
        
    }}