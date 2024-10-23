import { Component } from "react";

export default class FormularioCadastroCliente extends Component {
    render() {
        return (
            <div className="  mt-5  justify-center max-md:w-full">
                <div className="bg-azul-300 shadow-lg rounded-lg  ">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-center mb-4">Informações do Cliente</h3>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Nome"
                                    aria-label="Nome"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Nome social"
                                    aria-label="Nome social"
                                />
                            </div>
                            <div className="mb-4">
                            <div className="flex space-x-2 mb-2">
                                    <input
                                        type="text"
                                        className="form-input flex-1"
                                        placeholder="CPF"
                                        aria-label="CPF"
                                    />
                                    <input
                                        type="date"
                                        className="form-input flex-1"
                                        placeholder="Data emissão CPF"
                                        aria-label="Data emissão CPF"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                              
                                <div className="flex space-x-2 mb-2">
                                    <input
                                        type="text"
                                        className="form-input flex-1"
                                        placeholder="RG"
                                        aria-label="RG"
                                    />
                                    <input
                                        type="date"
                                        className="form-input flex-1"
                                        placeholder="Data emissão RG"
                                        aria-label="Data emissão RG"
                                    />
                                </div>
                                <button className='btn btn-light mt-2'>+ Adicionar RG</button>
                            </div>
                            <div className="mb-4">
                              
                                <div className="flex mb-2 max-md:flex-col gap-2">
                                    <input
                                        type="text"
                                        className="form-input flex-1"
                                        placeholder="DDD"
                                        aria-label="DDD"
                                    />
                                    <input
                                        type="text"
                                        className="form-input flex-1"
                                        placeholder="Telefone"
                                        aria-label="Telefone"
                                    />
                                </div>
                                <button className=' mt-2'>+ Adicionar Telefone</button>
                            </div>
                            <h4 className="text-xl font-semibold">Pets:</h4>
                            <div className='mt-5'>
                                <div className="mb-4">
                                    <h5 className="text-lg font-medium">Pet</h5>
                                    <div className="flex  max-md:flex-col gap-2">
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Nome"
                                            aria-label="Nome"
                                        />
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Raça"
                                            aria-label="Raça"
                                        />
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Tipo"
                                            aria-label="Tipo"
                                        />
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Gênero"
                                            aria-label="Gênero"
                                        />
                                    </div>
                                </div>
                                <button className=' mt-2'>+ Adicionar Pet</button>
                            </div>
                            <div className="mt-5">
                                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
