import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the validation schema
const petSchema = z.object({
  name: z.string().min(1, 'Necessário Informar Nome'),
  type: z.string().min(1, 'Necessário Informar Tipo'),
  breed: z.string().min(1, 'Necessário Informar Raça'),
  clientId: z.string({message:'Necessário Informar Id do dono'}).min(1,'Necessário Informar Id do dono')
});

type PetFormValues = z.infer<typeof petSchema>;

interface PetFormProps {
  onSubmit: (data: PetFormValues) => void;
}

const PetForm: React.FC<PetFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PetFormValues>({
    resolver: zodResolver(petSchema),
  });

  const handleFormSubmit: SubmitHandler<PetFormValues> = (data) => {
    console.log(data)
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Add Pet</h2>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Nome
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={`w-full mt-1 p-2 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Type */}
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium">
          Tipo
        </label>
        <input
          type="text"
          id="type"
          {...register('type')}
          className={`w-full mt-1 p-2 border ${
            errors.type ? 'border-red-500' : 'border-gray-300'
          } rounded`}
        />
        {errors.type && (
          <p className="text-red-500 text-sm">{errors.type.message}</p>
        )}
      </div>

      {/* Breed */}
      <div className="mb-4">
        <label htmlFor="breed" className="block text-sm font-medium">
          Raça
        </label>
        <input
          type="text"
          id="breed"
          {...register('breed')}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />

{errors.breed && (
          <p className="text-red-500 text-sm">{errors.breed.message}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="clientId" className="block text-sm font-medium">
          Id do Dono
        </label>
        <input
          type="number"
          id="clientId"
          {...register('clientId')}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
         {errors.clientId && (
          <p className="text-red-500 text-sm">{errors.clientId.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Adicionar Pet
        </button>
      </div>
    </form>
  );
};

export default PetForm;
