import React, { useState } from "react";
import useFetchClients from "../../../Hooks/ClientHooks/ListaClientes";
import useDeleteClient from "../../../Hooks/ClientHooks/DeletarCliente";
import ClientDetails from "../ClientDetails";
import FormularioEdicaoCliente from "../FormularioEdicaoCliente";

export default function ListClients() {
  const { data, isLoading, error } = useFetchClients();
  const deleteClientMutation = useDeleteClient(); // Use the delete client hook
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [editClientData, setEditClientData] = useState<any | null>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading clients: {error.message}</p>;

  // Ensure clients is an array
  const clients = data?.clients || [];

  const openEditModal = (client) => {
    setEditClientData(client);
  };

  const closeEditModal = () => {
    setEditClientData(null);
  };

  const openClientDetails = (id: number) => {
    setSelectedClientId(id);
  };

  const closeClientDetails = () => {
    setSelectedClientId(null);
  };

  const handleDelete = (clientId: number) => {
    if (window.confirm("Tem certeza que deseja deletar este cliente?")) {
      deleteClientMutation.mutate(clientId, {
        onSuccess: () => {
          console.log("Cliente deletado com sucesso!");
        },
        onError: (error) => {
          console.error("Error deleting client:", error);
        },
      });
    }
  };

  return (
    <div className="max-h-100 max-[1100px]:w-full">
      <table className="bg-azul-100 max-[1100px]:w-full">
        <thead className="border">
          <tr>
            <th className="px-10 py-2">Client Name</th>
            <th className="px-10 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: { id: number; name: string }) => (
            <tr className="h-24" key={client.id}>
              <td
                className="border-b-2 px-10 font-semibold cursor-pointer text-black"
                onClick={() => openClientDetails(client.id)}
              >
                {client.name}
              </td>
              <td className="flex-1 h-24 space-x-2 border-b-2 p-1">
                <button
                  onClick={() => openEditModal(client)}
                  className="border rounded bg-azul-500 text-white"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(client.id)}
                  className="border rounded bg-azul-500 text-white"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editClientData && (
        <FormularioEdicaoCliente
          clientData={editClientData}
          onClose={closeEditModal}
        />
      )}

      {selectedClientId && (
        <ClientDetails
          clientId={selectedClientId}
          onClose={closeClientDetails}
        />
      )}
    </div>
  );
}

