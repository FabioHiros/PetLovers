import React, { Component } from 'react';

export default class ServiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceName: '',
      servicePrice: '',
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { serviceName, servicePrice } = this.state;

    // Basic validation
    if (!serviceName || !servicePrice) {
      this.setState({ error: 'Por favor, preencha todos os campos.' });
      return;
    }

    // Handle service creation logic here
    console.log('Serviço criado:', { name: serviceName, price: servicePrice });

    // Clear the form fields
    this.setState({ serviceName: '', servicePrice: '' });
  };

  render() {
    const { serviceName, servicePrice, error } = this.state;

    return (
      <div className="mt-5 flex justify-center">
        <div className="bg-azul-300 shadow-lg rounded-lg w-full p-6">
          <h3 className="text-2xl font-bold text-center mb-4">Cadastrar Serviço</h3>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="serviceName"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Nome do Serviço"
                value={serviceName}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
  }
}
