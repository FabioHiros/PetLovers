import React, { useState } from "react";
import useFetchClientes from "../../../Hooks/ClientHooks/ListaClientes";
import { useGetProducts } from "../../../Hooks/Products/ListaProduto";
import { useCreatePurchase } from "../../../Hooks/Purchase/CriaCompra";
import { useGetServices } from "../../../Hooks/ServicesHooks/ListaServicos";

const PurchaseForm = () => {
  const { data: clientsResponse } = useFetchClientes();
  const { mutate: createPurchase } = useCreatePurchase();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10; // You can set this as a constant or state if it needs to change dynamically.
  const { data: products } = useGetProducts({ search, page, limit });
  const { data: services } = useGetServices({ search, page, limit });
  const [clientId, setClientId] = useState<number | null>(null);
  const [petId, setPetId] = useState<number | null>(null);
  const [type, setType] = useState<"PRODUCT" | "SERVICE" | null>(null);
  const [itemId, setItemId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  
  const clients = clientsResponse?.clients || [];
  if (!clients || clients.length === 0) {
    return <p>No clients available. Please check your data source.</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientId || !petId || !type || !itemId || quantity <= 0) {
      alert("Please fill all fields.");
      return;
    }

    createPurchase({
      clientId,
      petId,
      itemId,
      quantity,
      type,
    });
  };
//   console.log(clients)
  const selectedClient = clients?.find((client) => client.id === clientId);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Create Purchase</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
     {/* Select Client */}
<select
  id="client"
  className="w-full p-2 border rounded"
  value={clientId || ""}
  onChange={(e) => setClientId(Number(e.target.value))}
>
  <option value="">Select a client</option>
  {Array.isArray(clients) &&
    clients.map((client) => (
      <option key={client.id} value={client.id}>
        {client.name}
      </option>
    ))}
</select>




{/* Select Pet */}
<select
  id="pet"
  className="w-full p-2 border rounded"
  value={petId || ""}
  onChange={(e) => setPetId(Number(e.target.value))}
  disabled={!selectedClient}
>
  <option value="">Select a pet</option>
  {Array.isArray(selectedClient?.pets) &&
    selectedClient.pets.map((pet) => (
      <option key={pet.id} value={pet.id}>
        {pet.name}
      </option>
    ))}
</select>



        {/* Select Type */}
        <div>
          <label htmlFor="type" className="block font-medium mb-1">
            Type
          </label>
          <select
            id="type"
            className="w-full p-2 border rounded"
            value={type || ""}
            onChange={(e) => setType(e.target.value as "PRODUCT" | "SERVICE")}
          >
            <option value="">Select type</option>
            <option value="PRODUCT">Product</option>
            <option value="SERVICE">Service</option>
          </select>
        </div>

        {/* Select Item */}
<select
  id="item"
  className="w-full p-2 border rounded"
  value={itemId || ""}
  onChange={(e) => setItemId(Number(e.target.value))}
  disabled={!type}
>
  <option value="">Select {type === "PRODUCT" ? "a product" : "a service"}</option>
  {(type === "PRODUCT" ? products?.products : services?.services) &&
    (type === "PRODUCT" ? products?.products : services.services).map((item) => (
      <option key={item.id} value={item.id}>
        {item.name} - ${item.price.toFixed(2)}
      </option>
    ))}
</select>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block font-medium mb-1">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="w-full p-2 border rounded"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
