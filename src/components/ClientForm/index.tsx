import React, { useState } from "react";

const FormularioCadastroCliente = () => {
    // State hooks for managing input values
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState("");
    const [rg, setRg] = useState("");
    const [dataEmissaoRg, setDataEmissaoRg] = useState("");
    const [ddd, setDdd] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pets, setPets] = useState([{ nome: "", raca: "", tipo: "", genero: "" }]);

    const handleAddPet = () => {
        setPets([...pets, { nome: "", raca: "", tipo: "", genero: "" }]);
    };

    const handleChangePet = (index, field, value) => {
        const newPets = [...pets];
        newPets[index][field] = value;
        setPets(newPets);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({
            nome,
            nomeSocial,
            cpf,
            dataEmissaoCpf,
            rg,
            dataEmissaoRg,
            ddd,
            telefone,
            pets,
        });
    };

    return (
        <div className="mt-5 justify-center max-md:w-full">
            <div className="bg-azul-300 shadow-lg rounded-lg">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-center mb-4">Informações do Cliente</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                placeholder="Nome"
                                aria-label="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                placeholder="Nome social"
                                aria-label="Nome social"
                                value={nomeSocial}
                                onChange={(e) => setNomeSocial(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <div className="flex space-x-2 mb-2">
                                <input
                                    type="text"
                                    className="form-input flex-1"
                                    placeholder="CPF"
                                    aria-label="CPF"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                                <input
                                    type="date"
                                    className="form-input flex-1"
                                    placeholder="Data emissão CPF"
                                    aria-label="Data emissão CPF"
                                    value={dataEmissaoCpf}
                                    onChange={(e) => setDataEmissaoCpf(e.target.value)}
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
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                                <input
                                    type="date"
                                    className="form-input flex-1"
                                    placeholder="Data emissão RG"
                                    aria-label="Data emissão RG"
                                    value={dataEmissaoRg}
                                    onChange={(e) => setDataEmissaoRg(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-light mt-2">+ Adicionar RG</button>
                        </div>
                        <div className="mb-4">
                            <div className="flex mb-2 max-md:flex-col gap-2">
                                <input
                                    type="text"
                                    className="form-input flex-1"
                                    placeholder="DDD"
                                    aria-label="DDD"
                                    value={ddd}
                                    onChange={(e) => setDdd(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-input flex-1"
                                    placeholder="Telefone"
                                    aria-label="Telefone"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </div>
                            <button className="mt-2">+ Adicionar Telefone</button>
                        </div>
                        <h4 className="text-xl font-semibold">Pets:</h4>
                        <div className="mt-5">
                            {pets.map((pet, index) => (
                                <div key={index} className="mb-4">
                                    <h5 className="text-lg font-medium">Pet {index + 1}</h5>
                                    <div className="flex max-md:flex-col gap-2">
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Nome"
                                            aria-label="Nome"
                                            value={pet.nome}
                                            onChange={(e) => handleChangePet(index, "nome", e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Raça"
                                            aria-label="Raça"
                                            value={pet.raca}
                                            onChange={(e) => handleChangePet(index, "raca", e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Tipo"
                                            aria-label="Tipo"
                                            value={pet.tipo}
                                            onChange={(e) => handleChangePet(index, "tipo", e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="form-input flex-1"
                                            placeholder="Gênero"
                                            aria-label="Gênero"
                                            value={pet.genero}
                                            onChange={(e) => handleChangePet(index, "genero", e.target.value)}
                                        />
                                    </div>
                                </div>
                            ))}
                            <button className="mt-2" type="button" onClick={handleAddPet}>+ Adicionar Pet</button>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioCadastroCliente;
