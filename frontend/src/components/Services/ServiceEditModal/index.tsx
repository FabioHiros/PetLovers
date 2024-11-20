import React, { useEffect, useState } from 'react';
import { useUpdateService } from '../../../Hooks/ServicesHooks/AtualizaServico';



interface EditServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: {
    id: number;
    name: string;
    description: string;
    price: number;
  } | null; // Allow null or undefined
}

const EditServiceModal: React.FC<EditServiceModalProps> = ({ isOpen, onClose, service }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');

  const { mutate: updateservice, isLoading, isError } = useUpdateService();

  useEffect(() => {
    if (isOpen && service) {
      setName(service.name);
      setDescription(service.description);
      setPrice(service.price);
    }
  }, [isOpen, service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || price === undefined || price === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (service) {
      updateservice(
        { id: service.id, name, description, price: Number(price) },
        { onSuccess: () => onClose() }
      );
    }
  };

  if (!isOpen || !service) return null; // Render nothing if no service or modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">service Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
        {isError && <p className="text-red-500 mt-2">Error updating service. Please try again.</p>}
      </div>
    </div>
  );
};

export default EditServiceModal;
