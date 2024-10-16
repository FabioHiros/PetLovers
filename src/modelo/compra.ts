import Produto from "./produto";
import Servico from "./servico";

export interface ProdutoConsumido {
    produto: Produto;
    petId: number;
}

export interface ServicoConsumido {
    servico: Servico;
    petId: number;
}