import React from 'react';
import { useState } from 'react';

const ServiceForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    
    if (name === 'serviceName') {
      setServiceName(value);
    } else if (name === 'servicePrice') {
      setServicePrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!serviceName || !servicePrice) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Handle service creation logic here
    console.log('Serviço criado:', { name: serviceName, price: servicePrice });

    // Clear the form fields
    setServiceName('');
    setServicePrice('');
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
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
