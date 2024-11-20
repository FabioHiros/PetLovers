import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"; // Import Zod for schema validation
import useCadastrarCliente from "../../../Hooks/ClientHooks/CadastrarCliente";
import React from "react";

// Create a validation schema using Zod
const schema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  nomeSocial: z.string().min(1, { message: "Nome Social é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }).min(1, { message: "Email é obrigatório" }),
  rg: z.string().min(1, { message: "RG é obrigatório" }),
  cpf: z.string()
    .regex(/^\d{11}$/, { message: "CPF deve conter exatamente 11 números" })
    .refine((cpf) => isValidCPF(cpf), { message: "CPF inválido" }), // Custom validation function for CPF
  endereco: z.object({
    estado: z.string().min(1, { message: "Estado é obrigatório" }),
    cidade: z.string().min(1, { message: "Cidade é obrigatória" }),
    bairro: z.string().min(1, { message: "Bairro é obrigatório" }),
    rua: z.string().min(1, { message: "Rua é obrigatória" }),
    numero: z.string().min(1, { message: "Número é obrigatório" }),
    codigoPostal: z.string().min(1, { message: "Código Postal é obrigatório" }),
    informacoesAdicionais: z.string().optional(),
  }),
  telefones: z.array(
    z.object({
      ddd: z.string().min(2, { message: "DDD é obrigatório" }),
      numero: z.string().min(8, { message: "Número de telefone é obrigatório e deve ter no mínimo 8 dígitos" }),
    })
  ).min(1, { message: "Pelo menos um telefone é necessário" }),
});

// Example CPF validation function
const isValidCPF = (cpf) => {
  // Logic to validate CPF goes here
  // Placeholder: Just ensures the CPF is a valid format
  return cpf.length === 11;
};


const FormularioCadastroCliente = () => {
  const { mutate: createUser, isLoading, isError, error } = useCadastrarCliente();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema), // Apply Zod validation schema
    defaultValues: {
      name: "",
      nomeSocial: "",
      email: "",
      rg: "",
      cpf: "",
      endereco: {
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        codigoPostal: "",
        informacoesAdicionais: "",
      },
      telefones: [{ ddd: "", numero: "" }],
    },
  });

  const { fields: telefoneFields, append: addTelefone } = useFieldArray({
    control,
    name: "telefones",
  });

  const onSubmit = (data) => {
    createUser(data, {
      onSuccess: () => {
        console.log("User created successfully");
        reset({
            name: "",
            nomeSocial: "",
            email: "",
            rg: "",
            cpf: "",
            endereco: {
              estado: "",
              cidade: "",
              bairro: "",
              rua: "",
              numero: "",
              codigoPostal: "",
              informacoesAdicionais: "",
            },
            telefones: [{ ddd: "", numero: "" }],
          });
      },
      onError: (error) => {
        console.error("Error creating user:", error);
      },
    });
  };

  return (
    <div className="mt-5 justify-center max-md:w-full">
      <div className="bg-azul-300 shadow-lg rounded-lg">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-center mb-4">Cadastro de Cliente</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Client Information */}
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full  border-gray-300 rounded-md shadow-sm"
                placeholder="Nome"
                aria-label="Nome"
                {...register("name")}
              />
              {errors.name && <p className="text-red-500  w-3/4 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Nome Social"
                aria-label="Nome Social"
                {...register("nomeSocial")}
              />
              {errors.nomeSocial && <p className="text-red-500 w-3/4 text-sm">{errors.nomeSocial.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Email"
                aria-label="Email"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 w-3/4 text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
  <input
    type="text"
    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
    placeholder="RG"
    aria-label="RG"
    {...register("rg")}
  />
  {errors.rg && <p className="text-red-500 w-3/4 text-sm">{errors.rg.message}</p>}
</div>

<div className="mb-4">
  <input
    type="text"
    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
    placeholder="CPF"
    aria-label="CPF"
    {...register("cpf")}
  />
  {errors.cpf && <p className="text-red-500 w-3/4 text-sm">{errors.cpf.message}</p>}
</div>

            {/* Address Section */}
            <h4 className="text-xl font-semibold">Endereço:</h4>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Estado"
                {...register("endereco.estado")}
              />
              {errors.endereco?.estado && <p className="text-red-500 w-3/4 text-sm">{errors.endereco.estado.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 w-3/4 rounded-md shadow-sm"
                placeholder="Cidade"
                {...register("endereco.cidade")}
              />
              {errors.endereco?.cidade && <p className="text-red-500  w-3/4 text-sm">{errors.endereco.cidade.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Bairro"
                {...register("endereco.bairro")}
              />
              {errors.endereco?.bairro && <p className="text-red-500 w-3/4 text-sm">{errors.endereco.bairro.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Rua"
                {...register("endereco.rua")}
              />
              {errors.endereco?.rua && <p className="text-red-500  w-3/4 text-sm">{errors.endereco.rua.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Número"
                {...register("endereco.numero")}
              />
              {errors.endereco?.numero && <p className="text-red-500 w-3/4 text-sm">{errors.endereco.numero.message}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Código Postal"
                {...register("endereco.codigoPostal")}
              />
              {errors.endereco?.codigoPostal && <p className="text-red-500 w-3/4 text-sm">{errors.endereco.codigoPostal.message}</p>}
            </div>
            <div className="mb-4">
              <textarea
                className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Informações Adicionais"
                {...register("endereco.informacoesAdicionais")}
              />
            </div>

            {/* Dynamic Telefone Section */}
            <h4 className="text-xl font-semibold">Telefones:</h4>
            {telefoneFields.map((field, index) => (
              <div key={field.id} className="flex mb-2 flex-col">
                <input
                  type="text"
                  className="form-input flex-1 mb-2"
                  placeholder="DDD"
                  {...register(`telefones.${index}.ddd`)}
                />
                {errors.telefones?.[index]?.ddd && (
                  <p className="text-red-500 w-3/4 text-sm">{errors.telefones[index].ddd.message}</p>
                )}
                <input
                  type="text"
                  className="form-input flex-1 m-0"
                  placeholder="Número"
                  {...register(`telefones.${index}.numero`)}
                />
                {errors.telefones?.[index]?.numero && (
                  <p className="text-red-500 w-3/4 text-sm">{errors.telefones[index].numero.message}</p>
                )}
              </div>
            ))}
            <button
              className="mt-2"
              type="button"
              onClick={() => addTelefone({ ddd: "", numero: "" })}
            >
              + Adicionar Telefone
            </button>

            {/* Submit Button */}
            <div className="mt-5">
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCadastroCliente;
