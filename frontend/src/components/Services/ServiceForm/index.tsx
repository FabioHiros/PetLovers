import React, { useState } from 'react';
import { useCreateService } from '../../../Hooks/ServicesHooks/CriarServico';

const ServiceForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');

  const { mutate: createService, isLoading } = useCreateService();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setError('');

    if (name === 'serviceName') {
      setServiceName(value);
    } else if (name === 'servicePrice') {
      setServicePrice(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!serviceName || !servicePrice) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Parse price to number
    const price = parseFloat(servicePrice);
    if (isNaN(price) || price <= 0) {
      setError('Por favor, insira um preço válido.');
      return;
    }

    // Call mutation to create the service
    createService(
      { name: serviceName, description, price },
      {
        onSuccess: () => {
          // Clear form fields after successful submission
          setServiceName('');
          setServicePrice('');
          setDescription('');
        },
        onError: () => {
          setError('Erro ao cadastrar o serviço. Tente novamente.');
        },
      }
    );
  };

  return (
    <div className="mt-5 flex justify-center">
      <div className="bg-azul-300 shadow-lg rounded-lg w-full p-6">
        <h3 className="text-2xl font-bold text-center mb-4">Cadastrar Serviço</h3>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="serviceName"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Nome do Serviço"
              value={serviceName}
              onChange={handleChange}
              aria-label="Nome do Serviço"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Descrição"
              value={description}
              onChange={handleChange}
              aria-label="Descrição"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="servicePrice"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Preço"
              value={servicePrice}
              onChange={handleChange}
              aria-label="Preço"
            />
          </div>
          <div className="mt-5">
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
