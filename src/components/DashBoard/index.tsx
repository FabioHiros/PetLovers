import { Component } from "react";


export default class Dashboard extends Component {
    render() {
        return (
            <div className="mx-auto mt-5 bg-azul-100">
                {/* 10 clientes que mais consumiram em quantidade */}
                <div className='mb-5 "bg-azul-100'>
                    <h5 className="text-xl font-semibold mb-2">10 clientes que mais consumiram em quantidade</h5>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 tex px-4 border-b">Nome cliente</th>
                                <th className="py-2 px-4 border-b">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="py-2 px-4  border-b">Cliente 1</td>
                                <td className="py-2 px-4 border-b">20</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 2</td>
                                <td className="py-2 px-4 border-b">10</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 3</td>
                                <td className="py-2 px-4 border-b">5</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 4</td>
                                <td className="py-2 px-4 border-b">4</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 5</td>
                                <td className="py-2 px-4 border-b">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Listagem geral de produtos e serviços mais consumidos */}
                <div className='mb-5'>
                    <h5 className="text-xl font-semibold mb-2">Listagem geral de produtos e serviços mais consumidos</h5>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Nome</th>
                                <th className="py-2 px-4 border-b">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="py-2 px-4 border-b">Produto 1</td>
                                <td className="py-2 px-4 border-b">20</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Serviço 4</td>
                                <td className="py-2 px-4 border-b">10</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Produto 3</td>
                                <td className="py-2 px-4 border-b">5</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Produto 4</td>
                                <td className="py-2 px-4 border-b">4</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Serviço 1</td>
                                <td className="py-2 px-4 border-b">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Listagem dos serviços e produtos mais consumidos por tipo de pet */}
                <div className='mb-5'>
                    <h5 className="text-xl font-semibold mb-2">Listagem dos serviços e produtos mais consumidos por tipo de pet</h5>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Tipo Pet</th>
                                <th className="py-2 px-4 border-b">Nome</th>
                                <th className="py-2 px-4 border-b">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="py-2 px-4 border-b">Cachorro</td>
                                <td className="py-2 px-4 border-b">Produto 1</td>
                                <td className="py-2 px-4 border-b">20</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cachorro</td>
                                <td className="py-2 px-4 border-b">Serviço 4</td>
                                <td className="py-2 px-4 border-b">10</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cachorro</td>
                                <td className="py-2 px-4 border-b">Produto 3</td>
                                <td className="py-2 px-4 border-b">5</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Gato</td>
                                <td className="py-2 px-4 border-b">Produto 4</td>
                                <td className="py-2 px-4 border-b">4</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Gato</td>
                                <td className="py-2 px-4 border-b">Serviço 1</td>
                                <td className="py-2 px-4 border-b">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Listagem dos serviços e produtos mais consumidos por raça de pet */}
                <div className='mb-5'>
                    <h5 className="text-xl font-semibold mb-2">Listagem dos serviços e produtos mais consumidos por raça de pet</h5>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Raça Pet</th>
                                <th className="py-2 px-4 border-b">Nome</th>
                                <th className="py-2 px-4 border-b">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="py-2 px-4 border-b">Golden</td>
                                <td className="py-2 px-4 border-b">Produto 1</td>
                                <td className="py-2 px-4 border-b">20</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Buldogue</td>
                                <td className="py-2 px-4 border-b">Serviço 4</td>
                                <td className="py-2 px-4 border-b">10</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Poodle</td>
                                <td className="py-2 px-4 border-b">Produto 3</td>
                                <td className="py-2 px-4 border-b">5</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">SRD</td>
                                <td className="py-2 px-4 border-b">Produto 4</td>
                                <td className="py-2 px-4 border-b">4</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Siamês</td>
                                <td className="py-2 px-4 border-b">Serviço 1</td>
                                <td className="py-2 px-4 border-b">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 5 clientes que mais consumiram em valor */}
                <div className='mb-5'>
                    <h5 className="text-xl font-semibold mb-2">5 clientes que mais consumiram em valor</h5>
                    <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Nome cliente</th>
                                <th className="py-2 px-4 border-b">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 1</td>
                                <td className="py-2 px-4 border-b">R$ 20</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 2</td>
                                <td className="py-2 px-4 border-b">R$ 10</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 3</td>
                                <td className="py-2 px-4 border-b">R$ 5</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 4</td>
                                <td className="py-2 px-4 border-b">R$ 4</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cliente 5</td>
                                <td className="py-2 px-4 border-b">R$ 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
