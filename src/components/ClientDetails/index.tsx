import React from "react";
import useFetchClientById from "../../Hooks/BuscaClientePorID";

interface ClientDetailsProps {
  clientId: number;
  onClose: () => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ clientId, onClose }) => {
  const { data: client, isLoading, error } = useFetchClientById(clientId);

  if (isLoading) return <p>Loading client details...</p>;
  if (error) return <p>Error loading client details: {error.message}</p>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <h2 className="text-2xl font-semibold">Nome: {client.nome}</h2>
        <p>Nome Social: {client.nomeSocial}</p>
        
        <h3 className="mt-4 font-semibold">Telefones:</h3>
        {client.telefones.map((telefone: any) => (
          <p key={telefone.id} className="text-sm text-gray-700">
            ({telefone.ddd}) {telefone.numero}
          </p>
        ))}
        
        <h3 className="mt-4 font-semibold">Endereço:</h3>
        <p>Rua:{client.endereco.rua}, {client.endereco.numero}</p>
        <p>Bairro: {client.endereco.bairro}, {client.endereco.cidade} - {client.endereco.estado}</p>
        <p>CEP: {client.endereco.codigoPostal}</p>
        <p className="text-sm text-gray-600">{client.endereco.informacoesAdicionais}</p>
        
        <p className="mt-4">Email: {client.email || "N/A"}</p>
      </div>
    </div>
  );
};

export default ClientDetails;
