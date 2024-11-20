import React, { useState, useEffect } from 'react';
import { useEditPet } from '../../../Hooks/Pets/EditarPet';

interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  clientId: number;
}

interface EditPetModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditPetModal: React.FC<EditPetModalProps> = ({ pet, isOpen, onClose }) => {
  const [formData, setFormData] = useState<Partial<Pet>>({});
  const { mutate: editPet } = useEditPet();

  useEffect(() => {
    if (pet) {
      setFormData(pet);
    }
  }, [pet]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.id) {
      editPet(formData, {
        onSuccess: onClose, // Close the modal on success
      });
    }
  };

  if (!isOpen || !pet) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Pet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <input
              type="text"
              name="type"
              value={formData.type || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Raça</label>
            <input
              type="text"
              name="breed"
              value={formData.breed || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">ID Dono</label>
            <input
              type="text"
              name="clientId"
              value={formData.clientId || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPetModal;
