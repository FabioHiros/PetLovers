import  { Component } from 'react';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { productName, productPrice } = this.state;

    // Basic validation
    if (!productName || !productPrice) {
      this.setState({ error: 'Por favor, preencha todos os campos.' });
      return;
    }

    // Handle product creation logic here
    console.log('Produto criado:', { name: productName, price: productPrice });

    // Clear the form fields
    this.setState({ productName: '', productPrice: '' });
  };

  render() {
    const { productName, productPrice, error } = this.state;

    return (
      <div className="mt-5 flex justify-center">
        <div className="bg-azul-300 shadow-lg rounded-lg w-full p-6">
          <h3 className="text-2xl font-bold text-center mb-4">Cadastrar Produto</h3>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="productName"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Nome do Produto"
                value={productName}
                onChange={this.handleChange}
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
