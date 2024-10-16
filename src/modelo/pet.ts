export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    public id_pet: number
    private cpf_dono: string

    constructor(nome: string, raca: string, genero: string, tipo: string,id_pet:number,cpf_dono:string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.id_pet = id_pet
        this.cpf_dono = cpf_dono
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getCpfDono(){return this.cpf_dono}



    setNome(novoNome: string) {
        this.nome = novoNome;
    }
    setRaca(novaRaca: string) {
        this.raca = novaRaca;
    }
    setGenero(novoGenero: string) {
        this.genero = novoGenero;
    }
    setTipo(novoTipo: string) { 
        this.tipo = novoTipo;
    }
    setCpfDono(novoDono: string) {
        this.cpf_dono = novoDono;
    }
}