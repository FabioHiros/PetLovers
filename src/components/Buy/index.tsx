import React, { useState } from "react";

export default function Comprar() {
    const [selectedClient, setSelectedClient] = useState("");
    const [selectedItem, setSelectedItem] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleClientChange = (e) => setSelectedClient(e.target.value);
    const handleItemChange = (e) => setSelectedItem(e.target.value);
    const handleQuantityChange = (e) => setQuantity(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra cadastrada:", {
            client: selectedClient,
            item: selectedItem,
            quantity
        });
        // Reset fields after submission
        setSelectedClient("");
        setSelectedItem("");
        setQuantity("");
    };

    return (
        <div className="mx-auto mt-5 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
                <h3 className="text-2xl font-bold text-center mb-4">Informações da Compra</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <select
                            value={selectedClient}
                            onChange={handleClientChange}
                            className="form-select w-full border rounded-md p-2"
                            aria-label="Selecionar Cliente"
                        >
                            <option value="" disabled>Selecione um cliente</option>
                            <option value="Cliente 1">Cliente 1</option>
                            <option value="Cliente 2">Cliente 2</option>
                            <option value="Cliente 3">Cliente 3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <select
                            value={selectedItem}
                            onChange={handleItemChange}
                            className="form-select w-full border rounded-md p-2"
                            aria-label="Selecionar Item"
                        >
                            <option value="" disabled>Selecione um item (produto/serviço)</option>
                            <option value="Produto 1">Produto 1</option>
                            <option value="Produto 2">Produto 2</option>
                            <option value="Serviço 1">Serviço 1</option>
                            <option value="Serviço 2">Serviço 2</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="form-control w-full border rounded-md p-2"
                            placeholder="Quantidade"
                            aria-label="Quantidade"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-md transition duration-200"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
