import React from 'react';
import { useState } from 'react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    
    if (name === 'productName') {
      setProductName(value);
    } else if (name === 'productPrice') {
      setProductPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!productName || !productPrice) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Handle product creation logic here
    console.log('Produto criado:', { name: productName, price: productPrice });

    // Clear the form fields
    setProductName('');
    setProductPrice('');
  };

  return (
    <div className="mt-5 flex justify-center">
      <div className="bg-azul-300 shadow-lg rounded-lg w-full p-6">
        <h3 className="text-2xl font-bold text-center mb-4">Cadastrar Produto</h3>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="productName"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Nome do Produto"
              value={productName}
              onChange={handleChange}
              aria-label="Nome do Produto"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="productPrice"
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Preço"
              value={productPrice}
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

export default ProductForm;
