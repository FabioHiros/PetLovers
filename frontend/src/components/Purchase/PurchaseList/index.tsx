import React from "react";
import { useFetchPurchases } from "../../../Hooks/Purchase/ListaCompra";

const PurchaseTable = () => {
  const { data: purchases, isLoading, isError } = useFetchPurchases();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading purchases.</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-full">
      <h2 className="text-lg font-bold mb-4 text-center">Purchases</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm">Client</th>
              <th className="px-4 py-2 border-b text-left text-sm">Pet</th>
              <th className="px-4 py-2 border-b text-left text-sm">Type</th>
              <th className="px-4 py-2 border-b text-left text-sm">Quantity</th>
              <th className="px-4 py-2 border-b text-left text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {purchases?.map((purchase) => (
              <tr key={purchase.id} className="even:bg-gray-50">
                <td className="px-4 py-2 border-b text-sm truncate max-w-xs">
                  {purchase.client.name}
                </td>
                <td className="px-4 py-2 border-b text-sm truncate max-w-xs">
                  {purchase.pet.name}
                </td>
                <td className="px-4 py-2 border-b text-sm">{purchase.type}</td>
                <td className="px-4 py-2 border-b text-sm">{purchase.quantity}</td>
                <td className="px-4 py-2 border-b text-sm">
                  {new Date(purchase.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseTable;
