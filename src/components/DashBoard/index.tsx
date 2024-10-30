import React from 'react';

const data = {
  topClientsByQuantity: [
    { name: 'Cliente 1', quantity: 20 },
    { name: 'Cliente 2', quantity: 10 },
    { name: 'Cliente 3', quantity: 5 },
    { name: 'Cliente 4', quantity: 4 },
    { name: 'Cliente 5', quantity: 3 },
  ],
  topProductsAndServices: [
    { name: 'Produto 1', quantity: 20 },
    { name: 'Serviço 4', quantity: 10 },
    { name: 'Produto 3', quantity: 5 },
    { name: 'Produto 4', quantity: 4 },
    { name: 'Serviço 1', quantity: 3 },
  ],
  consumptionByPetType: [
    { petType: 'Cachorro', name: 'Produto 1', quantity: 20 },
    { petType: 'Cachorro', name: 'Serviço 4', quantity: 10 },
    { petType: 'Cachorro', name: 'Produto 3', quantity: 5 },
    { petType: 'Gato', name: 'Produto 4', quantity: 4 },
    { petType: 'Gato', name: 'Serviço 1', quantity: 3 },
  ],
  consumptionByPetBreed: [
    { petBreed: 'Golden', name: 'Produto 1', quantity: 20 },
    { petBreed: 'Buldogue', name: 'Serviço 4', quantity: 10 },
    { petBreed: 'Poodle', name: 'Produto 3', quantity: 5 },
    { petBreed: 'SRD', name: 'Produto 4', quantity: 4 },
    { petBreed: 'Siamês', name: 'Serviço 1', quantity: 3 },
  ],
  topClientsByValue: [
    { name: 'Cliente 1', value: 'R$ 20' },
    { name: 'Cliente 2', value: 'R$ 10' },
    { name: 'Cliente 3', value: 'R$ 5' },
    { name: 'Cliente 4', value: 'R$ 4' },
    { name: 'Cliente 5', value: 'R$ 3' },
  ],
};

const Dashboard = () => {
  return (
    <div className="mx-auto mt-5 bg-azul-100">
      {Object.entries(data).map(([key, list]) => (
        <div key={key} className="mb-5">
          <h5 className="text-xl font-semibold mb-2">
            {key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())
              .replace('By', 'by')}
          </h5>
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(list[0]).map((header) => (
                  <th key={header} className="py-2 px-4 border-b">
                    {header.replace(/^./, (str) => str.toUpperCase())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {list.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx} className="py-2 px-4 border-b">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
