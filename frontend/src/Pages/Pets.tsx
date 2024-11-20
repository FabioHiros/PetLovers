import React from "react";
import { useCreatePet } from "../Hooks/Pets/CriarPet";
import PetForm from "../components/Pets/PetForm";
import PetsList from "../components/Pets/PetList";

const PetFormContainer: React.FC = () => {
  const { mutate: createPet, isLoading, isError } = useCreatePet();

  const handleSubmit = (data: {
    name: string;
    type: string;
    breed?: string;
    clientId: number;
  }) => {
    createPet(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-8 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
          Add a Pet
        </h1>
        <PetForm onSubmit={handleSubmit} />
        {isLoading && <p className="text-blue-500 mt-2">Creating pet...</p>}
        {isError && (
          <p className="text-red-500 mt-2">Error creating pet. Try again.</p>
        )}
      </div>
      <div className="w-full max-w-4xl">
        <PetsList />
      </div>
    </div>
  );
};

export default PetFormContainer;
