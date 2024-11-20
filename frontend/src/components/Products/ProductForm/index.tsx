import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateProduct } from '../../../Hooks/Products/CriarProduto';

// Define Zod schema for validation
const productSchema = z.object({
  name: z.string().nonempty('Product name is required'),
  description: z.string().nonempty('Description is required'),
  price: z
    .number({ invalid_type_error: 'Price must be a number' })
    .positive('Price must be greater than 0'),
});

// Infer form values from schema
type ProductFormValues = z.infer<typeof productSchema>;

const ProductForm: React.FC = () => {
  const { mutate: createProduct, isLoading, isError } = useCreateProduct();

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  // Handle form submission
  const onSubmit = (data: ProductFormValues) => {
    createProduct(data);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Create Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Product Name</label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
            placeholder="Enter product name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            {...register('description')}
            className={`p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
            placeholder="Enter product description"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">Price</label>
          <input
            type="number"
            id="price"
            {...register('price', { valueAsNumber: true })}
            className={`p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded w-full`}
            placeholder="Enter product price"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Product'}
          </button>
        </div>

        {isError && <p className="text-red-500">Error creating product. Please try again.</p>}
      </form>
    </div>
  );
};

export default ProductForm;
