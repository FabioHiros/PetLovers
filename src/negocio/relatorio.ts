import Cliente from "../modelo/cliente";

interface Consumo {
    [key: string]: number;
}

export default class Relatorio {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public produtosMaisConsumidosPorRaca(): void {
        const consumoPorRaca: { [key: string]: Consumo } = {};

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(({ produto , petId }) => {
                const pet = cliente.getPets.find(p => p.id_pet === petId);
                const raca = pet?.getRaca || "Desconhecida";

                if (!consumoPorRaca[raca]) {
                    consumoPorRaca[raca] = {};
                }

                consumoPorRaca[raca][produto.nome] = 
                    (consumoPorRaca[raca][produto.nome] || 0) + 1;
            });
        });

        console.log("Produtos mais consumidos por raça:");
        for (const raca in consumoPorRaca) {
            console.log(`Raça: ${raca}`);
            for (const produto in consumoPorRaca[raca]) {
                console.log(`  Produto: ${produto}, Quantidade: ${consumoPorRaca[raca][produto]}`);
            }
        }
    }

    // List most consumed services by pet type
    public servicosMaisConsumidosPorTipo(): void {
        const consumoPorTipo: { [key: string]: Consumo } = {};

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(({ servico, petId }) => {
                const pet = cliente.getPets.find(p => p.id_pet === petId);
                const tipo = pet?.getTipo || "Desconhecido";

                if (!consumoPorTipo[tipo]) {
                    consumoPorTipo[tipo] = {};
                }

                consumoPorTipo[tipo][servico.nome] = 
                    (consumoPorTipo[tipo][servico.nome] || 0) + 1;
            });
        });

        console.log("Serviços mais consumidos por tipo:");
        for (const tipo in consumoPorTipo) {
            console.log(`Tipo: ${tipo}`);
            for (const servico in consumoPorTipo[tipo]) {
                console.log(`  Serviço: ${servico}, Quantidade: ${consumoPorTipo[tipo][servico]}`);
            }
        }
    }

    // List most consumed products overall
    public produtosMaisConsumidos(): void {
        const consumoTotal: Consumo = {};

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(({ produto }) => {
                consumoTotal[produto.nome] = 
                    (consumoTotal[produto.nome] || 0) + 1;
            });
        });

        console.log("Produtos mais consumidos (geral):");
        for (const produto in consumoTotal) {
            console.log(`Produto: ${produto}, Quantidade: ${consumoTotal[produto]}`);
        }
    }

    public servicosMaisConsumidos(): void {
        const consumoTotal: Consumo = {};

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(({ servico }) => {
                consumoTotal[servico.nome] = 
                    (consumoTotal[servico.nome] || 0) + 1;
            });
        });

        console.log("Serviços mais consumidos (geral):");
        for (const servico in consumoTotal) {
            console.log(`Serviço: ${servico}, Quantidade: ${consumoTotal[servico]}`);
        }
    }
    public top10ClientesMaisConsumidores(): void {
        const clientesConsumo: Array<{ cliente: Cliente; total: number }> = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.length;
            const totalServicos = cliente.getServicosConsumidos.length;
            return { cliente, total: totalProdutos + totalServicos };
        });

        const top10Clientes = clientesConsumo
            .sort((a, b) => b.total - a.total)
            .slice(0, 10);

        console.log("Top 10 clientes que mais consumiram:");
        top10Clientes.forEach(({ cliente, total }, index) => {
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Total Consumido: ${total}`);
        });
    }

    public top5MelhoresGastadores(): void {
        const clientesGastos: Array<{ cliente: Cliente; totalGasto: number }> = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.reduce(
                (sum, { produto }) => sum + produto.preco, 
                0
            );
            const totalServicos = cliente.getServicosConsumidos.reduce(
                (sum, { servico }) => sum + servico.preco, 
                0
            );

            return { cliente, totalGasto: totalProdutos + totalServicos };
        });

        const top5Gastos = clientesGastos
            .sort((a, b) => b.totalGasto - a.totalGasto)
            .slice(0, 5);

        console.log("Top 5 melhores gastadores:");
        top5Gastos.forEach(({ cliente, totalGasto }, index) => {
            console.log(`${index + 1}. Cliente: ${cliente.nome}, Total Gasto: R$${totalGasto.toFixed(2)}`);
        });
    }
}
