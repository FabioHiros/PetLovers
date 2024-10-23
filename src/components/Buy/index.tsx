import { Component } from "react";

export default class Comprar extends Component {
    render() {
        return (
            <div className="mx-auto mt-5 flex justify-center">
                <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
                    <h3 className="text-2xl font-bold text-center mb-4">Informações da Compra</h3>
                    <form>
                        <div className="mb-4">
                            <select className='form-select w-full border rounded-md p-2'>
                                <option value="" disabled selected>Selecione um cliente</option>
                                <option>Cliente 1</option>
                                <option>Cliente 2</option>h
                                
                                <option>Cliente 3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <select className='form-select w-full border rounded-md p-2'>
                                <option value="" disabled selected>Selecione um item (produto/serviço)</option>
                                <option>Produto 1</option>
                                <option>Produto 2</option>
                                <option>Serviço 1</option>
                                <option>Serviço 2</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <input 
                                type="number" 
                                className="form-control w-full border rounded-md p-2" 
                                placeholder="Quantidade" 
                                aria-label="Quantidade" 
                            />
                        </div>
                        <div>
                            <button 
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-md transition duration-200" 
                                type="button">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
