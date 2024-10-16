import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`--------------------------------------------------------------------`)
        console.log(`                    \nCadastro de produto`);
        console.log(`--------------------------------------------------------------------`)
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Informe o preço do produto: `)
        let produto = new Produto(nome, preco);
        this.produtos.push(produto);
    }
    
}