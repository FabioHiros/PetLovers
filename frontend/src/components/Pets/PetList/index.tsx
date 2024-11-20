import React, { useState } from 'react';
import { useGetAllPets } from '../../../Hooks/Pets/ListaPets';
import EditPetModal from '../EditPetModal';
import { useDeletePet } from '../../../Hooks/Pets/DeletarPet';

const PetsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedPet, setSelectedPet] = useState(null); // State for the selected pet
  const [showModal, setShowModal] = useState(false); // State to toggle the modal
  const pageSize = 10;
  const deletePetMutation = useDeletePet(); // Use the hook

  const { data, isLoading, error } = useGetAllPets({ page, pageSize });

  const openEditModal = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const closeEditModal = () => {
    setSelectedPet(null);
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      deletePetMutation.mutate(id);
    }
  };


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pets.</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">Pets List</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Breed</th>
            <th className="border border-gray-300 p-2">Owner</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.pets.map((pet) => (
            <tr key={pet.id}>
              <td className="border border-gray-300 p-2">{pet.id}</td>
              <td className="border border-gray-300 p-2">{pet.name}</td>
              <td className="border border-gray-300 p-2">{pet.type}</td>
              <td className="border border-gray-300 p-2">{pet.breed}</td>
              <td className="border border-gray-300 p-2">{pet.client.name}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => openEditModal(pet)}
                  className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pet.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="mr-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data && page * pageSize >= data.total}
          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      <EditPetModal pet={selectedPet} isOpen={showModal} onClose={closeEditModal} />
    </div>
  );
};

export default PetsList;
