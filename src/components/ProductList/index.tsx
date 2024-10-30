import React from "react";

export default function ListProducts() {
  const products = [
    { id: 1, name: "Produto A", price: "$10.00" },
    { id: 2, name: "Produto B", price: "$15.00" },
    { id: 3, name: "Produto C", price: "$20.00" },
  
  ];

  return (
    <div className="max-h-100 max-[1100px]:w-full">
      <table className="bg-azul-100 max-[1100px]:w-full">
        <thead className="border">
          <tr>
            <th className="border-b-2 px-10 font-semibold">Nome do Produto</th>
            <th className="border-b-2 px-10 font-semibold">Preço</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map(product => (
            <tr className="h-24" key={product.id}>
              <td className="border-b-2 px-10 font-semibold">{product.name}</td>
              <td className="border-b-2 px-10">{product.price}</td>
              <td className="flex-1 max-md:flex-col h-24  border-b-2 p-1">
                <button className="border rounded bg-azul-500 max-md:w-20 text-white">Editar</button>
                <button className="border rounded bg-azul-500 max-md:w-20 text-white">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
