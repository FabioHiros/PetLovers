import React, { useState } from 'react';
import { useGetServices } from '../../../Hooks/ServicesHooks/ListaServicos';
import EditServiceModal from '../ServiceEditModal';
import { useDeleteService } from '../../../Hooks/ServicesHooks/DeletarServico';

export default function ListServices() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetServices({ page });
  const [selectedService, setSelectedService] = useState(null);
  const { mutate: deleteService, isLoading: isDeleting } = useDeleteService();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading services.</p>;

  const handleEdit = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      deleteService(id);
    }
  };

  return (
    <div className="max-h-100 max-[1100px]:w-full">
      <table className="bg-azul-100 max-[1100px]:w-full">
        <thead className="border">
          <tr>
            <th className="border-b-2 px-10 font-semibold">Nome do Serviço</th>
            <th className="border-b-2 px-10 font-semibold">Preço</th>
            <th className="border-b-2 px-10 font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.services.map((service) => (
            <tr className="h-24" key={service.id}>
              <td className="border-b-2 px-10 font-semibold">{service.name}</td>
              <td className="border-b-2 px-10">{`$${service.price.toFixed(2)}`}</td>
              <td className="flex-1 max-md:flex-col h-24 border-b-2 p-1">
                <button
                  onClick={() => handleEdit(service)}
                  className="border rounded bg-azul-500 max-md:w-20 text-white"
                >
                  Editar
                </button>
                <button
                  className="border rounded bg-red-500 text-white py-1 px-4"
                  onClick={() => handleDelete(service.id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deletando...' : 'Deletar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Conditionally render the modal only if selectedService is not null */}
      {selectedService && (
        <EditServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
      <div className="mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="mr-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
        >
          Anterior
        </button>
        <button
          onClick={() =>
            setPage((prev) =>
              data?.pagination.currentPage < data.pagination.totalPages ? prev + 1 : prev
            )
          }
          disabled={data?.pagination.currentPage === data?.pagination.totalPages}
          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
