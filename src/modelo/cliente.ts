import { ProdutoConsumido, ServicoConsumido } from "./compra"
import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public id: number
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<ProdutoConsumido>
    private servicosConsumidos: Array<ServicoConsumido>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF,id: number) {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }

    //Rgs[]
    public  adicionarRG(rg: RG): void {
        this.rgs.push(rg);
    }
   
    public deletarRg(index:number):boolean{
        if (index<0 || index >= this.rgs.length){
            console.log('Indice Inválido')
            return false
        }
        console.log(`Rg ${this.rgs[index]} Deletando....`)
        this.rgs.splice(index,1);
        console.log('Deletado com sucesso')
        return true
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public setCpf(novoCpf: CPF) {
        this.cpf = novoCpf;
    }
    
    //Telefone
    public  adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone);
    }
    public deletarTelefonone(index: number): boolean {
        if (index < 0 || index >= this.telefones.length) {
            console.log(`Índice ${index} inválido.`);
            return false;
        }
        this.telefones.splice(index, 1);
        console.log(`Telefone na posição ${index} deletado com sucesso.`);
        return true;
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getCpf(): CPF {
        return this.cpf
    }
   
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
   
    public get getProdutosConsumidos(): Array<ProdutoConsumido> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<ServicoConsumido> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public setPet(pet:Pet):void{
            this.pets.push(pet)
    }

    public removerPet(petId: number): void {
        this.pets = this.pets.filter(pet => pet.id_pet !== petId);
    }
}