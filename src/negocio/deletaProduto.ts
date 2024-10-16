import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deleta from "./deleta";



export default class DeletaProduto extends Deleta {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`                       \nDeletar produto`)
        console.log(`--------------------------------------------------------------------`)
        let query = this.entrada.receberTexto(`Digite o nome do produto: `)
        let produto = this.produtos.filter(produto => produto.nome === query)
        if (!produto || produto.length === 0){
            console.log(`Nenhum produto encontrado!`)
            return
        } 
        let index = this.produtos.indexOf(produto[0]);
        this.produtos.splice(index,1);
    }
}