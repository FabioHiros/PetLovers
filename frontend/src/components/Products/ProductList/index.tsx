import React, { useState } from 'react';
import { useGetProducts } from '../../../Hooks/Products/ListaProduto';
import EditProductModal from '../ProductEditModal';
import { useDeleteProduct } from '../../../Hooks/Products/DeletarProduto';

export default function ListProducts() {
  // const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetProducts({ page });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { mutate: deleteProduct,isLoading: isDeleting} = useDeleteProduct();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;
  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };
  return (
    <div className="max-h-100 max-[1100px]:w-full">
      {/* <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div> */}

      <table className="bg-azul-100 max-[1100px]:w-full">
        <thead className="border">
          <tr>
            <th className="border-b-2 px-10 font-semibold">Nome do Produto</th>
            <th className="border-b-2 px-10 font-semibold">Preço</th>
            <th className="border-b-2 px-10 font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.products.map((product) => (
            <tr className="h-24" key={product.id}>
              <td className="border-b-2 px-10 font-semibold">{product.name}</td>
              <td className="border-b-2 px-10">{`$${product.price.toFixed(2)}`}</td>
              <td className="flex-1 max-md:flex-col h-24  border-b-2 p-1">
              <button
                  onClick={() => handleEdit(product)}
                  className="border rounded bg-azul-500 max-md:w-20 text-white"
                >
                  Editar
                </button>
                <button
                  className="border rounded bg-red-500 text-white py-1 px-4"
                  onClick={() => handleDelete(product.id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deletando...' : 'Deletar'}
                </button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
      <EditProductModal
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
      <div className="mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="mr-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
        >
          Anterior
        </button>
        <button
          onClick={() => setPage((prev) => (data?.pagination.currentPage < data.pagination.totalPages ? prev + 1 : prev))}
          disabled={data?.pagination.currentPage === data?.pagination.totalPages}
          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
