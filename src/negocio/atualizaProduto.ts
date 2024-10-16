import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualiza from "./atualiza";


export default class AtualizaProduto extends Atualiza {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produtos = produto
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`-----------------------------------`)
        console.log(`       \nEdição do produto`)
        console.log(`-----------------------------------`)
        let query = this.entrada.receberTexto(`Digite o nome do produto a ser alterado: `)
        let produto = this.produtos.filter(produto => produto.nome === query)
        if (!produto || produto.length === 0){
            console.log(`Nenhum produto encontrado!`)
            return
        } 

        let nome = this.entrada.receberTexto(`Novo nome do produto: `)
        let preco = this.entrada.receberNumero(`Novo preço do produto: `)
        let index = this.produtos.indexOf(produto[0])
        let produtoEditado = new Produto(nome, preco)
        this.produtos[index] = produtoEditado
       

    }
}